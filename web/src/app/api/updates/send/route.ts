import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site";
import { getPost, getPosts, getSubscribers, savePost, type CmsPost } from "@/lib/cms";
import { absoluteUrl } from "@/lib/utils";
import { sanityWriteClient } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";

type SendPayload = {
  secret?: string;
  slug?: string;
  id?: string;
  _id?: string;
  documentId?: string;
  ids?: {
    created?: string[];
    updated?: string[];
  };
  dryRun?: boolean;
};

type UpdateDocument = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  summary: string;
  body?: string[];
  publishedAt?: string;
  sendEmail?: boolean;
  emailSubject?: string;
};

type SubscriberDocument = {
  email: string;
  name?: string;
};

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function markUpdate(_id: string, fields: Record<string, unknown>) {
  await sanityWriteClient.patch(_id).set(fields).commit();
}

function updateIdFromPayload(body: SendPayload) {
  return (
    body._id ||
    body.id ||
    body.documentId ||
    body.ids?.created?.[0] ||
    body.ids?.updated?.[0] ||
    ""
  );
}

async function findCmsUpdate(body: SendPayload) {
  const id = updateIdFromPayload(body);
  const slug = body.slug || "";

  if (id || slug) return getPost(id || slug);

  const posts = await getPosts();
  return posts.find((post) => post.status === "published" && post.notificationStatus !== "sent") || null;
}

async function findSanityUpdate(body: SendPayload) {
  const id =
    updateIdFromPayload(body);
  const slug = body.slug || "";

  if (id || slug) {
    return sanityWriteClient.fetch<UpdateDocument | null>(
      `*[_type == "update" && (($id != "" && _id == $id) || ($slug != "" && slug.current == $slug))][0]{
        _id,
        title,
        "slug": slug.current,
        category,
        summary,
        "body": [pt::text(body)],
        publishedAt,
        sendEmail,
        emailSubject
      }`,
      { id, slug },
    );
  }

  return sanityWriteClient.fetch<UpdateDocument | null>(
    `*[_type == "update" && sendEmail == true && notificationStatus != "sent"] | order(publishedAt desc)[0]{
      _id,
      title,
      "slug": slug.current,
      category,
      summary,
      "body": [pt::text(body)],
      publishedAt,
      sendEmail,
      emailSubject
    }`,
  );
}

function updateEmailContent(update: Pick<CmsPost, "title" | "slug" | "summary"> & { body?: string[]; emailSubject?: string }) {
  const updateUrl = absoluteUrl(`/updates/${update.slug}`);
  const subject = update.emailSubject || `${siteConfig.shortName} update: ${update.title}`;
  const paragraphs = [update.summary, ...(update.body || [])].filter(Boolean);
  const html = [
    `<h1>${escapeHtml(update.title)}</h1>`,
    ...paragraphs.slice(0, 4).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
    `<p><a href="${updateUrl}">Read the full update</a></p>`,
  ].join("");
  const text = `${update.title}\n\n${paragraphs.join("\n\n")}\n\nRead more: ${updateUrl}`;

  return { subject, html, text };
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as SendPayload;
  const configuredSecret = process.env.UPDATES_WEBHOOK_SECRET;
  const providedSecret = request.headers.get("x-updates-secret") || body.secret;

  if (configuredSecret && providedSecret !== configuredSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cmsUpdate = await findCmsUpdate(body);

  if (cmsUpdate?.slug) {
    const subscribers = (await getSubscribers()).filter((subscriber) => subscriber.active);

    if (body.dryRun) {
      return NextResponse.json({ ok: true, dryRun: true, source: "upstash", recipients: subscribers.length, update: cmsUpdate });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      await savePost({ ...cmsUpdate, notificationStatus: "failed" });
      return NextResponse.json({ error: "Resend API key is not configured" }, { status: 500 });
    }

    const resend = new Resend(resendKey);
    const from = process.env.UPDATES_FROM_EMAIL || "SKYPA Foundation <onboarding@resend.dev>";
    const { subject, html, text } = updateEmailContent(cmsUpdate);
    const results = await Promise.allSettled(
      subscribers.map((subscriber) =>
        resend.emails.send({
          from,
          to: subscriber.email,
          subject,
          html,
          text,
        }),
      ),
    );
    const failed = results.filter((result) => result.status === "rejected");

    await savePost({
      ...cmsUpdate,
      notificationStatus: failed.length ? "failed" : "sent",
    });

    return NextResponse.json({
      ok: !failed.length,
      source: "upstash",
      attempted: subscribers.length,
      sent: subscribers.length - failed.length,
      failed: failed.length,
    });
  }

  if (!isSanityConfigured || !process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json({ error: "Update not found in Upstash and Sanity is not configured" }, { status: 404 });
  }

  const update = await findSanityUpdate(body);

  if (!update?.slug) {
    return NextResponse.json({ error: "Update not found" }, { status: 404 });
  }

  if (update.sendEmail === false) {
    return NextResponse.json({ ok: true, skipped: true, reason: "sendEmail is false" });
  }

  const subscribers = await sanityWriteClient.fetch<SubscriberDocument[]>(
    `*[_type == "subscriber" && active == true && defined(email)]{email, name}`,
  );

  if (body.dryRun) {
    return NextResponse.json({ ok: true, dryRun: true, recipients: subscribers.length, update });
  }

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    await markUpdate(update._id, {
      notificationStatus: "failed",
      notificationError: "RESEND_API_KEY is not configured.",
    });

    return NextResponse.json({ error: "Resend API key is not configured" }, { status: 500 });
  }

  const resend = new Resend(resendKey);
  const from = process.env.UPDATES_FROM_EMAIL || "SKYPA Foundation <onboarding@resend.dev>";
  const { subject, html, text } = updateEmailContent(update);

  const results = await Promise.allSettled(
    subscribers.map((subscriber) =>
      resend.emails.send({
        from,
        to: subscriber.email,
        subject,
        html,
        text,
      }),
    ),
  );
  const failed = results.filter((result) => result.status === "rejected");

  await markUpdate(update._id, {
    notificationStatus: failed.length ? "failed" : "sent",
    notificationError: failed.length ? `${failed.length} email sends failed.` : "",
    lastNotificationSentAt: new Date().toISOString(),
    recipientCount: subscribers.length - failed.length,
  });

  return NextResponse.json({
    ok: !failed.length,
    attempted: subscribers.length,
    sent: subscribers.length - failed.length,
    failed: failed.length,
  });
}

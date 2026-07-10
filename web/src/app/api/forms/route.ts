import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/cms";
import { checkPublicRateLimit, clampText, rateLimitResponse } from "@/lib/security";
import { upsertSubscriber } from "@/lib/subscribers";
import { isSanityConfigured } from "@/sanity/env";
import { sanityWriteClient } from "@/sanity/client";

type FormPayload = {
  formType?: string;
  payload?: Record<string, unknown>;
};

const allowedFormTypes = new Set(["school", "volunteer", "sponsor", "contact"]);

export async function POST(request: Request) {
  const ipRate = await checkPublicRateLimit({
    request,
    scope: "forms-ip",
    limit: 8,
    windowSeconds: 15 * 60,
  });

  if (!ipRate.allowed) return rateLimitResponse(ipRate.retryAfter);

  const body = (await request.json().catch(() => null)) as FormPayload | null;

  if (!body?.formType || !allowedFormTypes.has(body.formType) || !body.payload) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const payload = body.payload;
  const honeypot = clampText(payload.companyWebsite || payload.website, 120);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = clampText(payload.email, 160).toLowerCase();
  const name = clampText(payload.name, 120);
  const organization = clampText(payload.organization, 160);
  const interest = clampText(payload.interest, 120);
  const message = clampText(payload.message, 2000);

  const emailRate = await checkPublicRateLimit({
    request,
    scope: "forms-email",
    identifier: email || "blank",
    limit: 4,
    windowSeconds: 60 * 60,
  });

  if (!emailRate.allowed) return rateLimitResponse(emailRate.retryAfter);

  if (!email.includes("@") || name.length < 2 || message.length < 4) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveSubmission({
    formType: body.formType,
    name,
    email,
    organization,
    interest,
    message,
  });

  const subscriberSource =
    body.formType === "contact" ? "form" : (body.formType as "school" | "volunteer" | "sponsor");

  await upsertSubscriber({
    email,
    name,
    source: subscriberSource,
  });

  if (isSanityConfigured && process.env.SANITY_API_WRITE_TOKEN) {
    await sanityWriteClient.create({
      _type: "formSubmission",
      formType: body.formType,
      name,
      email,
      organization,
      interest,
      message,
      createdAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}

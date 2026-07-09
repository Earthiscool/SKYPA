import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/cms";
import { upsertSubscriber } from "@/lib/subscribers";
import { isSanityConfigured } from "@/sanity/env";
import { sanityWriteClient } from "@/sanity/client";

type FormPayload = {
  formType?: string;
  payload?: Record<string, unknown>;
};

const allowedFormTypes = new Set(["school", "volunteer", "sponsor", "contact"]);

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as FormPayload | null;

  if (!body?.formType || !allowedFormTypes.has(body.formType) || !body.payload) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const payload = body.payload;
  const email = String(payload.email || "");
  const name = String(payload.name || "");
  const message = String(payload.message || "");

  if (!email.includes("@") || name.length < 2 || message.length < 4) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveSubmission({
    formType: body.formType,
    name,
    email,
    organization: String(payload.organization || ""),
    interest: String(payload.interest || ""),
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
      organization: String(payload.organization || ""),
      interest: String(payload.interest || ""),
      message,
      createdAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}

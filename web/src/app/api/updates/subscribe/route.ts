import { NextResponse } from "next/server";
import { isValidEmail, normalizeEmail, upsertSubscriber } from "@/lib/subscribers";

type SubscribePayload = {
  email?: string;
  name?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as SubscribePayload | null;
  const email = normalizeEmail(String(body?.email || ""));
  const name = String(body?.name || "").trim();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const result = await upsertSubscriber({ email, name, source: "updates-page" });

  return NextResponse.json({ ok: true, stored: result.stored });
}

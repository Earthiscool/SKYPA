import { NextResponse } from "next/server";
import { checkPublicRateLimit, clampText, rateLimitResponse } from "@/lib/security";
import { isValidEmail, normalizeEmail, upsertSubscriber } from "@/lib/subscribers";

type SubscribePayload = {
  email?: string;
  name?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rate = await checkPublicRateLimit({
    request,
    scope: "updates-subscribe",
    limit: 6,
    windowSeconds: 15 * 60,
  });

  if (!rate.allowed) return rateLimitResponse(rate.retryAfter);

  const body = (await request.json().catch(() => null)) as SubscribePayload | null;
  const email = normalizeEmail(clampText(body?.email, 160));
  const name = clampText(body?.name, 120);

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const result = await upsertSubscriber({ email, name, source: "updates-page" });

  return NextResponse.json({ ok: true, stored: result.stored });
}

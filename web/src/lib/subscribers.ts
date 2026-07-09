import { sanityWriteClient } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { saveSubscriber } from "@/lib/cms";

type SubscriberSource = "form" | "updates-page" | "school" | "volunteer" | "sponsor" | "manual";

type SubscriberInput = {
  email: string;
  name?: string;
  source?: SubscriberSource;
};

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function upsertSubscriber({ email, name = "", source = "updates-page" }: SubscriberInput) {
  const normalizedEmail = normalizeEmail(email);

  if (!isValidEmail(normalizedEmail)) {
    return { stored: false, reason: "invalid-email" };
  }

  if (!isSanityConfigured || !process.env.SANITY_API_WRITE_TOKEN) {
    await saveSubscriber({ email: normalizedEmail, name, source });
    return { stored: false, reason: "sanity-not-configured" };
  }

  const now = new Date().toISOString();
  const existing = await sanityWriteClient.fetch<{ _id: string } | null>(
    `*[_type == "subscriber" && email == $email][0]{_id}`,
    { email: normalizedEmail },
  );

  if (existing?._id) {
    await sanityWriteClient
      .patch(existing._id)
      .set({
        active: true,
        email: normalizedEmail,
        name,
        source,
        updatedAt: now,
      })
      .commit();

    await saveSubscriber({ email: normalizedEmail, name, source });
    return { stored: true, action: "updated" };
  }

  await sanityWriteClient.create({
    _type: "subscriber",
    active: true,
    email: normalizedEmail,
    name,
    source,
    createdAt: now,
    updatedAt: now,
  });

  await saveSubscriber({ email: normalizedEmail, name, source });
  return { stored: true, action: "created" };
}

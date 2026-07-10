"use client";

import { useState } from "react";
import { MailPlus } from "lucide-react";

export function UpdatesSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/updates/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
        }),
      });

      if (!response.ok) throw new Error("Subscribe failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "focus-ring min-h-11 border border-[var(--color-line)] bg-[var(--background)] px-3 text-base font-normal text-[var(--color-ink)] placeholder:text-[rgb(28_25_23/0.48)]";

  return (
    <form
      onSubmit={onSubmit}
      className="soft-card grid gap-3 p-5"
    >
      <div>
        <p className="section-kicker">Updates</p>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-[var(--color-ink)]">Get new posts and events.</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Name
          <input
            name="name"
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            spellCheck={false}
            className={fieldClass}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 bg-[var(--color-deep)] px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-150 hover:bg-[var(--color-coral)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <MailPlus aria-hidden="true" size={16} />
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "success" ? (
        <p className="border border-[var(--color-coral)] bg-[var(--color-teal-soft)] px-4 py-3 text-sm font-medium text-[var(--color-deep)]" role="status" aria-live="polite">
          You are on the updates list.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="border border-[var(--color-coral)] bg-[var(--color-teal-soft)] px-4 py-3 text-sm font-medium text-[var(--color-deep)]" role="alert">
          The signup did not go through. Please try again.
        </p>
      ) : null}
    </form>
  );
}

"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type LeadFormProps = {
  formType: "school" | "volunteer" | "sponsor" | "contact";
  title?: string;
  compact?: boolean;
};

const interestOptions = {
  school: ["School workshop", "Textbook pilot", "Teacher training", "Parent night"],
  volunteer: ["Workshop support", "Curriculum review", "Outreach", "Operations"],
  sponsor: ["Textbook sponsorship", "School pilot", "Corporate volunteering", "General support"],
  contact: ["School partnership", "Volunteer", "Sponsor", "General question"],
};

export function LeadForm({ formType, title = "Start the conversation", compact = false }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, payload }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "focus-ring min-h-11 rounded-[var(--radius-button)] border border-[var(--color-line)] px-3 text-base font-medium text-[var(--color-ink)]";

  return (
    <form
      onSubmit={onSubmit}
      className="soft-card p-5 sm:p-6"
    >
      <div className={compact ? "mb-5" : "mb-7"}>
        <p className="section-kicker">Outreach form</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.015em] text-[var(--color-ink)]">{title}</h2>
        <p className="pretty mt-2 text-sm leading-6 text-[var(--color-muted)]">
          Send the basics. SKYPA can follow up with the right program, sponsorship, or volunteer path.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
          Organization
          <input
            name="organization"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
          Interest
          <select
            required
            name="interest"
            className={fieldClass}
          >
            <option value="">Choose one</option>
            {interestOptions[formType].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold text-[var(--color-ink)]">
        Message
        <textarea
          required
          name="message"
          rows={compact ? 3 : 5}
          className={`${fieldClass} py-3`}
          placeholder="Tell us about grade levels, timeline, location, or how you would like to help."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-deep)] px-5 py-3 text-sm font-black text-white transition hover:bg-[var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send aria-hidden="true" size={16} />
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>

      {status === "success" ? (
        <p className="mt-4 rounded-[var(--radius-button)] bg-[var(--color-teal-soft)] px-4 py-3 text-sm font-bold text-[var(--color-deep)]">
          Thanks. Your inquiry was received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-[var(--radius-button)] bg-[oklch(0.96_0.03_35)] px-4 py-3 text-sm font-bold text-[oklch(0.42_0.12_32)]">
          Something went wrong. Please try again or email SKYPA directly.
        </p>
      ) : null}
    </form>
  );
}

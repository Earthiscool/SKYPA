"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { translatePhrase } from "@/lib/i18n";

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
  const { locale } = useLanguage();
  const t = (value: string) => translatePhrase(value, locale);

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
    "focus-ring min-h-11 border border-[var(--color-line)] bg-[var(--background)] px-3 text-base font-normal text-[var(--color-ink)] placeholder:text-[rgb(28_25_23/0.48)]";

  return (
    <form
      onSubmit={onSubmit}
      className="soft-card p-5 sm:p-6"
    >
      <div className={compact ? "mb-5" : "mb-7"}>
        <p className="section-kicker">{t("Outreach form")}</p>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-[var(--color-ink)]">{t(title)}</h2>
        <p className="pretty mt-2 text-sm leading-6 text-[var(--color-muted)]">
          {t("Send the basics. SetuAI can follow up with the right program, sponsorship, or volunteer path.")}
        </p>
      </div>

      <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          {t("Name")}
          <input
            required
            name="name"
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          {t("Email")}
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            spellCheck={false}
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          {t("Organization")}
          <input
            name="organization"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          {t("Interest")}
          <select
            required
            name="interest"
            className={fieldClass}
          >
            <option value="">{t("Choose one")}</option>
            {interestOptions[formType].map((option) => (
              <option key={option} value={option}>{t(option)}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-[var(--color-ink)]">
        {t("Message")}
        <textarea
          required
          name="message"
          rows={compact ? 3 : 5}
          className={`${fieldClass} py-3`}
          placeholder={t("Tell us about grade levels, timeline, location, or how you would like to help…")}
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[var(--color-deep)] px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-150 hover:bg-[var(--color-coral)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send aria-hidden="true" size={16} />
        {status === "loading" ? t("Sending…") : t("Send Inquiry")}
      </button>

      {status === "success" ? (
        <p className="mt-4 border border-[var(--color-coral)] bg-[var(--color-teal-soft)] px-4 py-3 text-sm font-medium text-[var(--color-deep)]" role="status" aria-live="polite">
          {t("Thanks. Your inquiry was received.")}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 border border-[var(--color-coral)] bg-[var(--color-teal-soft)] px-4 py-3 text-sm font-medium text-[var(--color-deep)]" role="alert">
          {t("Something went wrong. Please try again or email SetuAI directly.")}
        </p>
      ) : null}
    </form>
  );
}

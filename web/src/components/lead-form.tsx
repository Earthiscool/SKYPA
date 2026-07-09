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

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md border border-[#153b4f]/10 bg-white p-5 shadow-xl shadow-[#153b4f]/8 sm:p-6"
    >
      <div className={compact ? "mb-5" : "mb-7"}>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0f8a8f]">Outreach form</p>
        <h2 className="mt-2 text-2xl font-black text-[#153b4f]">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-[#57717d]">
          Send the basics. SKYPA can follow up with the right program, sponsorship, or volunteer path.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#153b4f]">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="min-h-11 rounded-md border border-[#153b4f]/15 px-3 text-base font-medium text-[#153b4f] outline-none focus:border-[#0f8a8f] focus:ring-2 focus:ring-[#0f8a8f]/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#153b4f]">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="min-h-11 rounded-md border border-[#153b4f]/15 px-3 text-base font-medium text-[#153b4f] outline-none focus:border-[#0f8a8f] focus:ring-2 focus:ring-[#0f8a8f]/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#153b4f]">
          Organization
          <input
            name="organization"
            autoComplete="organization"
            className="min-h-11 rounded-md border border-[#153b4f]/15 px-3 text-base font-medium text-[#153b4f] outline-none focus:border-[#0f8a8f] focus:ring-2 focus:ring-[#0f8a8f]/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#153b4f]">
          Interest
          <select
            required
            name="interest"
            className="min-h-11 rounded-md border border-[#153b4f]/15 px-3 text-base font-medium text-[#153b4f] outline-none focus:border-[#0f8a8f] focus:ring-2 focus:ring-[#0f8a8f]/20"
          >
            <option value="">Choose one</option>
            {interestOptions[formType].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold text-[#153b4f]">
        Message
        <textarea
          required
          name="message"
          rows={compact ? 3 : 5}
          className="rounded-md border border-[#153b4f]/15 px-3 py-3 text-base font-medium text-[#153b4f] outline-none focus:border-[#0f8a8f] focus:ring-2 focus:ring-[#0f8a8f]/20"
          placeholder="Tell us about grade levels, timeline, location, or how you would like to help."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#153b4f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0f2a39] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send aria-hidden="true" size={16} />
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>

      {status === "success" ? (
        <p className="mt-4 rounded-md bg-[#e5f6f3] px-4 py-3 text-sm font-bold text-[#0f6f73]">
          Thanks. Your inquiry was received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-md bg-[#fff2ee] px-4 py-3 text-sm font-bold text-[#a34731]">
          Something went wrong. Please try again or email SKYPA directly.
        </p>
      ) : null}
    </form>
  );
}

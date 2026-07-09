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

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-md border border-[#153b4f]/10 bg-white p-5 shadow-sm shadow-[#153b4f]/5"
    >
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
          Updates
        </p>
        <h2 className="mt-2 text-2xl font-black text-[#153b4f]">Get new posts and events.</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#153b4f]">
          Name
          <input
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
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#153b4f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0f2a39] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <MailPlus aria-hidden="true" size={16} />
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "success" ? (
        <p className="rounded-md bg-[#e5f6f3] px-4 py-3 text-sm font-bold text-[#0f6f73]">
          You are on the updates list.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md bg-[#fff2ee] px-4 py-3 text-sm font-bold text-[#a34731]">
          The signup did not go through. Please try again.
        </p>
      ) : null}
    </form>
  );
}

"use client";

import { useMemo, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I am the SKYPA assistant. Ask about school partnerships, the AI textbook, volunteering, sponsorship, or programs.",
    },
  ]);
  const formRef = useRef<HTMLFormElement>(null);

  const visibleMessages = useMemo(() => messages.slice(-8), [messages]);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-6) }),
      });
      const data = (await response.json()) as { reply?: string; error?: string };

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "I could not answer that yet. Please use the contact form and the SKYPA team can follow up.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I am having trouble connecting right now. Please use the contact form and SKYPA can follow up.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      {open ? (
        <div className="mb-3 flex h-[min(620px,calc(100dvh-120px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between bg-[var(--color-deep)] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-button)] bg-white/12">
                <Bot aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="text-sm font-black">SKYPA Assistant</p>
                <p className="text-xs font-semibold text-white/68">AI literacy support</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="focus-ring grid h-9 w-9 place-items-center rounded-[var(--radius-button)] hover:bg-white/10"
            >
              <X aria-hidden="true" size={18} />
              <span className="sr-only">Close assistant</span>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[var(--color-surface-tint)] p-4">
            {visibleMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.content.slice(0, 20)}`}
                className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[84%] rounded-[var(--radius-button)] bg-[var(--color-teal)] px-4 py-3 text-sm leading-6 text-white"
                      : "max-w-[84%] rounded-[var(--radius-button)] border border-[var(--color-line)] bg-white px-4 py-3 text-sm leading-6 text-[var(--color-ink)]"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-bold text-[var(--color-muted)]">
                  <Loader2 aria-hidden="true" size={16} className="animate-spin" />
                  Thinking
                </div>
              </div>
            ) : null}
          </div>

          <form ref={formRef} onSubmit={sendMessage} className="border-t border-[var(--color-line)] bg-white p-3">
            <label className="sr-only" htmlFor="chat-message">
              Message
            </label>
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <textarea
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={2}
                className="focus-ring resize-none rounded-[var(--radius-button)] border border-[var(--color-line)] px-3 py-2 text-sm font-medium text-[var(--color-ink)]"
                placeholder="Ask about programs..."
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="focus-ring grid h-full min-h-11 w-11 place-items-center rounded-[var(--radius-button)] bg-[var(--color-coral)] text-white transition hover:bg-[var(--color-coral-deep)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send aria-hidden="true" size={17} />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring grid h-12 w-12 place-items-center rounded-[var(--radius-button)] bg-[var(--color-coral)] text-white shadow-[0_8px_16px_oklch(0.235_0.055_220/0.16)] transition hover:bg-[var(--color-coral-deep)] sm:h-14 sm:w-14"
      >
        <MessageCircle aria-hidden="true" size={24} />
        <span className="sr-only">Open SKYPA assistant</span>
      </button>
    </div>
  );
}

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
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="mb-3 flex h-[min(620px,calc(100vh-120px))] w-[min(390px,calc(100vw-40px))] flex-col overflow-hidden rounded-md border border-[#153b4f]/15 bg-white shadow-2xl shadow-[#153b4f]/25">
          <div className="flex items-center justify-between bg-[#153b4f] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white/12">
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
              className="grid h-9 w-9 place-items-center rounded-md hover:bg-white/10"
            >
              <X aria-hidden="true" size={18} />
              <span className="sr-only">Close assistant</span>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f8fbf7] p-4">
            {visibleMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.content.slice(0, 20)}`}
                className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[84%] rounded-md bg-[#0f8a8f] px-4 py-3 text-sm leading-6 text-white"
                      : "max-w-[84%] rounded-md border border-[#153b4f]/10 bg-white px-4 py-3 text-sm leading-6 text-[#153b4f]"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-md border border-[#153b4f]/10 bg-white px-4 py-3 text-sm font-bold text-[#57717d]">
                  <Loader2 aria-hidden="true" size={16} className="animate-spin" />
                  Thinking
                </div>
              </div>
            ) : null}
          </div>

          <form ref={formRef} onSubmit={sendMessage} className="border-t border-[#153b4f]/10 bg-white p-3">
            <label className="sr-only" htmlFor="chat-message">
              Message
            </label>
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <textarea
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={2}
                className="resize-none rounded-md border border-[#153b4f]/15 px-3 py-2 text-sm font-medium text-[#153b4f] outline-none focus:border-[#0f8a8f] focus:ring-2 focus:ring-[#0f8a8f]/20"
                placeholder="Ask about programs..."
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="grid h-full min-h-11 w-11 place-items-center rounded-md bg-[#f26d4f] text-white transition hover:bg-[#d95c41] disabled:cursor-not-allowed disabled:opacity-50"
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
        className="grid h-14 w-14 place-items-center rounded-md bg-[#f26d4f] text-white shadow-xl shadow-[#153b4f]/25 transition hover:bg-[#d95c41] focus:outline-none focus:ring-2 focus:ring-[#f26d4f] focus:ring-offset-2"
      >
        <MessageCircle aria-hidden="true" size={24} />
        <span className="sr-only">Open SKYPA assistant</span>
      </button>
    </div>
  );
}

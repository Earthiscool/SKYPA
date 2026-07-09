import { createGateway } from "@ai-sdk/gateway";
import { generateText } from "ai";
import { NextResponse } from "next/server";
import { chatbotKnowledge, siteConfig } from "@/content/site";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

const defaultModel = "amazon/nova-micro";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { messages?: IncomingMessage[] } | null;
  const messages = body?.messages?.filter((message) => message.content?.trim()).slice(-6) || [];

  if (!messages.length) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_AI_GATEWAY_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      reply:
        "The SKYPA assistant is installed, but the Vercel AI Gateway key is not configured on the server yet. Please use the contact form for now.",
    });
  }

  try {
    const model = process.env.AI_GATEWAY_MODEL || defaultModel;
    const aiGateway = createGateway({ apiKey });
    const result = await generateText({
      model: aiGateway(model),
      system: [
        `You are the website assistant for ${siteConfig.name}.`,
        "Be concise, warm, and practical. Help visitors find the right page or form.",
        "Use only approved facts below. If a detail is not provided, say that SKYPA can follow up through the contact form.",
        "Do not invent confirmed schools, company partners, tax status details, dollar amounts, or impact results.",
        "Approved facts:",
        ...chatbotKnowledge.map((fact) => `- ${fact}`),
      ].join("\n"),
      messages: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
      temperature: 0.3,
    });

    return NextResponse.json({ reply: result.text, model });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        reply:
          "I could not reach the AI Gateway right now. Please use the contact form and the SKYPA team can follow up.",
        error: message,
      },
      { status: 200 },
    );
  }
}

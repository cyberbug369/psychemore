import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const messages = Array.isArray(body.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "Please send a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model =
      process.env.OPENROUTER_MODEL || "openrouter/free";

    if (!apiKey) {
      console.error("OPENROUTER_API_KEY is missing.");

      return NextResponse.json(
        { error: "The AI service is not configured yet." },
        { status: 500 }
      );
    }

    const safeMessages: ChatMessage[] = messages
      .filter(
        (message: ChatMessage) =>
          (message.role === "user" ||
            message.role === "assistant") &&
          typeof message.content === "string"
      )
      .slice(-20);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 30000);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "HTTP-Referer": "https://psychemore.vercel.app",
            "X-Title": "Psychemore",
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "system",
                content: `You are Psychemore, a helpful AI assistant for students and young people.

Your job is to help users learn, think clearly, explore careers, improve applications, and solve problems.

Be friendly, intelligent, encouraging, and concise.

When explaining difficult topics, break them into simple steps and examples.

Adapt your answer to the user's question.

Never pretend to know something you don't know. If you are unsure, say so.`,
              },
              ...safeMessages,
            ],
            temperature: 0.5,
          }),
          signal: controller.signal,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("OpenRouter error:", data);

        return NextResponse.json(
          {
            error:
              data?.error?.message ||
              "The AI provider returned an error.",
          },
          { status: response.status }
        );
      }

      const result =
        data?.choices?.[0]?.message?.content;

      if (!result) {
        return NextResponse.json(
          { error: "The AI did not return a response." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        reply: result,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.name === "AbortError"
      ) {
        console.error("OpenRouter request timed out.");

        return NextResponse.json(
          {
            error:
              "The AI took too long to respond. Please try again.",
          },
          { status: 504 }
        );
      }

      console.error(
        "OpenRouter connection error:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Psychemore could not connect to the AI service. Please try again.",
        },
        { status: 504 }
      );
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to process your message. Please try again.",
      },
      { status: 500 }
    );
  }
}

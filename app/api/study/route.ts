import { NextResponse } from "next/server";

type StudyAction = "Summarize" | "Explain" | "Quiz Me";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const notes =
      typeof body.notes === "string" ? body.notes.trim() : "";

    const action = body.action as StudyAction;

    if (!notes) {
      return NextResponse.json(
        { error: "Please provide some study notes." },
        { status: 400 }
      );
    }

    const validActions: StudyAction[] = [
      "Summarize",
      "Explain",
      "Quiz Me",
    ];

    if (!validActions.includes(action)) {
      return NextResponse.json(
        { error: "Please choose Summarize, Explain, or Quiz Me." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const primaryModel =
      process.env.OPENROUTER_MODEL || "openrouter/free";

    if (!apiKey) {
      console.error("OPENROUTER_API_KEY is missing.");

      return NextResponse.json(
        { error: "The AI service is not configured yet." },
        { status: 500 }
      );
    }

    let instruction = "";

    switch (action) {
      case "Summarize":
        instruction =
          "Summarize the student's notes clearly. Extract the main ideas, important terms, and key facts. Keep it easy for a student to understand.";
        break;

      case "Explain":
        instruction =
          "Explain the student's notes in simple, clear language. Start with the basic idea, then explain how the important parts connect. Use a short example when useful.";
        break;

      case "Quiz Me":
        instruction =
          "Create a useful study quiz from the student's notes. Include 5 questions that test understanding rather than simple copying. Put the answer key after the questions.";
        break;
    }

    const prompt = `${instruction}

You are Psychemore's Study Assistant.

Help the student understand and learn the material.
Do not invent information that is not supported by the notes unless
a small amount of general background knowledge is necessary to explain
the topic clearly.

Student notes:
${notes}`;

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
            model: primaryModel,
            models: [primaryModel],
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: 0.4,
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

      const result = data?.choices?.[0]?.message?.content;

      if (!result) {
        return NextResponse.json(
          { error: "The AI did not return a response." },
          { status: 500 }
        );
      }

      return NextResponse.json({ result });
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("OpenRouter request timed out.");

      return NextResponse.json(
        {
          error:
            "The AI took too long to respond. Please try again.",
        },
        { status: 504 }
      );
    }

    console.error("Study API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to connect to the AI Study Assistant. Please try again.",
      },
      { status: 500 }
    );
  }
}
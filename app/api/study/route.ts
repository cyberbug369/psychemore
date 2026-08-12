import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const notes = body.notes;
    const action = body.action;

    if (!notes || !notes.trim()) {
      return NextResponse.json(
        { error: "Please provide some study notes." },
        { status: 400 }
      );
    }

    let result = "";

    if (action === "Summarize") {
      result = `📝 SUMMARY

Here is a simplified summary of your notes:

${notes}

KEY POINTS
• Focus on the main ideas in the material.
• Identify important terms and concepts.
• Try explaining the topic in your own words.

💡 STUDY TIP
After reading the summary, close your notes and try to explain
the topic from memory.`;
    }

    if (action === "Explain") {
      result = `💡 EXPLANATION

Let's break this material down into simpler terms:

${notes}

Think of the topic as a collection of ideas that connect
together. Start with the basic concept, then understand how
the different parts relate to each other.

🧠 QUICK TIP
If something is confusing, break it into smaller questions
and solve them one at a time.`;
    }

    if (action === "Quiz Me") {
      result = `🎯 QUICK QUIZ

Based on the material you provided, try answering these:

1. What is the main idea of this topic?

2. What are the most important concepts you remember?

3. Can you explain the topic without looking at your notes?

4. Give one real-world example related to this topic.

5. What part of the material do you find most difficult?

🔥 CHALLENGE
Answer the questions without looking back at your notes.
Then check your answers and identify what you need to review.`;
    }

    if (!result) {
      result = "Please choose Summarize, Explain, or Quiz Me.";
    }

    return NextResponse.json({
      result,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
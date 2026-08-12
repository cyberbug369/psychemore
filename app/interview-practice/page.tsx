"use client";

import { useState } from "react";

export default function InterviewPractice() {
  const [role, setRole] = useState("");
  const [interviewType, setInterviewType] = useState("General");
  const [question, setQuestion] = useState(
    "Tell me about yourself."
  );
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateQuestion = () => {
    const questions = [
      "Tell me about yourself.",
      "Why are you interested in this position?",
      "What are your greatest strengths?",
      "Tell me about a challenge you have faced and how you handled it.",
      "Why should we hire you?",
    ];

    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    setQuestion(randomQuestion);
    setAnswer("");
    setFeedback("");
  };

  const submitAnswer = () => {
    if (!answer.trim()) {
      setFeedback("Please write an answer before submitting.");
      return;
    }

    setFeedback(
      "Good attempt! Try to keep your answer clear, specific, and focused on your skills, experience, and results."
    );
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 text-5xl">🎯</div>

          <h1 className="text-4xl font-bold text-purple-400 md:text-5xl">
            Interview Practice
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Practice interview questions and improve your confidence.
          </p>
        </div>

        {/* Setup */}
        <section className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-2xl font-bold">
            Interview Setup
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Job Role
              </label>

              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Frontend Developer"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Interview Type
              </label>

              <select
                value={interviewType}
                onChange={(e) => setInterviewType(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-purple-500"
              >
                <option>General</option>
                <option>Technical</option>
                <option>Behavioral</option>
                <option>Internship</option>
              </select>
            </div>

          </div>
        </section>

        {/* Question */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">
              Interview Question
            </h2>

            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-400">
              {interviewType}
            </span>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-5">
            <p className="text-lg leading-7 text-zinc-200">
              {question}
            </p>

            {role && (
              <p className="mt-3 text-sm text-zinc-400">
                Preparing for: {role}
              </p>
            )}
          </div>

          {/* Answer */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Your Answer
            </label>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="h-48 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
            />
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={submitAnswer}
              className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
            >
              Submit Answer
            </button>

            <button
              onClick={generateQuestion}
              className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold transition hover:bg-zinc-700"
            >
              🎯 Next Question
            </button>
          </div>
        </section>

        {/* Feedback */}
        {feedback && (
          <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-3 text-2xl font-bold">
              Feedback
            </h2>

            <p className="leading-7 text-zinc-300">
              {feedback}
            </p>
          </section>
        )}

      </div>
    </main>
  );
}
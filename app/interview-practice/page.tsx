"use client";

import { useState } from "react";

const questionsByType: Record<string, string[]> = {
  General: [
    "Tell me about yourself.",
    "Why are you interested in this position?",
    "What are your greatest strengths?",
    "What is one area you are currently working to improve?",
    "Why should we hire you?",
  ],
  Technical: [
    "Tell me about a technical project you have worked on.",
    "How do you approach debugging a difficult problem?",
    "How do you learn a new technology?",
    "Tell me about a technical challenge you faced and how you solved it.",
    "How do you make sure your code is reliable and maintainable?",
  ],
  Behavioral: [
    "Tell me about a time you worked as part of a team.",
    "Describe a challenge you faced and how you handled it.",
    "Tell me about a time you made a mistake and what you learned.",
    "Describe a situation where you had to meet a difficult deadline.",
    "Tell me about a time you showed leadership.",
  ],
  Internship: [
    "Why are you interested in this internship?",
    "What skills do you hope to develop during this internship?",
    "Tell me about a school project you are proud of.",
    "How do you handle learning something you do not understand?",
    "What would you bring to our team as an intern?",
  ],
};

function calculateScore(answer: string) {
  const words = answer.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  if (wordCount < 15) return 45;
  if (wordCount < 30) return 60;
  if (wordCount < 50) return 75;
  if (wordCount < 80) return 88;
  return 95;
}

function getFeedback(score: number, answer: string) {
  const lower = answer.toLowerCase();

  const hasExample =
    lower.includes("for example") ||
    lower.includes("when i") ||
    lower.includes("i worked") ||
    lower.includes("i built") ||
    lower.includes("i created") ||
    lower.includes("i helped");

  const hasResult =
    lower.includes("result") ||
    lower.includes("improved") ||
    lower.includes("increased") ||
    lower.includes("achieved") ||
    lower.includes("learned");

  if (score >= 88 && hasExample && hasResult) {
    return "Strong answer. You gave enough detail, included an example, and showed an outcome. That's the kind of structure interviewers can easily follow.";
  }

  if (score >= 75 && hasExample) {
    return "Good answer. You included a concrete example. To make it stronger, finish by explaining the result or what you learned.";
  }

  if (score >= 75) {
    return "Solid answer. You gave useful detail, but adding a specific example and the result of your actions would make it more convincing.";
  }

  if (score >= 60) {
    return "Decent start. Try giving a specific example instead of keeping the answer general. Explain what you did and what happened afterward.";
  }

  return "Your answer is a little short. Try using a simple structure: situation, what you did, and the result or lesson you learned.";
}

export default function InterviewPractice() {
  const [role, setRole] = useState("");
  const [interviewType, setInterviewType] = useState("General");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const questions = questionsByType[interviewType];
  const question = questions[questionIndex];

  const submitAnswer = () => {
    if (!answer.trim()) {
      setFeedback("Please write an answer before submitting.");
      setScore(null);
      return;
    }

    const newScore = calculateScore(answer);
    setScore(newScore);
    setFeedback(getFeedback(newScore, answer));

    setScores((previous) => {
      const updated = [...previous];
      updated[questionIndex] = newScore;
      return updated;
    });
  };

  const nextQuestion = () => {
    if (!answer.trim()) {
      setFeedback("Answer the current question before moving on.");
      return;
    }

    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setQuestionIndex((previous) => previous + 1);
    setAnswer("");
    setFeedback("");
    setScore(null);
  };

  const changeInterviewType = (type: string) => {
    setInterviewType(type);
    setQuestionIndex(0);
    setAnswer("");
    setFeedback("");
    setScore(null);
    setScores([]);
    setFinished(false);
  };

  const restart = () => {
    setQuestionIndex(0);
    setAnswer("");
    setFeedback("");
    setScore(null);
    setScores([]);
    setFinished(false);
  };

  const finalAverage =
    scores.length > 0
      ? Math.round(
          scores.reduce((total, current) => total + current, 0) /
            scores.length
        )
      : 0;

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
          <div className="mb-4 text-5xl">🎯</div>

          <h1 className="text-4xl font-bold text-purple-400 md:text-5xl">
            Interview Practice
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Practice real interview questions and improve your confidence.
          </p>
        </div>

        {!finished ? (
          <>
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
                    onChange={(e) => changeInterviewType(e.target.value)}
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

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">
                  Interview Question
                </h2>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-400">
                    {interviewType}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {questionIndex + 1} / {questions.length}
                  </span>
                </div>
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

                <p className="mt-2 text-xs text-zinc-600">
                  Tip: Give a specific example and explain the result.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={submitAnswer}
                  className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
                >
                  Analyze Answer
                </button>

                <button
                  onClick={nextQuestion}
                  className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold transition hover:bg-zinc-700"
                >
                  {questionIndex === questions.length - 1
                    ? "Finish Interview"
                    : "Next Question →"}
                </button>
              </div>
            </section>

            {score !== null && (
              <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">
                      Answer Score
                    </h2>

                    <p className="mt-2 text-zinc-400">
                      Based on clarity, detail, and answer length.
                    </p>
                  </div>

                  <div className="text-4xl font-bold text-purple-400">
                    {score}/100
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-purple-600 transition-all"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <p className="mt-5 leading-7 text-zinc-300">
                  {feedback}
                </p>
              </section>
            )}

            {feedback && score === null && (
              <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-zinc-300">{feedback}</p>
              </section>
            )}
          </>
        ) : (
          <section className="rounded-2xl border border-purple-500/30 bg-zinc-900 p-8 text-center">
            <div className="text-5xl">🏆</div>

            <h2 className="mt-5 text-3xl font-bold">
              Interview Complete
            </h2>

            <p className="mt-3 text-zinc-400">
              Nice work. You completed all {questions.length} questions.
            </p>

            <div className="mx-auto mt-8 max-w-xs rounded-2xl bg-purple-600/10 p-6">
              <p className="text-sm text-zinc-400">
                Overall Score
              </p>

              <p className="mt-2 text-5xl font-bold text-purple-400">
                {finalAverage}/100
              </p>
            </div>

            <button
              onClick={restart}
              className="mt-8 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
            >
              Practice Again
            </button>
          </section>
        )}
      </div>
    </main>
  );
}

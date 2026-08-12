"use client";

import { useState } from "react";

export default function StudyAssistant() {
  const [notes, setNotes] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAction = async (action: string) => {
    if (!notes.trim()) {
      setResult("Please paste or type your study notes first.");
      return;
    }

    setMode(action);
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/study", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes,
          action,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setResult(data.error || "Something went wrong.");
        return;
      }

      setResult(data.result);
    } catch {
      setResult("Unable to connect to the Study Assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
          <div className="mb-4 text-5xl">🧠</div>

          <h1 className="text-4xl font-bold text-purple-400 md:text-5xl">
            AI Study Assistant
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Summarize notes, explain concepts and help you study smarter.
          </p>
        </div>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
          <label className="mb-3 block text-lg font-semibold">
            What do you want to study?
          </label>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Paste your notes, textbook content, or a topic here..."
            className="h-64 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => handleAction("Summarize")}
              disabled={loading}
              className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              📝 Summarize
            </button>

            <button
              onClick={() => handleAction("Explain")}
              disabled={loading}
              className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              💡 Explain
            </button>

            <button
              onClick={() => handleAction("Quiz Me")}
              disabled={loading}
              className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              🎯 Quiz Me
            </button>
          </div>
        </section>

        {loading && (
          <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-purple-400">
              🧠 Psychemore is thinking...
            </p>
          </section>
        )}

        {result && !loading && (
          <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">
                {mode}
              </h2>

              <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-400">
                Study Assistant
              </span>
            </div>

            <div className="whitespace-pre-wrap leading-7 text-zinc-300">
              {result}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
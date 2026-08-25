"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function DashboardChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();

    const trimmed = input.trim();

    if (!trimmed || loading) return;

    const userMessage: Message = {
      role: "user",
      content: trimmed,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Something went wrong."
        );
      }

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.reply ||
          "I couldn't generate a response.",
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">

      <div className="flex-1 space-y-6 pb-8">

        {messages.length === 0 ? (
          <div className="flex min-h-[320px] items-center justify-center">
            <div className="text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-2xl">
                ✦
              </div>

              <h2 className="text-xl font-semibold">
                How can I help you today?
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Ask Psychemore about studying,
                careers, resumes, applications,
                or anything you're working on.
              </p>

            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-5 py-3 text-sm leading-7 ${
                  message.role === "user"
                    ? "bg-purple-600 text-white"
                    : "border border-zinc-800 bg-[#111116] text-zinc-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-zinc-800 bg-[#111116] px-5 py-3 text-sm text-zinc-500">
              Psychemore is thinking...
            </div>
          </div>
        )}

      </div>

      <form
        onSubmit={sendMessage}
        className="sticky bottom-4 flex items-center gap-3 rounded-2xl border border-zinc-700 bg-[#111116] p-3 shadow-2xl shadow-black/30"
      >
        <input
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          disabled={loading}
          placeholder="Message Psychemore..."
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600"
        />

        <button
          type="submit"
          disabled={
            loading || !input.trim()
          }
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-lg transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          ↑
        </button>
      </form>

      <p className="mt-3 text-center text-xs text-zinc-600">
        Psychemore may make mistakes. Check important
        information.
      </p>

    </div>
  );
}

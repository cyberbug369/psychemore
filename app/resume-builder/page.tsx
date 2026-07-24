"use client";

import { useState } from "react";

export default function ResumeBuilder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <h1 className="mb-2 text-5xl font-bold">
        AI Resume Builder
      </h1>

      <p className="mb-10 text-zinc-400">
        Build a professional resume in minutes.
      </p>

      <div className="space-y-5 max-w-2xl">

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl bg-zinc-900 border border-zinc-800 p-4"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-zinc-900 border border-zinc-800 p-4"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl bg-zinc-900 border border-zinc-800 p-4"
        />

        <button className="rounded-xl bg-purple-600 px-6 py-3 hover:bg-purple-500 transition">
          Generate Resume
        </button>

      </div>
    </main>
  );
}
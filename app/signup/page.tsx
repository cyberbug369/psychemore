"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created! Check your email to confirm your account, then log in."
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-12 text-white">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <div className="mb-4 text-5xl">🧠</div>

          <h1 className="text-4xl font-bold">
            Join <span className="text-purple-400">Psychemore</span>
          </h1>

          <p className="mt-3 text-zinc-400">
            Create your free account and unlock the tools.
          </p>
        </div>

        <form
          onSubmit={handleSignUp}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mb-5 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
          />

          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Password
          </label>

          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {message && (
            <p className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
              {message}
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-purple-400 hover:text-purple-300"
          >
            Log in
          </Link>
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-purple-400"
          >
            ← Back to Psychemore
          </Link>
        </div>

      </div>
    </main>
  );
}

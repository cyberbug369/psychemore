"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function SignUpPage() {
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

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Account created! Check your email to confirm your account."
    );

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">

        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

          <div className="mb-8 text-center">
            <div className="mb-4 text-4xl">✦</div>

            <h1 className="text-3xl font-bold">
              Create your{" "}
              <span className="text-purple-400">Psychemore</span>{" "}
              account
            </h1>

            <p className="mt-3 text-zinc-400">
              Start learning, growing, and building your future.
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-5">

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a strong password"
                minLength={6}
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {message && (
            <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-sm text-zinc-300">
              {message}
            </div>
          )}

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
              className="text-sm text-zinc-500 hover:text-purple-400"
            >
              ← Back to Psychemore
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/get-started");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-12 text-white">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <div className="mb-4 text-5xl">🧠</div>

          <h1 className="text-4xl font-bold">
            Welcome <span className="text-purple-400">Back</span>
          </h1>

          <p className="mt-3 text-zinc-400">
            Log in to continue using Psychemore.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Your password"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          {message && (
            <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
              {message}
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-purple-400 hover:text-purple-300"
          >
            Create one
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

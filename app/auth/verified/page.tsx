"use client";

import Link from "next/link";

export default function VerifiedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-12 text-white">
      <div className="w-full max-w-md text-center">

        <div className="mb-6 text-6xl">🧠</div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/20 text-3xl">
            ✓
          </div>

          <h1 className="text-3xl font-bold">
            Email <span className="text-purple-400">Verified!</span>
          </h1>

          <p className="mt-4 leading-7 text-zinc-400">
            Your Psychemore account has been successfully verified.
            You&apos;re all set to start using your tools.
          </p>

          <Link
            href="/get-started"
            className="mt-7 block w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
          >
            Continue to Psychemore →
          </Link>

          <Link
            href="/"
            className="mt-4 block text-sm text-zinc-500 transition hover:text-purple-400"
          >
            Back to Psychemore
          </Link>
        </div>

        <p className="mt-6 text-xs text-zinc-600">
          Psychemore — Think Smarter. Grow Further.
        </p>

      </div>
    </main>
  );
}

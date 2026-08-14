import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Purple Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <h1 className="relative text-5xl font-extrabold leading-tight md:text-7xl">
        Think <span className="text-purple-400">Smarter.</span>
        <br />
        Grow Further.
      </h1>

      <p className="relative mt-6 max-w-2xl text-lg text-zinc-400">
        Discover powerful psychology, learning, and productivity tools
        designed to help you think clearly, build better habits, and unlock
        your full potential.
      </p>

      <div className="relative mt-10 flex gap-4">
        {/* Get Started */}
        <Link
          href="/signup"
          className="rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
        >
          Get Started
        </Link>

        {/* Learn More */}
        <Link
          href="#features"
          className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-purple-400 hover:text-purple-400"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
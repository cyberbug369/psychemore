import Link from "next/link";
import Logo from "../components/Logo";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-14 text-center">

          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Welcome to{" "}
            <span className="text-purple-400">Psychemore</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Think smarter, learn faster, and discover opportunities
            that help you grow.
          </p>
        </div>

        {/* Feature Options */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Resume */}
          <Link
            href="/resume-builder"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
          >
            <div className="mb-4 text-4xl">📄</div>

            <h2 className="text-xl font-bold group-hover:text-purple-400">
              Build Your Resume
            </h2>

            <p className="mt-3 text-zinc-400">
              Create a professional resume and prepare yourself
              for your next opportunity.
            </p>

            <span className="mt-5 block font-semibold text-purple-400">
              Get started →
            </span>
          </Link>

          {/* Study Assistant */}
          <Link
            href="/study-assistant"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
          >
            <div className="mb-4 text-4xl">📚</div>

            <h2 className="text-xl font-bold group-hover:text-purple-400">
              Study Smarter
            </h2>

            <p className="mt-3 text-zinc-400">
              Summarize notes, understand concepts, and practice
              what you have learned.
            </p>

            <span className="mt-5 block font-semibold text-purple-400">
              Start studying →
            </span>
          </Link>

          {/* Opportunities */}
          <Link
            href="/opportunities"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
          >
            <div className="mb-4 text-4xl">💼</div>

            <h2 className="text-xl font-bold group-hover:text-purple-400">
              Find Opportunities
            </h2>

            <p className="mt-3 text-zinc-400">
              Explore scholarships, internships, jobs, and other
              opportunities.
            </p>

            <span className="mt-5 block font-semibold text-purple-400">
              Explore →
            </span>
          </Link>

          {/* Cover Letter */}
          <Link
            href="/cover-letter"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
          >
            <div className="mb-4 text-4xl">✉️</div>

            <h2 className="text-xl font-bold group-hover:text-purple-400">
              Create a Cover Letter
            </h2>

            <p className="mt-3 text-zinc-400">
              Prepare a strong cover letter for applications and
              career opportunities.
            </p>

            <span className="mt-5 block font-semibold text-purple-400">
              Create one →
            </span>
          </Link>

          {/* Interview Practice */}
          <Link
            href="/interview-practice"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
          >
            <div className="mb-4 text-4xl">🎯</div>

            <h2 className="text-xl font-bold group-hover:text-purple-400">
              Practice Interviews
            </h2>

            <p className="mt-3 text-zinc-400">
              Prepare for interviews and build confidence before
              the real thing.
            </p>

            <span className="mt-5 block font-semibold text-purple-400">
              Practice →
            </span>
          </Link>

          {/* Career Roadmap */}
          <Link
            href="/career-roadmap"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
          >
            <div className="mb-4 text-4xl">🌍</div>

            <h2 className="text-xl font-bold group-hover:text-purple-400">
              Build a Career Roadmap
            </h2>

            <p className="mt-3 text-zinc-400">
              Explore possible career paths and create a plan
              for your future.
            </p>

            <span className="mt-5 block font-semibold text-purple-400">
              Explore careers →
            </span>
          </Link>

        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-zinc-500 transition hover:text-purple-400"
          >
            ← Back to Psychemore
          </Link>
        </div>

      </div>
    </main>
  );
}
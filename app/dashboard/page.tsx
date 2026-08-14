import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  async function signOut() {
    "use server";

    const supabase = await createClient();

    await supabase.auth.signOut();

    redirect("/");
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              Psychemore Dashboard
            </p>

            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
              Welcome back 👋
            </h1>

            <p className="mt-3 text-zinc-400">
              {user.email}
            </p>
          </div>

          <form action={signOut}>
            <button
              type="submit"
              className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold transition hover:border-red-400 hover:text-red-400"
            >
              Log Out
            </button>
          </form>
        </div>

        {/* Welcome Card */}
        <section className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">
            Think smarter. Grow further.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            Your Psychemore tools are all in one place. Choose something
            to work on and keep building toward your goals.
          </p>
        </section>

        {/* Tools */}
        <section>
          <h2 className="mb-5 text-2xl font-bold">
            Your Tools
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/resume-builder"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
            >
              <div className="mb-4 text-3xl">📄</div>
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                Resume Builder
              </h3>
              <p className="mt-2 text-zinc-400">
                Build and improve your resume.
              </p>
            </Link>

            <Link
              href="/study-assistant"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
            >
              <div className="mb-4 text-3xl">📚</div>
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                Study Assistant
              </h3>
              <p className="mt-2 text-zinc-400">
                Study, summarize notes, and practice.
              </p>
            </Link>

            <Link
              href="/cover-letter"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
            >
              <div className="mb-4 text-3xl">✉️</div>
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                Cover Letter
              </h3>
              <p className="mt-2 text-zinc-400">
                Prepare a strong application letter.
              </p>
            </Link>

            <Link
              href="/opportunities"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
            >
              <div className="mb-4 text-3xl">💼</div>
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                Opportunities
              </h3>
              <p className="mt-2 text-zinc-400">
                Explore jobs, scholarships, and internships.
              </p>
            </Link>

            <Link
              href="/interview-practice"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
            >
              <div className="mb-4 text-3xl">🎯</div>
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                Interview Practice
              </h3>
              <p className="mt-2 text-zinc-400">
                Practice questions and improve your confidence.
              </p>
            </Link>

            <Link
              href="/career-roadmap"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
            >
              <div className="mb-4 text-3xl">🌍</div>
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                Career Roadmap
              </h3>
              <p className="mt-2 text-zinc-400">
                Build a plan for your future career.
              </p>
            </Link>

          </div>
        </section>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold transition hover:border-purple-400 hover:text-purple-400"
          >
            ← Home
          </Link>

          <Link
            href="/get-started"
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
          >
            Explore More
          </Link>
        </div>

      </div>
    </main>
  );
}
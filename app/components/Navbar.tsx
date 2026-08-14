import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import Logo from "./Logo";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function signOut() {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();

    redirect("/");
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-purple-900/30 bg-zinc-950/70 px-8 py-5 backdrop-blur-xl">
      <Logo />

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-8 text-zinc-300 md:flex">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 hover:text-purple-400"
          >
            Home
          </Link>

          <Link
            href="/study-assistant"
            className="transition-all duration-300 hover:scale-105 hover:text-purple-400"
          >
            Learn
          </Link>

          <Link
            href="/opportunities"
            className="transition-all duration-300 hover:scale-105 hover:text-purple-400"
          >
            Opportunities
          </Link>

          <Link
            href="/resume-builder"
            className="transition-all duration-300 hover:scale-105 hover:text-purple-400"
          >
            Resume Builder
          </Link>

          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 hover:text-purple-400"
          >
            About
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl border border-zinc-700 px-4 py-2 font-semibold transition hover:border-purple-400 hover:text-purple-400"
            >
              Dashboard
            </Link>

            <form action={signOut}>
              <button
                type="submit"
                className="rounded-xl bg-purple-600 px-4 py-2 font-semibold transition hover:bg-purple-500"
              >
                Log Out
              </button>
            </form>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-zinc-700 px-4 py-2 font-semibold transition hover:border-purple-400 hover:text-purple-400"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-purple-600 px-4 py-2 font-semibold transition hover:bg-purple-500"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
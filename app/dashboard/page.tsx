import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import Logo from "../components/Logo";
import DashboardChat from "../components/DashboardChat";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const metadata = user.user_metadata || {};

  const fullName =
    metadata.full_name ||
    metadata.name ||
    metadata.display_name ||
    "";

  const firstName =
    fullName.trim().split(/\s+/)[0] ||
    user.email?.split("@")[0] ||
    "there";

  const avatarUrl =
    metadata.avatar_url ||
    metadata.picture ||
    "";

  async function signOut() {
    "use server";

    const supabase = await createClient();

    await supabase.auth.signOut();

    redirect("/");
  }

  const navigation = [
    {
      href: "/dashboard",
      label: "Home",
      icon: "⌂",
    },
    {
      href: "/study-assistant",
      label: "Study Assistant",
      icon: "📚",
    },
    {
      href: "/resume-builder",
      label: "Resume Builder",
      icon: "📄",
    },
    {
      href: "/cover-letter",
      label: "Cover Letter",
      icon: "✉️",
    },
    {
      href: "/opportunities",
      label: "Opportunities",
      icon: "💼",
    },
    {
      href: "/interview-practice",
      label: "Interview Practice",
      icon: "🎯",
    },
    {
      href: "/career-roadmap",
      label: "Career Roadmap",
      icon: "🧭",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 flex-col border-r border-zinc-800/80 bg-[#101014] p-3 md:flex">

          {/* Small Psychemore Logo */}
          <Link
            href="/dashboard"
            className="mb-6 flex items-center px-3 py-2"
          >
            <Logo compact />
          </Link>

          {/* New Chat */}
          <Link
            href="/dashboard"
            className="mb-4 flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold transition hover:bg-zinc-800"
          >
            <span className="text-lg">＋</span>
            New Chat
          </Link>

          {/* Navigation */}
          <nav className="space-y-1">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  item.href === "/dashboard"
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span className="w-5 text-center">
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}

          </nav>

          {/* Bottom User Section */}
          <div className="mt-auto border-t border-zinc-800 pt-4">

            <div className="mb-3 flex items-center gap-3 rounded-xl px-2 py-2">

              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt=""
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold">
                  {firstName.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {fullName || firstName}
                </p>

                <p className="truncate text-xs text-zinc-500">
                  {user.email}
                </p>
              </div>

            </div>

            {/* ONLY Logout */}
            <form action={signOut}>
              <button
                type="submit"
                className="w-full rounded-xl px-3 py-2 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-red-400"
              >
                ↪ Log out
              </button>
            </form>

          </div>

        </aside>

        {/* Main Workspace */}
        <section className="flex min-w-0 flex-1 flex-col">

          {/* Mobile Header */}
          <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-4 md:hidden">

            <Link
              href="/dashboard"
              className="flex items-center"
            >
              <Logo compact />
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 font-bold">
              {firstName.charAt(0).toUpperCase()}
            </div>

          </header>

          {/* Chat Workspace */}
          <div className="flex flex-1 flex-col px-4 py-6 md:px-8">

            <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">

              {/* Welcome */}
              <div className="mb-6 text-center">

                <div className="mb-4 flex justify-center">
                  <Logo compact />
                </div>

                <h1 className="text-3xl font-bold tracking-tight">
                  Welcome back,{" "}
                  <span className="text-purple-400">
                    {firstName}
                  </span>{" "}
                  👋
                </h1>

                <p className="mt-2 text-zinc-500">
                  How can I help you today?
                </p>

              </div>

              {/* Working AI Chat */}
              <DashboardChat />

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-purple-900/30 bg-zinc-950/70 px-8 py-5 backdrop-blur-xl">
      <Logo />

      <div className="flex gap-8 text-zinc-300">
        <Link
          href="/"
          className="transition-all duration-300 hover:text-purple-400 hover:scale-105"
        >
          Home
        </Link>

        <Link
          href="/"
          className="transition-all duration-300 hover:text-purple-400 hover:scale-105"
        >
          Learn
        </Link>

        <Link
          href="/opportunities"
          className="transition-all duration-300 hover:text-purple-400 hover:scale-105"
        >
          Opportunities
        </Link>

        <Link
          href="/"
          className="transition-all duration-300 hover:text-purple-400 hover:scale-105"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
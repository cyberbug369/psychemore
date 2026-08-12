import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <Features />
    </main>
  );
}
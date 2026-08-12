"use client";

import { useState } from "react";

export default function CareerRoadmap() {
  const [career, setCareer] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [roadmap, setRoadmap] = useState(false);

  const generateRoadmap = () => {
    if (!career.trim()) {
      alert("Please enter a career you are interested in.");
      return;
    }

    setRoadmap(true);
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 text-5xl">🌍</div>

          <h1 className="text-4xl font-bold text-purple-400 md:text-5xl">
            Career Roadmap
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Get a personalized path toward your dream career.
          </p>
        </div>

        {/* Career Setup */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Build Your Career Path
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Career */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Dream Career
              </label>

              <input
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                placeholder="e.g. Software Developer"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Current Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-purple-500"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

          </div>

          <button
            onClick={generateRoadmap}
            className="mt-6 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
          >
            🚀 Generate Career Roadmap
          </button>
        </section>

        {/* Roadmap */}
        {roadmap && (
          <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                Your Roadmap
              </h2>

              <p className="mt-2 text-zinc-400">
                Career goal:{" "}
                <span className="text-purple-400">
                  {career}
                </span>
              </p>

              <p className="text-zinc-500">
                Current level: {level}
              </p>
            </div>

            {/* Step 1 */}
            <div className="relative border-l-2 border-purple-500 pl-6 pb-8">
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-sm">
                1
              </div>

              <h3 className="text-xl font-bold">
                Build Your Foundation
              </h3>

              <p className="mt-2 text-zinc-400">
                Learn the fundamental concepts and skills required
                for {career}.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative border-l-2 border-purple-500 pl-6 pb-8">
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-sm">
                2
              </div>

              <h3 className="text-xl font-bold">
                Practice & Build Projects
              </h3>

              <p className="mt-2 text-zinc-400">
                Put your knowledge into practice by completing
                projects and building a portfolio.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative border-l-2 border-purple-500 pl-6 pb-8">
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-sm">
                3
              </div>

              <h3 className="text-xl font-bold">
                Gain Real Experience
              </h3>

              <p className="mt-2 text-zinc-400">
                Look for internships, freelance opportunities,
                volunteering, or entry-level experience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative border-l-2 border-purple-500 pl-6 pb-8">
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-sm">
                4
              </div>

              <h3 className="text-xl font-bold">
                Build Your Professional Profile
              </h3>

              <p className="mt-2 text-zinc-400">
                Create a strong resume, portfolio, and professional
                profile that showcases your abilities.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative border-l-2 border-purple-500 pl-6">
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-sm">
                5
              </div>

              <h3 className="text-xl font-bold">
                Apply & Grow
              </h3>

              <p className="mt-2 text-zinc-400">
                Start applying for opportunities, prepare for
                interviews, and continue improving your skills.
              </p>
            </div>

          </section>
        )}

      </div>
    </main>
  );
}
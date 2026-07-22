"use client";

import { useState } from "react";

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const opportunities = [
    {
      title: "Google Internship",
      type: "Internship",
      location: "Remote",
      category: "Internship",
    },
    {
      title: "Mastercard Foundation Scholarship",
      type: "Scholarship",
      location: "Africa",
      category: "Scholarship",
    },
    {
      title: "Frontend Developer (Junior)",
      type: "Remote Job",
      location: "Worldwide",
      category: "Job",
    },
  ];

  const filteredOpportunities = opportunities.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <h1 className="mb-2 text-5xl font-bold">Opportunities</h1>

      <p className="mb-10 text-zinc-400">
        Discover scholarships, internships, jobs and career opportunities.
      </p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search scholarships, internships or jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-purple-500"
        />
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`rounded-lg px-4 py-2 transition ${
            selectedCategory === "All"
              ? "bg-purple-600"
              : "bg-zinc-800 hover:bg-purple-600"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Scholarship")}
          className={`rounded-lg px-4 py-2 transition ${
            selectedCategory === "Scholarship"
              ? "bg-purple-600"
              : "bg-zinc-800 hover:bg-purple-600"
          }`}
        >
          Scholarships
        </button>

        <button
          onClick={() => setSelectedCategory("Internship")}
          className={`rounded-lg px-4 py-2 transition ${
            selectedCategory === "Internship"
              ? "bg-purple-600"
              : "bg-zinc-800 hover:bg-purple-600"
          }`}
        >
          Internships
        </button>

        <button
          onClick={() => setSelectedCategory("Job")}
          className={`rounded-lg px-4 py-2 transition ${
            selectedCategory === "Job"
              ? "bg-purple-600"
              : "bg-zinc-800 hover:bg-purple-600"
          }`}
        >
          Jobs
        </button>
      </div>

      <div className="space-y-6">
        {filteredOpportunities.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-purple-500"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>

            <p className="text-purple-400">{item.type}</p>

            <p className="text-zinc-400">{item.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
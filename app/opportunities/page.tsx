"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Opportunity = {
  id: string;
  title: string;
  type: "Scholarship" | "Internship" | "Job";
  location: string;
  country: string;
  studyLevel: string;
  field: string;
  funding: string;
  deadline: string | null;
  eligibility: string;
  url: string;
  source: string;
  verifiedAt: string;
};

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOpportunities() {
      try {
        const response = await fetch("/api/opportunities");

        if (!response.ok) {
          throw new Error("Failed to load opportunities.");
        }

        const data = await response.json();

        setOpportunities(data.opportunities ?? []);
      } catch {
        setError(
          "Unable to load opportunities right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }

    loadOpportunities();
  }, []);

  const countries = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(opportunities.map((item) => item.country))
      ),
    ];
  }, [opportunities]);

  const filteredOpportunities = opportunities.filter((item) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm) ||
      item.location.toLowerCase().includes(searchTerm) ||
      item.country.toLowerCase().includes(searchTerm) ||
      item.field.toLowerCase().includes(searchTerm) ||
      item.source.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "All" ||
      item.type === selectedCategory;

    const matchesCountry =
      selectedCountry === "All" ||
      item.country === selectedCountry;

    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">
            Explore Your Future
          </p>

          <h1 className="text-4xl font-extrabold md:text-5xl">
            Opportunities
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-zinc-400">
            Discover scholarships, internships, jobs, grants and
            other opportunities that can help you move forward.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search opportunities..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
          />
        </div>

        {/* Filters */}
        <div className="mb-10 grid gap-4 md:grid-cols-2">

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-zinc-400"
            >
              Opportunity Type
            </label>

            <select
              id="category"
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-purple-500"
            >
              <option value="All">All Types</option>
              <option value="Scholarship">Scholarships</option>
              <option value="Internship">Internships</option>
              <option value="Job">Jobs</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="country"
              className="mb-2 block text-sm font-semibold text-zinc-400"
            >
              Country
            </label>

            <select
              id="country"
              value={selectedCountry}
              onChange={(event) =>
                setSelectedCountry(event.target.value)
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-purple-500"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country === "All" ? "All Countries" : country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <p className="text-purple-400">
              🔎 Loading opportunities...
            </p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="rounded-2xl border border-red-900/50 bg-red-950/30 p-8 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Results */}
        {!loading && !error && (
          <>
            <div className="mb-6 text-sm text-zinc-500">
              Showing {filteredOpportunities.length}{" "}
              {filteredOpportunities.length === 1
                ? "opportunity"
                : "opportunities"}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredOpportunities.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-purple-500"
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-400">
                      {item.type}
                    </span>

                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                      {item.country}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-purple-400">
                    {item.location}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-zinc-400">
                    <p>
                      <span className="font-semibold text-zinc-300">
                        Study Level:
                      </span>{" "}
                      {item.studyLevel}
                    </p>

                    <p>
                      <span className="font-semibold text-zinc-300">
                        Field:
                      </span>{" "}
                      {item.field}
                    </p>

                    <p>
                      <span className="font-semibold text-zinc-300">
                        Funding:
                      </span>{" "}
                      {item.funding}
                    </p>

                    <p>
                      <span className="font-semibold text-zinc-300">
                        Deadline:
                      </span>{" "}
                      {item.deadline ?? "Not specified"}
                    </p>

                    <p>
                      <span className="font-semibold text-zinc-300">
                        Source:
                      </span>{" "}
                      {item.source}
                    </p>
                  </div>

                  <Link
                    href={`/opportunities/${item.id}`}
                    className="mt-6 block w-full rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500"
                  >
                    View Opportunity
                  </Link>

                  <p className="mt-3 text-xs text-zinc-600">
                    Last verified: {item.verifiedAt}
                  </p>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredOpportunities.length === 0 && (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
                <div className="mb-4 text-4xl">🔎</div>

                <h2 className="text-2xl font-bold">
                  No opportunities found
                </h2>

                <p className="mt-2 text-zinc-400">
                  Try changing your search, country, or opportunity
                  type.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import { opportunities } from "../../lib/opportunities";

type OpportunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetailPage({
  params,
}: OpportunityPageProps) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (item) => item.id === id
  );

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/opportunities"
          className="mb-8 inline-flex text-sm font-semibold text-zinc-400 transition hover:text-purple-400"
        >
          ← Back to Opportunities
        </Link>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl md:p-10">

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-400">
              {opportunity.type}
            </span>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
              {opportunity.country}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold md:text-5xl">
            {opportunity.title}
          </h1>

          <p className="mt-3 text-lg text-purple-400">
            {opportunity.location}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-500">
                Study Level
              </p>
              <p className="mt-1 font-semibold">
                {opportunity.studyLevel}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-500">
                Field
              </p>
              <p className="mt-1 font-semibold">
                {opportunity.field}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-500">
                Funding
              </p>
              <p className="mt-1 font-semibold">
                {opportunity.funding}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-500">
                Deadline
              </p>
              <p className="mt-1 font-semibold">
                {opportunity.deadline ?? "Not specified"}
              </p>
            </div>

          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">
              About this opportunity
            </h2>

            <p className="mt-4 leading-8 text-zinc-300">
              {opportunity.description}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">
              Eligibility
            </h2>

            <p className="mt-4 leading-8 text-zinc-300">
              {opportunity.eligibility}
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href={opportunity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-purple-600 px-6 py-3 text-center font-semibold transition hover:bg-purple-500"
            >
              Visit Official Opportunity
            </a>

            <Link
              href="/opportunities"
              className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold transition hover:border-purple-400 hover:text-purple-400"
            >
              Browse More
            </Link>

          </div>

          <div className="mt-8 border-t border-zinc-800 pt-5 text-sm text-zinc-500">
            <p>
              Source: {opportunity.source}
            </p>

            <p className="mt-1">
              Last verified: {opportunity.verifiedAt}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
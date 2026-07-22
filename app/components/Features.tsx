export default function Features() {
  const features = [
    {
      title: "Learn Smarter",
      description:
        "Master difficult concepts faster with AI-powered learning tools.",
    },
    {
      title: "Personal Growth",
      description:
        "Build better habits and improve your mindset every day.",
    },
    {
      title: "Opportunities",
      description:
        "Find scholarships, internships, jobs, and career opportunities in one place.",
    },
  ];

  return (
    <section className="px-8 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why <span className="text-purple-400">Psychemore?</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-purple-500/20"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
import Link from "next/link";

const features = [
  {
    title: "AI Resume Builder",
    description: "Build a professional resume in minutes.",
    href: "/resume-builder",
    icon: "📄",
  },
  {
    title: "Opportunities",
    description: "Discover scholarships, internships, and jobs.",
    href: "/opportunities",
    icon: "💼",
  },
  {
    title: "AI Cover Letter",
    description: "Create tailored cover letters for your applications.",
    href: "/cover-letter",
    icon: "✉️",
  },
  {
    title: "AI Study Assistant",
    description: "Summarize notes, explain concepts, and study smarter.",
    href: "/study-assistant",
    icon: "🧠",
  },
  {
    title: "Interview Practice",
    description: "Practice interview questions and improve your confidence.",
    href: "/interview-practice",
    icon: "🎯",
  },
  {
    title: "Career Roadmap",
    description: "Get a personalized path toward your dream career.",
    href: "/career-roadmap",
    icon: "🌍",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything You Need to{" "}
            <span className="text-purple-400">Grow Further</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Powerful tools designed to help you learn, build your career,
            and reach your goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-800"
            >
              <div className="mb-5 text-4xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold transition group-hover:text-purple-400">
                {feature.title}
              </h3>

              <p className="mt-3 leading-6 text-zinc-400">
                {feature.description}
              </p>

              <div className="mt-6 text-sm font-semibold text-purple-400">
                Explore →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
type ResumePreviewProps = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  education: string;
  skills: string;
  experience: string;
  projects: string;
  certifications: string;
  achievements: string;
};

function ResumeSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  if (!content.trim()) return null;

  return (
    <section className="mb-6">
      <h3 className="mb-2 border-b border-zinc-700 pb-2 text-sm font-bold uppercase tracking-wider text-purple-400">
        {title}
      </h3>

      <p className="whitespace-pre-wrap leading-7 text-zinc-300">
        {content}
      </p>
    </section>
  );
}

export default function ResumePreview({
  name,
  email,
  phone,
  summary,
  education,
  skills,
  experience,
  projects,
  certifications,
  achievements,
}: ResumePreviewProps) {
  return (
    <div className="mt-16 max-w-4xl rounded-2xl border border-zinc-800 bg-white p-8 text-zinc-900 shadow-2xl md:p-12">
      <header className="border-b border-zinc-300 pb-6">
        <h2 className="text-4xl font-extrabold">
          {name || "Your Name"}
        </h2>

        <p className="mt-2 text-sm text-zinc-600">
          {email || "email@example.com"}
          {" • "}
          {phone || "Phone Number"}
        </p>
      </header>

      <div className="mt-8">
        <ResumeSection title="Professional Summary" content={summary} />
        <ResumeSection title="Education" content={education} />
        <ResumeSection title="Skills" content={skills} />
        <ResumeSection title="Experience" content={experience} />
        <ResumeSection title="Projects" content={projects} />
        <ResumeSection title="Certifications" content={certifications} />
        <ResumeSection title="Achievements" content={achievements} />
      </div>
    </div>
  );
}

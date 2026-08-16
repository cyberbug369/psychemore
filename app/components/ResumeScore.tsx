type ResumeScoreProps = {
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

export default function ResumeScore({
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
}: ResumeScoreProps) {
  const checks = [
    {
      label: "Full name",
      value: name,
      points: 10,
    },
    {
      label: "Email address",
      value: email,
      points: 10,
    },
    {
      label: "Phone number",
      value: phone,
      points: 5,
    },
    {
      label: "Professional summary",
      value: summary,
      points: 15,
    },
    {
      label: "Education",
      value: education,
      points: 15,
    },
    {
      label: "Skills",
      value: skills,
      points: 15,
    },
    {
      label: "Experience",
      value: experience,
      points: 15,
    },
    {
      label: "Projects",
      value: projects,
      points: 10,
    },
    {
      label: "Certifications or achievements",
      value: certifications || achievements,
      points: 5,
    },
  ];

  const score = checks.reduce(
    (total, item) => total + (item.value.trim() ? item.points : 0),
    0
  );

  let message = "Add more information to strengthen your resume.";

  if (score >= 85) {
    message = "Strong foundation — your resume is looking complete.";
  } else if (score >= 70) {
    message = "Good progress — a few sections could still be improved.";
  } else if (score >= 50) {
    message = "You're halfway there. Add more relevant details.";
  }

  return (
    <div className="mt-10 max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-4 text-2xl font-bold">
        Resume Score
      </h2>

      <div className="mb-4 h-4 w-full rounded-full bg-zinc-800">
        <div
          className="h-4 rounded-full bg-purple-600 transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-2xl font-bold text-purple-400">
        {score}/100
      </p>

      <p className="mt-2 text-zinc-400">
        {message}
      </p>

      <div className="mt-6 grid gap-2 text-zinc-300 md:grid-cols-2">
        {checks.map((item) => (
          <p key={item.label}>
            {item.value.trim() ? "✅" : "⚠️"} {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}

type ResumeFormProps = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  summary: string;
  setSummary: (value: string) => void;
  education: string;
  setEducation: (value: string) => void;
  skills: string;
  setSkills: (value: string) => void;
  experience: string;
  setExperience: (value: string) => void;
  projects: string;
  setProjects: (value: string) => void;
  certifications: string;
  setCertifications: (value: string) => void;
  achievements: string;
  setAchievements: (value: string) => void;
  onGenerate: () => void;
};

export default function ResumeForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  summary,
  setSummary,
  education,
  setEducation,
  skills,
  setSkills,
  experience,
  setExperience,
  projects,
  setProjects,
  certifications,
  setCertifications,
  achievements,
  setAchievements,
  onGenerate,
}: ResumeFormProps) {
  return (
    <div className="grid gap-5">
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
        />
      </div>

      <textarea
        placeholder="Professional Summary — briefly describe who you are, what you do, and what you bring to an employer..."
        rows={5}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <textarea
        placeholder="Education — e.g. B.Sc. Business Administration, Ambrose Alli University, 2026"
        rows={4}
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <textarea
        placeholder="Skills — e.g. JavaScript, React, Next.js, Git, Communication"
        rows={4}
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <textarea
        placeholder="Experience — include roles, organizations, dates, responsibilities, and results..."
        rows={6}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <textarea
        placeholder="Projects — describe important personal, school, freelance, coding, or business projects..."
        rows={5}
        value={projects}
        onChange={(e) => setProjects(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <textarea
        placeholder="Certifications — e.g. Google Cybersecurity Certificate, AWS Cloud Practitioner..."
        rows={4}
        value={certifications}
        onChange={(e) => setCertifications(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <textarea
        placeholder="Achievements — awards, leadership, competitions, scholarships, publications, etc."
        rows={4}
        value={achievements}
        onChange={(e) => setAchievements(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-purple-500"
      />

      <button
        type="button"
        onClick={onGenerate}
        className="w-fit rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
      >
        Generate Resume
      </button>
    </div>
  );
}

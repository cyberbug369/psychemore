type ResumeFormProps = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  education: string;
  setEducation: (value: string) => void;
  skills: string;
  setSkills: (value: string) => void;
  experience: string;
  setExperience: (value: string) => void;
  onGenerate: () => void;
};

export default function ResumeForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  education,
  setEducation,
  skills,
  setSkills,
  experience,
  setExperience,
  onGenerate,
}: ResumeFormProps) {
  return (
    <div className="max-w-2xl space-y-5">
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      />

      <input
        placeholder="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      />

      <input
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      />

      <textarea
        placeholder="Experience"
        rows={5}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      />

      <button
        onClick={onGenerate}
        className="rounded-xl bg-purple-600 px-6 py-3 transition hover:bg-purple-500"
      >
        Generate Resume
      </button>
    </div>
  );
}
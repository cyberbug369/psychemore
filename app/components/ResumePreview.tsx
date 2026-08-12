type ResumePreviewProps = {
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  experience: string;
};

export default function ResumePreview({
  name,
  email,
  phone,
  education,
  skills,
  experience,
}: ResumePreviewProps) {
  return (
    <div className="mt-16 max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
      <h2 className="text-4xl font-bold">
        {name || "Your Name"}
      </h2>

      <p className="mt-2 text-zinc-400">
        {email || "email@example.com"} • {phone || "Phone Number"}
      </p>

      <hr className="my-6 border-zinc-700" />

      <section className="mb-6">
        <h3 className="mb-2 text-xl font-semibold text-purple-400">
          🎓 Education
        </h3>

        <p>{education || "No education added yet."}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 text-xl font-semibold text-purple-400">
          💻 Skills
        </h3>

        <p>{skills || "No skills added yet."}</p>
      </section>

      <section>
        <h3 className="mb-2 text-xl font-semibold text-purple-400">
          💼 Experience
        </h3>

        <p>{experience || "No experience added yet."}</p>
      </section>
    </div>
  );
}
type ResumeScoreProps = {
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  experience: string;
};

export default function ResumeScore({
  name,
  email,
  phone,
  education,
  skills,
  experience,
}: ResumeScoreProps) {
  let score = 0;

  if (name) score += 15;
  if (email) score += 15;
  if (phone) score += 10;
  if (education) score += 20;
  if (skills) score += 20;
  if (experience) score += 20;

  return (
    <div className="mt-10 max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-4 text-2xl font-bold">
        Resume Score
      </h2>

      <div className="mb-4 h-4 w-full rounded-full bg-zinc-800">
        <div
          className="h-4 rounded-full bg-purple-600 transition-all"
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="mb-6 text-xl font-semibold text-purple-400">
        {score}/100
      </p>

      <div className="space-y-2 text-zinc-300">
        {name ? (
          <p>✅ Name added</p>
        ) : (
          <p>⚠ Add your name</p>
        )}

        {email ? (
          <p>✅ Email added</p>
        ) : (
          <p>⚠ Add your email</p>
        )}

        {phone ? (
          <p>✅ Phone number added</p>
        ) : (
          <p>⚠ Add your phone number</p>
        )}

        {education ? (
          <p>✅ Education added</p>
        ) : (
          <p>⚠ Add education</p>
        )}

        {skills ? (
          <p>✅ Skills added</p>
        ) : (
          <p>⚠ Add skills</p>
        )}

        {experience ? (
          <p>✅ Experience added</p>
        ) : (
          <p>⚠ Add experience</p>
        )}
      </div>
    </div>
  );
}
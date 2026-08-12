"use client";

import { useState } from "react";

export default function CoverLetterPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-purple-400">
          AI Cover Letter Builder
        </h1>

        <p className="mt-3 text-zinc-400">
          Create a professional cover letter tailored to your dream job.
        </p>

        <div className="mt-8 space-y-5">

          <input
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
            placeholder="Job role (e.g. Frontend Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <textarea
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 h-32"
            placeholder="Your skills and experience"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <button
            onClick={() => setGenerated(true)}
            className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg font-semibold"
          >
            Generate Cover Letter
          </button>

        </div>


        {generated && (
          <div className="mt-10 bg-zinc-900 border border-zinc-700 p-6 rounded-xl">

            <h2 className="text-2xl font-bold mb-4">
              Cover Letter Preview
            </h2>

            <p className="text-zinc-300 leading-7">
              Dear Hiring Manager,
              <br /><br />

              My name is {name || "Your Name"}, and I am excited to apply
              for the {role || "desired position"} at{" "}
              {company || "your company"}.
              <br /><br />

              I have experience and skills in{" "}
              {skills || "my area of expertise"}.
              I am passionate about learning, solving problems, and creating
              meaningful results.
              <br /><br />

              Thank you for considering my application. I look forward to
              the opportunity to contribute to your team.
              <br /><br />

              Sincerely,
              <br />
              {name || "Your Name"}

            </p>

          </div>
        )}

      </div>
    </main>
  );
}
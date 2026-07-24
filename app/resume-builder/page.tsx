"use client";

import { useState } from "react";

import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import ResumeScore from "../components/ResumeScore";

export default function ResumeBuilder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <h1 className="mb-2 text-5xl font-bold">
        AI Resume Builder
      </h1>

      <p className="mb-10 text-zinc-400">
        Build a professional resume in minutes.
      </p>

      <ResumeForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        education={education}
        setEducation={setEducation}
        skills={skills}
        setSkills={setSkills}
        experience={experience}
        setExperience={setExperience}
        onGenerate={() => setShowResume(true)}
      />

      {showResume && (
        <>
          <ResumeScore
            name={name}
            email={email}
            phone={phone}
            education={education}
            skills={skills}
            experience={experience}
          />

          <ResumePreview
            name={name}
            email={email}
            phone={phone}
            education={education}
            skills={skills}
            experience={experience}
          />
        </>
      )}
    </main>
  );
}
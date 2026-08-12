"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

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

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(name || "Your Name", 20, 20);

    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 20, 35);
    doc.text(`Phone: ${phone}`, 20, 45);

    doc.setFontSize(16);
    doc.text("Education", 20, 65);
    doc.setFontSize(12);
    doc.text(education || "Not provided", 20, 75);

    doc.setFontSize(16);
    doc.text("Skills", 20, 95);
    doc.setFontSize(12);
    doc.text(skills || "Not provided", 20, 105);

    doc.setFontSize(16);
    doc.text("Experience", 20, 125);
    doc.setFontSize(12);
    doc.text(experience || "Not provided", 20, 135);

    doc.save("resume.pdf");
  };

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-5xl font-bold text-purple-400">
          AI Resume Builder
        </h1>

        <p className="mb-10 text-zinc-400">
          Build a professional resume in minutes with Psychemore.
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
            <div className="mt-6">
              <button
                onClick={downloadPDF}
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-500"
              >
                📄 Download PDF
              </button>
            </div>

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
      </div>
    </main>
  );
}
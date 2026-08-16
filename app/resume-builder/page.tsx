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
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [certifications, setCertifications] = useState("");
  const [achievements, setAchievements] = useState("");
  const [showResume, setShowResume] = useState(false);

  const addSection = (
    doc: jsPDF,
    title: string,
    content: string,
    y: number
  ) => {
    if (!content.trim()) return y;

    let currentY = y;

    if (currentY > 260) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title, 20, currentY);

    currentY += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    const lines = doc.splitTextToSize(content, 170);

    for (const line of lines) {
      if (currentY > 280) {
        doc.addPage();
        currentY = 20;
      }

      doc.text(line, 20, currentY);
      currentY += 5;
    }

    return currentY + 8;
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(name || "Your Name", 20, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(
      `${email || "email@example.com"} • ${phone || "Phone Number"}`,
      20,
      y
    );

    y += 12;

    doc.setDrawColor(160, 160, 160);
    doc.line(20, y, 190, y);

    y += 12;

    y = addSection(doc, "PROFESSIONAL SUMMARY", summary, y);
    y = addSection(doc, "EDUCATION", education, y);
    y = addSection(doc, "SKILLS", skills, y);
    y = addSection(doc, "EXPERIENCE", experience, y);
    y = addSection(doc, "PROJECTS", projects, y);
    y = addSection(doc, "CERTIFICATIONS", certifications, y);
    y = addSection(doc, "ACHIEVEMENTS", achievements, y);

    doc.save("psychemore-resume.pdf");
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">
            Career Toolkit
          </p>

          <h1 className="text-4xl font-extrabold md:text-5xl">
            AI Resume Builder
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-zinc-400">
            Build a clean, professional resume and download it as a PDF.
          </p>
        </div>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">
          <ResumeForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            summary={summary}
            setSummary={setSummary}
            education={education}
            setEducation={setEducation}
            skills={skills}
            setSkills={setSkills}
            experience={experience}
            setExperience={setExperience}
            projects={projects}
            setProjects={setProjects}
            certifications={certifications}
            setCertifications={setCertifications}
            achievements={achievements}
            setAchievements={setAchievements}
            onGenerate={() => setShowResume(true)}
          />
        </section>

        {showResume && (
          <>
            <div className="mt-6">
              <button
                onClick={downloadPDF}
                className="rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
              >
                📄 Download Professional PDF
              </button>
            </div>

            <ResumeScore
              name={name}
              email={email}
              phone={phone}
              summary={summary}
              education={education}
              skills={skills}
              experience={experience}
              projects={projects}
              certifications={certifications}
              achievements={achievements}
            />

            <ResumePreview
              name={name}
              email={email}
              phone={phone}
              summary={summary}
              education={education}
              skills={skills}
              experience={experience}
              projects={projects}
              certifications={certifications}
              achievements={achievements}
            />
          </>
        )}
      </div>
    </main>
  );
}

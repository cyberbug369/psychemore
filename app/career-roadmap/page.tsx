"use client";

import { useMemo, useState } from "react";

type RoadmapStep = {
  title: string;
  description: string;
  skills: string[];
  project: string;
};

const careerRoadmaps: Record<string, RoadmapStep[]> = {
  "Frontend Developer": [
    {
      title: "Build Your Foundation",
      description:
        "Learn how websites work and become comfortable with the core building blocks of the web.",
      skills: ["HTML", "CSS", "Responsive Design"],
      project: "Build a personal portfolio landing page.",
    },
    {
      title: "Master JavaScript",
      description:
        "Learn programming fundamentals and use JavaScript to create interactive web experiences.",
      skills: ["JavaScript", "DOM", "APIs", "Git"],
      project: "Build a weather dashboard or task manager.",
    },
    {
      title: "Learn React",
      description:
        "Learn component-based development and build modern interactive applications.",
      skills: ["React", "Components", "State", "Props"],
      project: "Build a small dashboard with reusable components.",
    },
    {
      title: "Build Real Projects",
      description:
        "Turn your knowledge into projects that demonstrate what you can actually build.",
      skills: ["React", "Next.js", "TypeScript", "GitHub"],
      project: "Build and deploy a complete web application.",
    },
    {
      title: "Create Your Professional Profile",
      description:
        "Package your work into a strong portfolio and resume.",
      skills: ["Portfolio", "Resume", "GitHub", "Communication"],
      project: "Create a portfolio showcasing 3 strong projects.",
    },
    {
      title: "Apply & Grow",
      description:
        "Start applying for internships, freelance opportunities, and junior roles while continuing to improve.",
      skills: ["Interview Skills", "Networking", "Problem Solving"],
      project: "Complete interview practice and apply to opportunities.",
    },
  ],

  "Backend Developer": [
    {
      title: "Learn Programming Fundamentals",
      description:
        "Build a strong programming foundation before moving into backend systems.",
      skills: ["Programming", "Data Structures", "Algorithms"],
      project: "Build a command-line application.",
    },
    {
      title: "Learn Backend Development",
      description:
        "Understand servers, APIs, authentication, and how applications communicate.",
      skills: ["Node.js", "APIs", "HTTP", "Authentication"],
      project: "Build a REST API.",
    },
    {
      title: "Learn Databases",
      description:
        "Learn how applications store, retrieve, and manage data.",
      skills: ["SQL", "PostgreSQL", "Database Design"],
      project: "Build an API connected to a database.",
    },
    {
      title: "Build Production Projects",
      description:
        "Combine your skills into applications that solve real problems.",
      skills: ["Testing", "Security", "Git", "Deployment"],
      project: "Build and deploy a full backend service.",
    },
    {
      title: "Build Your Professional Profile",
      description:
        "Document your projects and demonstrate your backend skills.",
      skills: ["GitHub", "Resume", "Documentation"],
      project: "Publish your best backend projects on GitHub.",
    },
    {
      title: "Apply & Grow",
      description:
        "Prepare for technical interviews and start applying for opportunities.",
      skills: ["Interview Skills", "System Design", "Problem Solving"],
      project: "Practice backend interview questions.",
    },
  ],

  "Data Analyst": [
    {
      title: "Learn Data Fundamentals",
      description:
        "Understand how data is collected, organized, and interpreted.",
      skills: ["Statistics", "Data Types", "Excel"],
      project: "Analyze a simple public dataset.",
    },
    {
      title: "Learn SQL",
      description:
        "Learn how to query databases and extract useful information.",
      skills: ["SQL", "Queries", "Joins", "Aggregations"],
      project: "Create a report from a sample database.",
    },
    {
      title: "Learn Data Visualization",
      description:
        "Turn raw data into clear visual stories and useful insights.",
      skills: ["Charts", "Dashboards", "Data Storytelling"],
      project: "Build an interactive analytics dashboard.",
    },
    {
      title: "Build Your Portfolio",
      description:
        "Create projects that show how you turn data into decisions.",
      skills: ["Python", "Pandas", "Visualization"],
      project: "Complete 2-3 data analysis projects.",
    },
    {
      title: "Prepare Professionally",
      description:
        "Build your resume and practice explaining your analytical work.",
      skills: ["Resume", "Presentation", "Communication"],
      project: "Write case studies for your portfolio projects.",
    },
    {
      title: "Apply & Grow",
      description:
        "Apply for internships and junior roles while expanding your analytical skills.",
      skills: ["Interview Skills", "Business Thinking", "Problem Solving"],
      project: "Practice data analyst interview questions.",
    },
  ],

  "Cybersecurity Analyst": [
    {
      title: "Build IT Foundations",
      description:
        "Understand computers, operating systems, networking, and how systems communicate.",
      skills: ["Linux", "Networking", "Operating Systems"],
      project: "Create a small virtual lab for learning.",
    },
    {
      title: "Learn Security Fundamentals",
      description:
        "Study common security concepts, threats, vulnerabilities, and defensive practices.",
      skills: ["Threats", "Vulnerabilities", "Authentication", "Security Basics"],
      project: "Document common security risks and mitigations.",
    },
    {
      title: "Learn Security Tools",
      description:
        "Become familiar with tools used for legitimate security testing and monitoring.",
      skills: ["Wireshark", "Nmap", "Logs", "SIEM Concepts"],
      project: "Analyze traffic or logs in a controlled lab.",
    },
    {
      title: "Build Practical Experience",
      description:
        "Practice defensive security and ethical security testing in authorized environments.",
      skills: ["Incident Response", "Web Security", "Monitoring"],
      project: "Complete beginner-friendly security labs.",
    },
    {
      title: "Build Your Professional Profile",
      description:
        "Document your labs, projects, learning, and security knowledge.",
      skills: ["GitHub", "Documentation", "Resume"],
      project: "Create a portfolio of your security labs.",
    },
    {
      title: "Apply & Grow",
      description:
        "Prepare for entry-level security roles and continue building practical experience.",
      skills: ["Interview Skills", "Communication", "Continuous Learning"],
      project: "Practice cybersecurity interview questions.",
    },
  ],

  "Business Analyst": [
    {
      title: "Understand Business Fundamentals",
      description:
        "Learn how businesses operate and how problems can be turned into opportunities.",
      skills: ["Business Basics", "Critical Thinking", "Research"],
      project: "Analyze a real business problem.",
    },
    {
      title: "Learn Data & Analysis",
      description:
        "Use data to understand problems and support better decisions.",
      skills: ["Excel", "SQL Basics", "Statistics"],
      project: "Create a business performance report.",
    },
    {
      title: "Learn Business Analysis",
      description:
        "Learn how to gather requirements, map processes, and communicate solutions.",
      skills: ["Requirements", "Process Mapping", "Documentation"],
      project: "Create requirements for a fictional product.",
    },
    {
      title: "Build Practical Projects",
      description:
        "Practice solving business problems through structured analysis.",
      skills: ["Problem Solving", "Presentation", "Stakeholder Thinking"],
      project: "Create a complete business case study.",
    },
    {
      title: "Build Your Professional Profile",
      description:
        "Showcase your analytical thinking and project work.",
      skills: ["Resume", "Portfolio", "Communication"],
      project: "Publish 2 business case studies.",
    },
    {
      title: "Apply & Grow",
      description:
        "Prepare for interviews and look for internships or junior analyst positions.",
      skills: ["Interview Skills", "Networking", "Business Thinking"],
      project: "Practice business analyst interview questions.",
    },
  ],
};

const defaultRoadmap: RoadmapStep[] = [
  {
    title: "Build Your Foundation",
    description:
      "Learn the fundamental concepts and skills required for your chosen career.",
    skills: ["Core Concepts", "Research", "Problem Solving"],
    project: "Complete a beginner project related to your career.",
  },
  {
    title: "Develop Your Skills",
    description:
      "Build practical knowledge through structured learning and regular practice.",
    skills: ["Technical Skills", "Communication", "Critical Thinking"],
    project: "Complete a guided project.",
  },
  {
    title: "Build Real Projects",
    description:
      "Turn your knowledge into projects that demonstrate your abilities.",
    skills: ["Project Work", "Portfolio", "GitHub"],
    project: "Build and document a meaningful project.",
  },
  {
    title: "Gain Experience",
    description:
      "Look for internships, volunteering, freelance work, or other opportunities to practice your skills.",
    skills: ["Teamwork", "Communication", "Professional Skills"],
    project: "Find a practical opportunity to gain experience.",
  },
  {
    title: "Build Your Professional Profile",
    description:
      "Create a strong resume and portfolio that clearly communicate your strengths.",
    skills: ["Resume", "Portfolio", "Networking"],
    project: "Create a professional portfolio.",
  },
  {
    title: "Apply & Grow",
    description:
      "Apply for opportunities, practice interviews, and continue improving your skills.",
    skills: ["Interview Skills", "Networking", "Continuous Learning"],
    project: "Apply to your first relevant opportunity.",
  },
];

export default function CareerRoadmap() {
  const [career, setCareer] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [roadmap, setRoadmap] = useState(false);
  const [completed, setCompleted] = useState<boolean[]>([]);

  const steps = useMemo(() => {
    return careerRoadmaps[career.trim()] || defaultRoadmap;
  }, [career]);

  const completedCount = completed.filter(Boolean).length;

  const progress =
    steps.length > 0
      ? Math.round((completedCount / steps.length) * 100)
      : 0;

  const generateRoadmap = () => {
    if (!career.trim()) {
      alert("Please enter a career you are interested in.");
      return;
    }

    setCompleted(new Array(steps.length).fill(false));
    setRoadmap(true);
  };

  const toggleStep = (index: number) => {
    setCompleted((previous) => {
      const updated = [...previous];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const resetRoadmap = () => {
    setCompleted(new Array(steps.length).fill(false));
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
          <div className="mb-4 text-5xl">🌍</div>

          <h1 className="text-4xl font-bold text-purple-400 md:text-5xl">
            Career Roadmap
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Build a clear path from where you are to where you want to be.
          </p>
        </div>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Build Your Career Path
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Dream Career
              </label>

              <input
                value={career}
                onChange={(e) => {
                  setCareer(e.target.value);
                  setRoadmap(false);
                }}
                placeholder="e.g. Frontend Developer"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />

              <p className="mt-2 text-xs text-zinc-600">
                Try: Frontend Developer, Backend Developer, Data Analyst,
                Cybersecurity Analyst, or Business Analyst.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Current Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-purple-500"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

          </div>

          <button
            onClick={generateRoadmap}
            className="mt-6 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
          >
            🚀 Generate Career Roadmap
          </button>
        </section>

        {roadmap && (
          <section className="mt-8">

            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    Your Roadmap
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    Goal:{" "}
                    <span className="text-purple-400">
                      {career}
                    </span>
                  </p>

                  <p className="text-sm text-zinc-500">
                    Current level: {level}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-zinc-500">
                    Progress
                  </p>

                  <p className="text-3xl font-bold text-purple-400">
                    {progress}%
                  </p>
                </div>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-purple-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="text-zinc-500">
                  {completedCount} of {steps.length} milestones completed
                </span>

                <button
                  onClick={resetRoadmap}
                  className="text-zinc-400 transition hover:text-white"
                >
                  Reset Progress
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {steps.map((step, index) => {
                const isComplete = completed[index];

                return (
                  <div
                    key={step.title}
                    className={`rounded-2xl border p-6 transition ${
                      isComplete
                        ? "border-purple-500/40 bg-purple-500/5"
                        : "border-zinc-800 bg-zinc-900"
                    }`}
                  >
                    <div className="flex gap-4">

                      <button
                        onClick={() => toggleStep(index)}
                        aria-label={`Mark ${step.title} as ${
                          isComplete ? "incomplete" : "complete"
                        }`}
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition ${
                          isComplete
                            ? "border-purple-500 bg-purple-600 text-white"
                            : "border-zinc-700 bg-zinc-950 text-zinc-400 hover:border-purple-500"
                        }`}
                      >
                        {isComplete ? "✓" : index + 1}
                      </button>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3
                            className={`text-xl font-bold ${
                              isComplete
                                ? "text-purple-300"
                                : "text-white"
                            }`}
                          >
                            {step.title}
                          </h3>

                          {isComplete && (
                            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-xs font-semibold text-purple-400">
                              Completed
                            </span>
                          )}
                        </div>

                        <p className="mt-2 leading-7 text-zinc-400">
                          {step.description}
                        </p>

                        <div className="mt-5">
                          <p className="mb-2 text-sm font-semibold text-zinc-300">
                            Skills to develop
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-purple-400">
                            Suggested project
                          </p>

                          <p className="mt-2 text-sm leading-6 text-zinc-400">
                            {step.project}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {progress === 100 && (
              <div className="mt-6 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-6 text-center">
                <div className="text-4xl">🎉</div>

                <h3 className="mt-3 text-2xl font-bold">
                  Roadmap Complete!
                </h3>

                <p className="mt-2 text-zinc-400">
                  You completed every milestone. Keep building, learning,
                  and looking for opportunities to grow.
                </p>
              </div>
            )}

          </section>
        )}

      </div>
    </main>
  );
}

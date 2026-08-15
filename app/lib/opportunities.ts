export type Opportunity = {
  id: string;
  title: string;
  type: "Scholarship" | "Internship" | "Job";
  location: string;
  country: string;
  studyLevel: string;
  field: string;
  funding: string;
  deadline: string | null;
  eligibility: string;
  description: string;
  url: string;
  source: string;
  verifiedAt: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "mastercard-alu",
    title: "Mastercard Foundation Scholars Program — African Leadership University",
    type: "Scholarship",
    location: "Kigali, Rwanda",
    country: "Rwanda",
    studyLevel: "Undergraduate",
    field: "Multiple Fields",
    funding: "Scholarship Support",
    deadline: null,
    eligibility:
      "Eligibility and deadlines are determined by African Leadership University through the Mastercard Foundation Scholars Program.",
    description:
      "The Mastercard Foundation Scholars Program is delivered through partner institutions. African Leadership University is currently listed by the Foundation as an institution with applications open.",
    url: "https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/where-to-apply/",
    source: "Mastercard Foundation",
    verifiedAt: "2026-08-15",
  },
  {
    id: "mastercard-cmu-africa",
    title: "Mastercard Foundation Scholars Program — Carnegie Mellon University Africa",
    type: "Scholarship",
    location: "Kigali, Rwanda",
    country: "Rwanda",
    studyLevel: "Postgraduate",
    field: "Technology",
    funding: "Scholarship Support",
    deadline: null,
    eligibility:
      "Eligibility and deadlines are determined by Carnegie Mellon University Africa through the Mastercard Foundation Scholars Program.",
    description:
      "Carnegie Mellon University Africa is currently listed as an applications-open partner institution in the Mastercard Foundation Scholars Program directory.",
    url: "https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/where-to-apply/",
    source: "Mastercard Foundation",
    verifiedAt: "2026-08-15",
  },
  {
    id: "mastercard-makerere",
    title: "Mastercard Foundation Scholars Program — Makerere University",
    type: "Scholarship",
    location: "Kampala, Uganda",
    country: "Uganda",
    studyLevel: "Postgraduate",
    field: "Multiple Fields",
    funding: "Scholarship Support",
    deadline: null,
    eligibility:
      "Eligibility and deadlines are determined by Makerere University through the Mastercard Foundation Scholars Program.",
    description:
      "Makerere University is currently listed as an applications-open partner institution in the Mastercard Foundation Scholars Program directory.",
    url: "https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/where-to-apply/",
    source: "Mastercard Foundation",
    verifiedAt: "2026-08-15",
  },
  {
    id: "mastercard-cambridge",
    title: "Mastercard Foundation Scholars Program — Cambridge",
    type: "Scholarship",
    location: "Cambridge, United Kingdom",
    country: "United Kingdom",
    studyLevel: "Postgraduate",
    field: "Multiple Fields",
    funding: "Scholarship Support",
    deadline: null,
    eligibility:
      "Eligibility and deadlines are determined by Cambridge through the Mastercard Foundation Scholars Program.",
    description:
      "Cambridge is currently listed as an applications-open partner institution in the Mastercard Foundation Scholars Program directory.",
    url: "https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/where-to-apply/",
    source: "Mastercard Foundation",
    verifiedAt: "2026-08-15",
  },
  {
    id: "fme-scholarship-portal",
    title: "Federal Ministry of Education Scholarship Portal",
    type: "Scholarship",
    location: "Nigeria / International",
    country: "Nigeria",
    studyLevel: "Undergraduate / Postgraduate",
    field: "Multiple Fields",
    funding: "Varies by Program",
    deadline: null,
    eligibility:
      "Eligibility depends on the individual scholarship program listed by the Federal Ministry of Education.",
    description:
      "Nigeria's Federal Ministry of Education operates an official scholarship platform for local and international scholarship opportunities available to Nigerian students.",
    url: "https://scholarship.education.gov.ng/",
    source: "Federal Ministry of Education",
    verifiedAt: "2026-08-15",
  },
];

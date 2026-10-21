/*
  The 6 programs on the site and their tracks.
  Curriculum text lives in src/data/curriculum/: the first 4 programs are copied exactly from the course PDF,
  Data Engineering and Python Programming from the client brochures (added 18 Oct 2026, change request 01).
  Tech stacks and roles come from each brochure ("Modern Tech Stack Mastery", "Career Acceleration").
*/

import { aiml12 } from "./curriculum/aiml-12";
import { aiml24 } from "./curriculum/aiml-24";
import { de12 } from "./curriculum/de-12";
import { de24 } from "./curriculum/de-24";
import { ds12 } from "./curriculum/ds-12";
import { ds24 } from "./curriculum/ds-24";
import { genai12 } from "./curriculum/genai-12";
import { pfs12 } from "./curriculum/pfs-12";
import { pfs24 } from "./curriculum/pfs-24";
import { py8 } from "./curriculum/py-8";
import type { Curriculum, TrackId } from "./curriculum/types";

export type { TrackId } from "./curriculum/types";

export type ProgramSlug =
  | "generative-ai-engineering"
  | "applied-ai-ml-engineering"
  | "data-science"
  | "data-engineering"
  | "python-full-stack-web-engineering"
  | "python-programming";

export type Track = {
  id: TrackId;
  weeks: 8 | 12 | 24;
  // Display name of the track (client point 16): "12 Weeks Foundations", "24 Weeks Advanced", "8 Weeks";
  // GenAI's single track is just "12 Weeks".
  name: string;
  // Label used in price blocks, for example "12 weeks (3 months)".
  label: string;
  // Compact label sent to the Google Sheet and WhatsApp, for example "12 weeks" (must match TRACKS in apps-script/Code.gs).
  shortLabel: string;
  curriculum: Curriculum;
};

// Accent colour of the program's icon tile (Tailwind token names in src/app/globals.css).
export type ProgramAccent = "violet" | "sky" | "amber" | "emerald" | "rose" | "teal";
export type ProgramIcon = "sparkles" | "layers" | "chart" | "database" | "window" | "code";

export type Program = {
  slug: ProgramSlug;
  // Name used across the site.
  name: string;
  // Name as written in the course PDF / brochure heading.
  fullName: string;
  // Word inside `name` shown in coral in headings.
  highlight: string;
  // One line for cards and the program hero. DRAFT wording based on the brochure.
  tagline: string;
  icon: ProgramIcon;
  accent: ProgramAccent;
  // Learner rating out of 5 (from the client, 20 Oct 2026).
  rating: number;
  // "Trending" badge (client, 20 Oct 2026: AI & ML, Data Science and GenAI).
  trending: boolean;
  // Seats left in the next batch (real numbers from the client, 20 Oct 2026). Update as batches fill; null hides the label.
  seatsLeft: number | null;
  // Level, when the brochure states it.
  level?: string;
  techStack: string[];
  roles: string[];
  // PDF in public/brochures/ for the "Download brochure" button.
  brochure: string;
  tracks: Track[];
};

const eight = { weeks: 8, name: "8 Weeks", label: "8 weeks (2 months)", shortLabel: "8 weeks" } as const;
const twelve = { weeks: 12, name: "12 Weeks Foundations", label: "12 weeks (3 months)", shortLabel: "12 weeks" } as const;
const twentyFour = { weeks: 24, name: "24 Weeks Advanced", label: "24 weeks (6 months)", shortLabel: "24 weeks" } as const;

export const programs: Program[] = [
  {
    slug: "generative-ai-engineering",
    name: "Generative AI Engineering",
    fullName: "Generative AI Engineering",
    highlight: "Generative AI",
    tagline: "Build LLM apps, RAG systems, AI agents and MCP-powered automations.",
    icon: "sparkles",
    accent: "violet",
    rating: 4.8,
    trending: true,
    seatsLeft: 15,
    techStack: ["LLM APIs", "LangChain", "LlamaIndex", "Vector databases", "n8n", "MCP"],
    roles: ["GenAI Engineer", "LLM Application Developer", "AI Automation Specialist"],
    brochure: "/brochures/datavedanta-generative-ai-engineering-brochure.pdf",
    // GenAI has only one 12-week track, so no "Foundations" label (client, 20 Oct 2026).
    tracks: [{ id: "genai-12", ...twelve, name: "12 Weeks", curriculum: genai12 }],
  },
  {
    slug: "applied-ai-ml-engineering",
    name: "Applied AI & ML Engineering",
    fullName: "Applied AI & Machine Learning Engineering",
    highlight: "AI & ML",
    tagline: "Go from data to deployed models: machine learning, deep learning, MLOps and GenAI.",
    icon: "layers",
    accent: "sky",
    rating: 4.8,
    trending: true,
    seatsLeft: 11,
    techStack: ["Python", "PyTorch", "Scikit-Learn", "FastAPI", "Docker", "DVC", "MLflow", "Airflow", "Vector DBs"],
    roles: ["AI/ML Engineer", "MLOps Engineer", "GenAI Engineer"],
    brochure: "/brochures/datavedanta-applied-ai-ml-engineering-brochure.pdf",
    tracks: [
      { id: "aiml-12", ...twelve, curriculum: aiml12 },
      { id: "aiml-24", ...twentyFour, curriculum: aiml24 },
    ],
  },
  {
    slug: "data-science",
    name: "Data Science",
    fullName: "Data Science",
    highlight: "Science",
    tagline: "Turn data into decisions with SQL, machine learning, BI dashboards, big data and GenAI.",
    icon: "chart",
    accent: "amber",
    rating: 4.7,
    trending: true,
    seatsLeft: 14,
    techStack: ["Python", "SQL", "Snowflake", "Power BI", "Streamlit", "FastAPI", "MLflow", "Airflow", "PySpark"],
    roles: ["Data Scientist", "Data Analyst", "Analytics Engineer", "AI/Data Product Developer"],
    brochure: "/brochures/datavedanta-data-science-brochure.pdf",
    tracks: [
      { id: "ds-12", ...twelve, curriculum: ds12 },
      { id: "ds-24", ...twentyFour, curriculum: ds24 },
    ],
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    fullName: "Data Engineering",
    highlight: "Engineering",
    tagline: "Build cloud data pipelines with SQL, Python, Snowflake, dbt, PySpark and Airflow.",
    icon: "database",
    accent: "emerald",
    rating: 4.6,
    trending: false,
    seatsLeft: 13,
    techStack: ["SQL", "Python", "Snowflake", "dbt", "Databricks", "PySpark", "AWS S3", "Apache Airflow"],
    roles: ["Junior Data Engineer", "Big Data Engineer", "Analytics Engineer", "Cloud Data Engineer"],
    brochure: "/brochures/datavedanta-data-engineering-brochure.pdf",
    tracks: [
      { id: "de-12", ...twelve, curriculum: de12 },
      { id: "de-24", ...twentyFour, curriculum: de24 },
    ],
  },
  {
    slug: "python-full-stack-web-engineering",
    name: "Python Full Stack",
    fullName: "Python Full Stack",
    highlight: "Full Stack",
    tagline: "Build and ship full stack apps with React, FastAPI, Django, Docker and Kubernetes.",
    icon: "window",
    accent: "rose",
    rating: 4.7,
    trending: false,
    seatsLeft: 12,
    techStack: ["React", "Tailwind CSS", "Python", "FastAPI", "Django", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    roles: ["Full Stack Engineer", "Python Backend Developer", "Software Engineer"],
    brochure: "/brochures/datavedanta-python-full-stack-web-engineering-brochure.pdf",
    tracks: [
      { id: "pfs-12", ...twelve, curriculum: pfs12 },
      { id: "pfs-24", ...twentyFour, curriculum: pfs24 },
    ],
  },
  {
    slug: "python-programming",
    name: "Python Programming",
    fullName: "Python for Modern Software Engineering & AI Integration",
    highlight: "Python",
    tagline: "Learn Python from the basics and build an AI-powered app in 8 weeks.",
    icon: "code",
    accent: "teal",
    rating: 4.6,
    trending: false,
    seatsLeft: 10,
    level: "Beginner to production-ready",
    techStack: ["Python", "OOP", "SQLite", "requests", "BeautifulSoup", "GenAI APIs"],
    roles: ["Software development", "Data roles"],
    brochure: "/brochures/datavedanta-python-programming-brochure.pdf",
    tracks: [{ id: "py-8", ...eight, curriculum: py8 }],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}

export function getTrack(id: TrackId): { program: Program; track: Track } {
  for (const program of programs) {
    const track = program.tracks.find((t) => t.id === id);
    if (track) return { program, track };
  }
  throw new Error(`Unknown track: ${id}`);
}

export const allTracks: { program: Program; track: Track }[] = programs.flatMap((program) =>
  program.tracks.map((track) => ({ program, track })),
);

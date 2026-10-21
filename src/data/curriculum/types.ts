// Shape of one program track's curriculum (for example Data Science, 24 weeks).

export type TrackId =
  | "genai-12"
  | "aiml-12"
  | "aiml-24"
  | "ds-12"
  | "ds-24"
  | "de-12"
  | "de-24"
  | "pfs-12"
  | "pfs-24"
  | "py-8";

export type CurriculumItem = { text: string; children?: CurriculumItem[] };

export type WeekDetail = {
  week: number;
  title: string;
  // One-paragraph description (24-week Data Science and Python Full Stack describe weeks this way).
  summary?: string;
  // Month heading printed above this week in the PDF, for example "MONTH 2 — AI AGENTS + n8n AI AUTOMATION".
  monthHeading?: { month: number; title: string };
  groups: { heading: "Topics" | "Tools" | null; items: CurriculumItem[] }[];
};

export type ProjectDetail = { label: string | null; text: string; children?: ProjectDetail[] };

export type Project = { title: string; details: ProjectDetail[] };

export type ProjectSection = { title: string; focus: string | null; projects: Project[] };

// One month of a brochure-based course: its modules with the exact brochure text.
export type MonthModules = { label: string; title: string; modules: { title: string; text: string }[] };

export type Curriculum = {
  id: TrackId;
  // Where the text was copied from: pages of the client's course content PDF, or a client brochure
  // (Data Engineering and Python, added 18 Oct 2026; brochures have months and modules, not weeks).
  sourcePages?: [number, number];
  sourceBrochure?: string;
  // `recommended` (hours per week) is only given in the course PDF, not in the brochures.
  meta: { duration: string; recommended?: string; format: string; philosophy?: string };
  // "Curriculum Overview" table. Labels are usually "Month N"; some tracks add rows like "Milestone 1".
  overview: { label: string; focus: string; outcome: string }[];
  // Optional headings that split the weekly table (Python Full Stack, 24 weeks).
  moduleGroups?: { title: string; fromWeek: number }[];
  // "Weekly Module Breakdown" table.
  modules: { week: number; module: string; learn: string }[];
  // "Detailed Curriculum Content", week by week.
  weeks: WeekDetail[];
  // Brochure-based courses only: month-by-month modules.
  monthModules?: MonthModules[];
  projectSections: ProjectSection[];
  differentiation: { focusAreas: string[]; tagline: string | null };
};

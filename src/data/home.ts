/*
  Home page copy.
  Lines marked [PDF] come from the client's course content PDF; [DECK] from the client's career deck.
  Everything else is DRAFT - needs client approval (see README: pending items).
*/

import { programs } from "./programs";

// Average of the 6 program ratings, to one decimal (4.8, 4.8, 4.7, 4.6, 4.7, 4.6 -> 4.7).
export const averageRating = (programs.reduce((sum, p) => sum + p.rating, 0) / programs.length).toFixed(1);

export const hero = {
  eyebrow: "Industry-led AI, Data & Software Engineering School", // DRAFT, strong tone (client, 18 Oct 2026)
  title: "Build Real Skills. Become AI Native and Industry-Ready.", // client, 20 Oct 2026
  highlight: "AI Native and Industry-Ready.",
  // Client point 6, with the 2 new programs.
  subtitle:
    "Code-first programs in Generative AI, Applied AI & ML, Data Science, Data Engineering, Python and Python Full Stack, with 70% hands-on work and capstone projects.",
  primaryCta: { label: "Book free demo", href: "/#free-demo" },
  secondaryCta: { label: "View programs", href: "/programs/" },
  // Short proof line under the buttons (real figures from the client, 18 Oct 2026).
  proof: [`${averageRating}/5 average learner rating`, "2000+ students trained"],
  // Engineering illustration on the right (replaces the photo, client points 5 and 8). Decorative only.
  illustration: {
    fileName: "capstone_pipeline.py",
    code: [
      { text: "from datavedanta import build, deploy", tone: "muted" },
      { text: "", tone: "muted" },
      { text: "data = ingest(\"s3://raw/events\")", tone: "plain" },
      { text: "model = build(data, stack=\"PyTorch\")", tone: "plain" },
      { text: "api = deploy(model, \"FastAPI + Docker\")", tone: "plain" },
      { text: "monitor(api)  # live in production", tone: "accent" },
    ],
    steps: ["Ingest", "Build", "Deploy", "Monitor"],
    demoLabel: "Next free demo",
    demoFallback: "Every Saturday · 7:00 PM (IST)",
  },
};

// Stats row under the hero. Real figures from the client (20 Oct 2026); the rating is the average of the 6 program ratings.
export const stats = [
  { value: "2000+", label: "Students trained", icon: "profile" as const },
  { value: "~80%", label: "Learners got jobs", icon: "briefcase" as const },
  { value: `${averageRating}/5`, label: "Average learner rating", icon: "star" as const },
  { value: String(programs.length), label: "Industry programs", icon: "layers" as const },
];

export const statsLabel = "DataVedanta at a glance";

// Client point 25. College names as given by the client (short forms only); no claim of approval or partnership.
// Add a logo file in public/images/colleges/ and set `logo` to show it; without one, a text badge is shown.
export const colleges: {
  label: string;
  // showName: also print the short name next to round crests (TSEC's logo already spells its name).
  list: { name: string; showName?: boolean; logo?: { src: string; width: number; height: number } }[];
} = {
  label: "Trusted by students from",
  // Logos supplied by the user, 18 Oct 2026. VIT = Vellore Institute of Technology.
  list: [
    { name: "VIT", showName: true, logo: { src: "/images/colleges/vit.png", width: 152, height: 160 } },
    { name: "SPIT", showName: true, logo: { src: "/images/colleges/spit.png", width: 161, height: 160 } },
    { name: "TSEC", logo: { src: "/images/colleges/tsec.png", width: 248, height: 160 } },
  ],
};

// Client point 25: companies where learners work (client confirms these are real placements, 18 Oct 2026).
// Official logos from Wikimedia Commons (18 Oct 2026). `display` is the height shown on the page in px, tuned so the logos look balanced.
// A company shown in a logo strip. Without `logo`, its name is shown as a text badge (e.g. no public logo file yet).
export type Company = { name: string; logo?: string; width?: number; height?: number; display?: number };

export const placedAt: { label: string; companies: Company[] } = {
  label: "Our learners work at",
  companies: [
    { name: "EY", logo: "/images/companies/ey.svg", width: 69, height: 69, display: 40 },
    { name: "Deloitte", logo: "/images/companies/deloitte.svg", width: 210, height: 40, display: 24 },
    { name: "TCS", logo: "/images/companies/tcs.svg", width: 739, height: 297, display: 52 },
    { name: "Accenture", logo: "/images/companies/accenture.svg", width: 163, height: 43, display: 28 },
    { name: "Databricks", logo: "/images/companies/databricks.svg", width: 107, height: 45, display: 34 },
    { name: "Flipkart", logo: "/images/companies/flipkart.svg", width: 190, height: 50, display: 30 },
    // Added 21 Oct 2026 (client). Logo from Wikimedia Commons.
    { name: "Fractal", logo: "/images/companies/fractal.png", width: 302, height: 77, display: 30 },
  ],
};

/*
  Companies the trainers work at (client, 21 Oct 2026). Company names only: trainer names stay confidential.
  Shown on Home and About.
*/
export const trainersFrom: { label: string; companies: Company[] } = {
  label: "Our trainers come from",
  companies: [
    { name: "Amazon", logo: "/images/companies/amazon.svg", width: 603, height: 182, display: 30 },
    { name: "TCS", logo: "/images/companies/tcs.svg", width: 739, height: 297, display: 52 },
    { name: "Fractal", logo: "/images/companies/fractal.png", width: 302, height: 77, display: 30 },
    { name: "Flipkart", logo: "/images/companies/flipkart.svg", width: 190, height: 50, display: 30 },
    { name: "EY", logo: "/images/companies/ey.svg", width: 69, height: 69, display: 40 },
    // No public logo file: shown as a text badge until the client sends one.
    { name: "GeekMinds" },
  ],
};

// "What Makes Our Learning Experience Different" (text supplied by the client, 18 Oct 2026).
export const highlights = {
  eyebrow: "Why DataVedanta",
  title: "What Makes Our Learning Experience Different",
  highlight: "Different",
  items: [
    {
      title: "Small, Dedicated Cohorts",
      icon: "users" as const,
      text: "Learn in small, carefully structured cohorts that encourage active participation, meaningful interaction, and personalised learning from industry practitioners.",
    },
    {
      title: "Dedicated Q&A and Doubt-Clearing Sessions",
      icon: "help" as const,
      text: "Every course includes dedicated Q&A sessions beyond regular classes, giving you additional opportunities to ask questions, clarify complex concepts, and strengthen your technical understanding.",
    },
    {
      title: "Dedicated Learner Community",
      icon: "community" as const,
      text: "Be part of a collaborative learning community where you can connect with fellow learners, discuss technical concepts, share resources, solve problems together, and support each other throughout your learning journey.",
    },
  ],
};

// The problem we solve. [DECK] "What You Learn vs. What Companies Need".
export const problem = {
  eyebrow: "The problem",
  title: "What you learn vs. what companies need",
  highlight: "companies need",
  text: "Using AI is not the same as building AI. A degree gets you considered. Proof gets you noticed.",
  columns: { area: "Area", academic: "What you know", industry: "Industry expectation" }, // client point 14
  rows: [
    { area: "Data", academic: "Basic SQL", industry: "Complex transformations, pipelines, data quality" },
    { area: "Backend", academic: "Scripts and assignments", industry: "APIs, scalability, reliability" },
    { area: "AI", academic: "Models and theory", industry: "RAG, agents, evaluation, guardrails" },
    { area: "Engineering", academic: "Submit the project", industry: "Test, deploy, monitor, debug" },
  ],
  takeaway: "The gap isn't about tools. It's about engineering depth.",
};

// 4-stage method. Stage names from the [DECK] ("Choose your path · Build something real · Ship it · Show your work");
// the one-line descriptions are DRAFT.
export const method = {
  eyebrow: "How should you learn",
  title: "A 4-stage method",
  highlight: "4-stage",
  stepLabel: "Stage",
  stages: [
    { title: "Choose your path", icon: "target" as const, accent: "violet" as const, text: "Pick the program that matches the work you want to do every day." },
    { title: "Build something real", icon: "code" as const, accent: "sky" as const, text: "Learn by building, with about 70% of your time spent hands-on." },
    { title: "Ship it", icon: "rocket" as const, accent: "emerald" as const, text: "Test, deploy and monitor your work with production tools." },
    { title: "Show your work", icon: "badge" as const, accent: "amber" as const, text: "Finish with capstone projects and documented code you can share." },
  ],
};

// Comparison with generic courses. DataVedanta column from the [PDF] differentiation tables; no competitor names.
// "Approach" row removed (client point 13).
export const comparison = {
  eyebrow: "How we're different",
  title: "Generic courses vs DataVedanta",
  highlight: "DataVedanta",
  columns: { generic: "Generic courses", ours: "DataVedanta" },
  rows: [
    { topic: "Generative AI", generic: "GenAI basics", ours: "GenAI + Agents + n8n Automation" },
    { topic: "Machine learning", generic: "Models in notebooks", ours: "Applied ML + Production Systems + MLOps" },
    { topic: "Projects", generic: "Small exercises", ours: "Hands-on projects and capstones on real business use cases" },
    { topic: "Deployment", generic: "Rarely covered", ours: "FastAPI, Docker, cloud deployment and monitoring" },
  ],
};

// Who the programs are for (site-wide, not per program). From the client's brief; no age is mentioned (decided 7 Oct 2026).
export const audience = {
  eyebrow: "Who it's for",
  title: "Who these programs are for",
  highlight: "for",
  items: [
    "College students in their 1st, 2nd, 3rd or 4th year",
    "Recent graduates starting a career in tech",
    "Anyone moving into tech from another career",
    "Working professionals who want to add AI, data or full stack skills to their current role",
    "Developers who want to move from using AI to building it", // [DECK] "Using AI is not the same as building AI"
  ],
};

export const freeDemo = {
  // Photo above the heading. Supplied by the user, 10 Oct 2026 (resized to 1000 px JPEG).
  image: {
    src: "/images/demo-class.jpg",
    alt: "A student smiling during a live online class with an instructor on his laptop",
    width: 1000,
    height: 747,
    // Negative = top leans left. Straightens on hover.
    rotateDeg: -5,
  },
  eyebrow: "Free demo",
  title: "See a class before you join",
  highlight: "before you join",
  text: "Every program has a free live demo every Saturday at 7:00 PM (IST). Book your seat here, then message us on WhatsApp to get the meeting link.",
  points: ["A live class, taught the way our programs are taught", "Ask questions about the curriculum and projects", "Free, with no payment needed"],
};

// Section headings for the program and capstone previews. DRAFT wording.
export const programsSection = {
  eyebrow: "Programs",
  title: "Programs built for high-growth careers",
  highlight: "high-growth careers",
  description: "Six code-first programs, taught live in small cohorts. Pick the work you want to do every day.",
  action: { label: "All programs", href: "/programs/" },
  // Labels on each program card (src/components/ProgramCard.tsx).
  card: {
    link: "View program",
    trending: "Trending",
    // Seats label, shining red (real numbers in src/data/programs.ts).
    seats: (n: number) => `${n} Seats Left!`,
    rating: "rating",
    demo: "Next free demo:",
    demoFallback: "Saturday",
  },
};

// Scrolling testimonials on the home page (client point 26).
export const testimonialsSection = {
  eyebrow: "Learners",
  title: "What our learners say",
  highlight: "learners say",
};

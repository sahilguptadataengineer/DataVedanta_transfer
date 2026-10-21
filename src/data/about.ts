/*
  About Us: about the company, what it provides and how. Text only (no video).
  No founder, team or mentor profiles (see README: content rules).
  Sources: [T] Terms & Conditions §1 (client policy PDF), [D] career deck (the client's career deck),
  [C] course PDF, [V] Vision / Mission / Core Values supplied by the client (18 Oct 2026, exact text).
  Other wording is DRAFT - needs client approval.
*/

export const about = {
  eyebrow: "About us",
  title: "Your career isn't found. It's built.", // [D]
  highlight: "built",
  intro:
    "DataVedanta Technologies provides industry-oriented education, professional training and coaching in AI, data and software engineering.", // [T]

  // Why we exist. Stronger, industry-led wording (client point 23, 18 Oct 2026). DRAFT.
  why: {
    eyebrow: "Why we started",
    title: "Built by industry practitioners, for future engineers",
    highlight: "industry practitioners",
    paragraphs: [
      "DataVedanta is backed by industry professionals with decades of combined experience in AI, data and software engineering. We teach what real engineering teams expect on day one.",
      "AI is creating new opportunities, but the standard for getting hired is rising just as fast. Using AI is not the same as building AI. A degree gets you considered. Proof gets you noticed.", // [D]
      "That is why every program is code-first and project-led: you build, test, deploy and present real systems, guided by people who do this work every day.",
    ],
  },

  // Trainers' companies (client, 21 Oct 2026). The companies themselves are listed in src/data/home.ts (trainersFrom);
  // trainer names stay confidential. DRAFT wording.
  trainers: {
    eyebrow: "Our trainers",
    title: "Learn from engineers at leading companies",
    highlight: "leading companies",
    text: "Our programs are taught by working professionals from top companies, who bring real project experience into every class.",
  },

  // [V] What drives us.
  drives: {
    eyebrow: "What drives us",
    title: "Our vision, mission and values",
    highlight: "vision, mission and values",
    items: [
      {
        title: "Our Vision",
        icon: "eye" as const,
        accent: "violet" as const,
        text: "To make quality technology education accessible to aspiring engineers everywhere and help them build meaningful careers in AI, data, and emerging technologies.",
      },
      {
        title: "Our Mission",
        icon: "target" as const,
        accent: "sky" as const,
        text: "To bridge the gap between education and industry through expert guidance, hands-on projects, and real-world engineering practices.",
      },
      {
        // Summary of the 7 core values below (DRAFT wording built from the client's values).
        title: "Our Core Values",
        icon: "badge" as const,
        accent: "emerald" as const,
        text: "Purpose, building before claiming, industry standards, access, integrity, community and responsibility guide everything we teach.",
      },
    ],
  },

  // [V] Core values.
  values: {
    eyebrow: "Our core values",
    title: "What we stand for",
    highlight: "stand for",
    items: [
      { title: "Learn with Purpose", icon: "target" as const, text: "Build strong fundamentals and practical, industry-relevant skills." },
      { title: "Build Before You Claim", icon: "tools" as const, text: "Learn by creating, testing, and improving real projects." },
      {
        title: "Industry Standards, Not Shortcuts",
        icon: "briefcase" as const,
        text: "Develop the communication, collaboration, and problem-solving skills expected in professional teams.",
      },
      {
        title: "Access Without Compromise",
        icon: "users" as const,
        text: "Make quality technology education accessible, especially in underserved communities.",
      },
      { title: "Outcomes with Integrity", icon: "badge" as const, text: "Focus on genuine skills, career readiness, and honest communication." },
      { title: "Grow Through Community", icon: "community" as const, text: "Learn through mentorship, collaboration, and peer support." },
      {
        title: "Build Responsibly",
        icon: "shield" as const,
        text: "Create technology with reliability, privacy, security, fairness, and impact in mind.",
      },
    ],
  },

  // What we provide. [T] [C]
  offer: {
    title: "What we offer",
    highlight: "offer",
    intro: "Six programs, with 12 Weeks Foundations and 24 Weeks Advanced tracks (Python Programming runs for 8 weeks):",
    programs: [
      "Generative AI Engineering",
      "Applied AI & ML Engineering",
      "Data Science",
      "Data Engineering",
      "Python Full Stack",
      "Python Programming",
    ],
    services: [
      "Live online classes in small cohorts",
      "Dedicated Q&A and doubt-clearing sessions",
      "Class recordings",
      "Projects, assignments and capstone projects based on real business problems",
      "Career guidance and a verifiable certificate",
      "A learner community",
    ],
  },

  // How we teach. [C] [D]
  approach: {
    title: "How we teach",
    highlight: "teach",
    items: [
      { title: "Code-first", icon: "code" as const, text: "About 30% concepts and 70% hands-on work. Applied skills, without heavy math proofs." },
      { title: "Production-ready", icon: "rocket" as const, text: "Build, test, deploy, monitor and improve: the full engineering cycle, not just notebook demos." },
      { title: "Proof you can show", icon: "badge" as const, text: "Deployed projects and documented GitHub work that a hiring manager can open and check." },
      { title: "Industry perspective", icon: "briefcase" as const, text: "Learn what companies actually evaluate, from people who already do the work." },
    ],
  },

  community: {
    title: "Our community",
    highlight: "community",
    text: "Learners study in cohorts, build together and share their work. Every program also runs a free demo every Saturday at 7:00 PM (IST), open to anyone curious about it.",
  },
};

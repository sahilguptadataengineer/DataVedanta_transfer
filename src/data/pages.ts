/*
  Page-level wording: titles, meta descriptions, headings and labels for every page except Home.
  Wording is DRAFT - needs client approval unless marked [DECK] (the client's career deck) or [PDF] (course PDF).
*/

import type { Program } from "./programs";

export const programsPage = {
  metaTitle: "Programs",
  metaDescription:
    "Compare DataVedanta's online programs in Generative AI, Applied AI & ML, Data Science, Data Engineering, Python and Python Full Stack.",
  eyebrow: "Programs",
  title: "Industry-ready programs in AI, data and software engineering",
  highlight: "Industry-ready",
  description: "Six code-first programs taught live by practitioners. Start with 12 Weeks Foundations or go deeper with 24 Weeks Advanced.",
  // Animated illustration on the left of the heading. Supplied by the user, 10 Oct 2026.
  image: {
    src: "/images/programs-hero.webp",
    alt: "Illustration of a student coding on a laptop, surrounded by AI, ML, Data Science and Python topics",
    width: 400,
    height: 225,
    rotateDeg: -5,
  },
  compare: {
    eyebrow: "Compare",
    title: "Programs at a glance",
    highlight: "at a glance",
    columns: { program: "Program", tracks: "Tracks", format: "Format", rating: "Learner rating" },
  },
  cta: {
    title: "Not sure which program is right for you?",
    highlight: "right for you",
    description: "Talk to our team for personalised guidance, or join a free demo on Saturday at 7:00 PM (IST).",
    primary: { label: "Book free demo", href: "/#free-demo" },
    secondary: { label: "Talk to us", href: "/contact/" },
  },
};

export const programDetailsPage = {
  // e.g. "Data Science Course Online" -> "Data Science Course Online | DataVedanta" (search title).
  metaTitle: (program: Program) => `${program.name} Course Online`,
  metaDescription: (program: Program, duration: string) =>
    `${program.name} course by DataVedanta Technologies: live, code-first online training (${duration}), capstone projects and a free Saturday demo.`,
  breadcrumb: { navLabel: "Breadcrumb", label: "Programs", href: "/programs/", home: { label: "Home", href: "/" } },
  hero: {
    demo: { label: "Book free demo", href: "/#free-demo" },
    brochure: "Download brochure",
    facts: { duration: "Duration", classes: "Classes", classesValue: "Live online", rating: "Learner rating", level: "Level", format: "Format" },
  },
  // In-page tabs (client's reference design). Each points to a section id on the page.
  tabs: {
    navLabel: "On this page",
    items: [
      { label: "Overview", id: "overview" },
      { label: "Curriculum", id: "curriculum" },
      { label: "Fees", id: "fees" },
      { label: "FAQs", id: "faqs" },
    ],
  },
  overview: {
    audienceTitle: "Who is this for?",
    learnTitle: "What will you learn?",
    rolesTitle: "Roles you can aim for",
    benefitsTitle: "What makes this program different",
    benefitsHighlight: "different",
  },
  curriculum: {
    title: "Curriculum and projects",
    highlight: "projects",
    trackSelectorLabel: "Choose your track",
    columns: { month: "Month", weeks: "Weeks", focus: "Focus", outcome: "Outcome" },
    projectsTitle: "Projects and capstones",
  },
  fees: {
    title: "Fees and enrollment",
    highlight: "enrollment",
    enroll: "Enroll now",
    // Advanced 3 months, for learners who finished the 12-week Foundations (brochure "Next 3 Months").
    addOn: {
      name: "Advanced 3 months",
      // Must match TRACKS in apps-script/Code.gs.
      sheetLabel: "Advanced 3 months",
      note: "Already finished 12 Weeks Foundations? Continue with the advanced half of the program.",
      enroll: "Enroll in Advanced",
    },
    savings: (p: { separately: string; full: string; saving: string }) => ({
      title: `Save ${p.saving} with 24 Weeks Advanced`,
      text: `Foundations and Advanced bought separately cost ${p.separately}. The full 24 weeks costs ${p.full}, so you save ${p.saving}.`,
    }),
  },
  // Sticky side card (client point 20).
  sidebar: {
    countdownTitle: "Next free demo starts in",
    units: { days: "Days", hours: "Hrs", minutes: "Min", seconds: "Sec" },
    countdownLoading: "Every Saturday · 7:00 PM (IST)",
    features: {
      certificate: "Verifiable certificate included",
      doubt: "Live Q&A and doubt-clearing sessions",
      recordings: "Class recordings available",
      demo: "Free demo class every Saturday",
    },
    enroll: "Enroll now",
    whatsapp: "WhatsApp us",
    brochure: "Download brochure",
    footnote: "Free demo every Saturday at 7:00 PM (IST)",
  },
  // "Download brochure" form (lead capture, 21 Oct 2026). Saved to the "Brochure Downloads" Sheet tab.
  brochureForm: {
    titlePrefix: "Download the",
    titleSuffix: "brochure",
    description: "Share your details and the brochure will download right away. Our team may contact you to help you choose the right track.",
    submit: "Download brochure",
    cancel: "Cancel",
    close: "Close",
    started: "Your download has started.",
  },
  whatsappMessage: (programName: string) => `Hi DataVedanta, I would like to know more about the ${programName} program.`,
  faq: {
    title: "Common questions",
    highlight: "questions",
    action: { label: "All FAQs", href: "/faq/" },
    // FAQ categories (titles from src/data/faqs.ts) shown on every program page.
    categories: ["Fees and payment", "Refunds and batch transfer"],
  },
  mobileBar: { from: "From", viewFees: "View fees" },
  cta: {
    title: "See a class before you decide",
    highlight: "before you decide",
    icon: "video" as const,
    description: "Join the free demo for this program on Saturday at 7:00 PM (IST).",
    primary: { label: "Book free demo", href: "/#free-demo" },
    secondary: { label: "Talk to us", href: "/contact/" },
  },
};

export const outcomesPage = {
  metaTitle: "Student outcomes",
  metaDescription:
    "Capstone projects, career guidance and what learners build in DataVedanta's AI, data science and full stack programs.",
  eyebrow: "Student outcomes",
  title: "Proof you can show", // [DECK] "Show proof anyone can check"
  highlight: "show",
  description: "Don't just list what you know. Show what you can build.", // [DECK]
  // Animated illustration on the right of the heading. Supplied by the user, 10 Oct 2026.
  image: {
    src: "/images/outcomes-team.webp",
    alt: "Illustration of three students working together on a laptop and sharing ideas",
    width: 400,
    height: 225,
    // Negative = top leans left. Straightens on hover.
    rotateDeg: -5,
  },
  capstones: {
    eyebrow: "Capstone projects",
    title: "Final capstone options",
    highlight: "capstone",
    description: "Each program ends with real capstone projects. Here are the final capstones, program by program.",
    viewProgram: "View program",
  },
  career: {
    eyebrow: "Career guidance",
    title: "Make your profile easy to shortlist",
    highlight: "shortlist",
    description: "Alongside the curriculum, we guide you on presenting your work so recruiters and hiring managers can evaluate it.",
    // [DECK] career resources slides.
    items: [
      { title: "LinkedIn profile", icon: "profile" as const, text: "A clear headline with your target role and stack, and your best projects featured." },
      { title: "ATS-friendly resume", icon: "document" as const, text: "Standard headings, plain formatting, and projects that lead with what shipped." },
      { title: "GitHub portfolio", icon: "repo" as const, text: "Your 3–4 best repositories with a README, tests and a deployed link." },
      { title: "Open-source work", icon: "merge" as const, text: "Start small with docs fixes and good first issues, and list merged pull requests." },
    ],
  },
  testimonials: { eyebrow: "Learners", title: "What learners say", highlight: "say" },
  cta: {
    title: "Start building your proof",
    highlight: "proof",
    description: "Pick a program and join the free demo on Saturday at 7:00 PM (IST).",
    primary: { label: "View programs", href: "/programs/" },
    secondary: { label: "Book free demo", href: "/#free-demo" },
  },
};

export const aboutPage = {
  metaTitle: "About us",
  metaDescription:
    "DataVedanta Technologies provides industry-oriented education and professional training in AI, data and software engineering.",
  offerProgramsLabel: "Programs",
  offerServicesLabel: "Services",
  cta: {
    title: "Build something real",
    highlight: "real",
    description: "Explore the programs or join the free demo on Saturday at 7:00 PM (IST).",
    primary: { label: "View programs", href: "/programs/" },
    secondary: { label: "Book free demo", href: "/#free-demo" },
  },
};

export const faqPage = {
  metaTitle: "FAQ",
  metaDescription: "Answers about DataVedanta programs, eligibility, classes, fees, refunds, batch transfer and career support.",
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  highlight: "questions",
  description: "Can't find your answer? Contact our team.",
  cta: {
    title: "Still have a question?",
    highlight: "question",
    description: "Our team is happy to help you choose the right program.",
    primary: { label: "Contact us", href: "/contact/" },
    secondary: { label: "Book free demo", href: "/#free-demo" },
  },
};

export const contactPage = {
  metaTitle: "Contact / Apply",
  metaDescription: "Enquire about DataVedanta programs or reach our team on WhatsApp or email.",
  eyebrow: "Contact / Apply",
  title: "Talk to our team",
  highlight: "our team",
  description: "Send an enquiry and we will get back to you, or reach us directly.",
  // Animated illustration below "Reach us directly". Supplied by the user, 10 Oct 2026.
  image: {
    src: "/images/contact-laptop.webp",
    alt: "Animated illustration of a laptop on a desk",
    width: 400,
    height: 225,
    rotateDeg: -5,
  },
  direct: {
    title: "Reach us directly",
    whatsapp: "WhatsApp",
    email: "Email",
    phone: "Phone",
    chat: "Chat with us on WhatsApp",
  },
};

// "Apply as a mentor" page (client point 3). DRAFT wording.
export const mentorPage = {
  metaTitle: "Apply as a mentor",
  metaDescription: "Industry professionals: apply to teach and mentor learners in DataVedanta's AI, data and software engineering programs.",
  eyebrow: "Mentors",
  title: "Teach what you build. Become a DataVedanta mentor.",
  highlight: "DataVedanta mentor.",
  description:
    "We are looking for engineers and data professionals who build real systems at work and enjoy helping the next generation do the same.",
  lookingFor: {
    title: "Who we're looking for",
    items: [
      "At least 3 years of hands-on industry experience",
      "Working knowledge of the tools taught in our programs",
      "Experience at a product company, MNC or high-growth startup",
      "You enjoy explaining concepts and reviewing code",
    ],
  },
  next: {
    title: "What happens next",
    text: "Our team reviews every application and contacts shortlisted mentors for a short conversation about the programs and batches that fit you.",
  },
};

// Link to the mentor page (footer and About page).
export const mentorCta = {
  title: "Are you an industry expert?",
  highlight: "industry expert?",
  description: "Share your experience with the next generation of engineers. Apply to teach and mentor at DataVedanta.",
  primary: { label: "Apply as a mentor", href: "/mentor/" },
};

export const thankYouPage = {
  metaTitle: "Thank you",
  metaDescription: "Thank you for contacting DataVedanta.",
  demo: {
    eyebrow: "Free demo booked",
    title: "You're booked for the free demo",
    highlight: "free demo",
    text: "We have emailed you the details. Save the date:",
    labels: { program: "Program", date: "Date", time: "Time" },
    meetingNote: "To get the meeting link, message us on WhatsApp.",
    meetingCta: "Get the meeting link on WhatsApp",
    // Used while the WhatsApp number is still a placeholder.
    meetingFallback: { label: "Contact us for the meeting link", href: "/contact/" },
  },
  mentor: {
    eyebrow: "Application received",
    title: "Thank you for applying as a mentor",
    highlight: "mentor",
    text: "Our team will review your application and contact you if your profile matches our upcoming batches.",
  },
  enquiry: {
    eyebrow: "Enquiry received",
    title: "Thank you for your enquiry",
    highlight: "enquiry",
    text: "Our team will contact you soon.",
  },
  whatsapp: "Chat with us on WhatsApp",
  back: { label: "Back to home", href: "/" },
  programs: { label: "View programs", href: "/programs/" },
};

export const policyPages = {
  privacy: {
    path: "/privacy/",
    metaTitle: "Privacy Policy",
    metaDescription: "How DataVedanta Technologies collects, uses, shares, stores and protects personal data.",
  },
  terms: {
    path: "/terms/",
    metaTitle: "Terms & Conditions",
    metaDescription: "The terms that govern use of the DataVedanta website, programs and services.",
  },
  refund: {
    path: "/refund/",
    metaTitle: "Refund & Cancellation Policy",
    metaDescription:
      "Pro-rata refund within 7 calendar days of cohort start, a one-time batch transfer, and how to request a cancellation.",
  },
  relatedLabel: "Related policies",
};

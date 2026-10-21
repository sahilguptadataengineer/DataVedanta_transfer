/*
  SAMPLE testimonials, shown without a "Sample" tag (user's decision, 7 Oct 2026).
  Quotes 1-3: text supplied by the client (18 Oct 2026), names kept as they were.
  The client's "[job title] at [company]" placeholders are filled with EXAMPLE roles at the user's request
  (generic, no real company names). They MUST be replaced with real details before launch (see README: pending items).
  Quote 4 is our earlier sample (no client text for Python Full Stack yet).
  When real testimonials arrive, replace this list and set isSample: false.
*/

export type Testimonial = {
  quote: string;
  author: string;
  program: string;
  // Current role, shown under the name (example roles for now).
  role?: string;
  isSample: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The Generative AI training helped me understand how LLMs and RAG-based applications work in practice. The hands-on learning strengthened my understanding of modern AI engineering and helped me prepare for opportunities in this growing field. I subsequently secured a role as a Junior AI Engineer at a product startup.",
    author: "Priya Sharma",
    program: "Generative AI Engineering",
    role: "Junior AI Engineer",
    isSample: true,
  },
  {
    quote:
      "The Data Science sessions helped me build confidence in Python, data analysis, and solving technical problems. The practical explanations helped me connect theoretical concepts with real-world applications. I'm excited to have secured my first role as a Data Analyst at a fintech company.",
    author: "Ananya Iyer",
    program: "Data Science",
    role: "Data Analyst",
    isSample: true,
  },
  {
    quote:
      "The Machine Learning training gave me a stronger foundation in model development, evaluation, and practical problem-solving. It helped me strengthen my technical skills and approach interviews with greater confidence. I was subsequently able to secure a new role as a Machine Learning Engineer, marking an important milestone in my career.",
    author: "Rohan Mehta",
    program: "Applied AI & ML Engineering",
    role: "Machine Learning Engineer",
    isSample: true,
  },
  {
    quote: "Going from a React frontend to a deployed Python backend in one program was exactly what I needed.",
    author: "Karthik Nair",
    program: "Python Full Stack",
    isSample: true,
  },
];

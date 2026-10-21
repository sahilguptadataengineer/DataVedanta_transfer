/*
  General FAQs. Facts come from the course PDF and the client.
  DRAFT - needs client approval (wording). Rules: no "+ GST" for now (18 Oct 2026); payment options: UPI and EMI via WhatsApp (EMI confirmed by the client, 20 Oct 2026);
  refund = pro-rata within 7 days of cohort start + one-time batch transfer; no job, salary or placement promises.
*/

export type Faq = { question: string; answer: string };
export type FaqCategory = { title: string; faqs: Faq[] };

export const faqCategories: FaqCategory[] = [
  {
    title: "Programs and eligibility",
    faqs: [
      {
        question: "Which programs do you offer?",
        answer:
          "Generative AI Engineering (12 weeks), Applied AI & ML Engineering, Data Science, Data Engineering and Python Full Stack (12 or 24 weeks each), and Python Programming (8 weeks).",
      },
      {
        question: "Who can join?",
        answer:
          "Our programs are built for college students in their 1st, 2nd, 3rd or 4th year, recent graduates, anyone moving into tech from another career, working professionals adding AI, data or full stack skills, and developers who want to build with AI.",
      },
      {
        question: "What is the difference between 12 Weeks Foundations and 24 Weeks Advanced?",
        answer:
          "12 Weeks Foundations covers the core skills of the program and ends with a capstone project. 24 Weeks Advanced goes further into advanced, industry-level topics and includes two milestone capstone projects. Each program page shows the month-by-month curriculum for both tracks.",
      },
      {
        question: "Can I start with Foundations and continue with Advanced later?",
        answer:
          "Yes. After 12 Weeks Foundations you can continue with Advanced 3 months. If you already know you want both, the full 24 Weeks Advanced costs less than taking them separately. Each program page shows the exact saving.",
      },
      {
        question: "How are the programs taught?",
        answer:
          "Programs are taught live online in small cohorts and follow a code-first format: about 30% concepts and 70% hands-on work, with projects throughout and a capstone at the end.",
      },
      {
        question: "Do I get a certificate?",
        answer: "Yes. You receive a verifiable certificate when you complete your program.",
      },
    ],
  },
  {
    title: "Classes and schedule",
    faqs: [
      {
        question: "How many hours a week do I need?",
        answer:
          "We recommend dedicating 8–10 hours per week to most programs, with 10–12 hours per week for more intensive learning tracks.",
      },
      {
        question: "When do classes happen?",
        answer: "Batch timings are shared before each cohort starts. Please contact our team for the timings of the next batch.",
      },
      {
        question: "Will I get class recordings?",
        answer: "Yes. Recordings of the live classes are shared with you, so you can revisit any session or catch up if you miss one.",
      },
      {
        question: "What if I have doubts outside class?",
        answer:
          "Every course includes dedicated Q&A and doubt-clearing sessions beyond regular classes, and you can discuss problems with fellow learners in our community.",
      },
      {
        question: "Can I attend a free demo first?",
        answer:
          "Yes. Every program has a free demo every Saturday at 7:00 PM (IST). Bookings close on Monday night for that week's Saturday; if you book from Tuesday onward, your demo is on the following Saturday. After booking, message us on WhatsApp to get the meeting link.",
      },
    ],
  },
  {
    title: "Fees and payment",
    faqs: [
      {
        question: "How much do the programs cost?",
        answer:
          "Each program page shows the Program fee, the Early bird offer and the amount You pay.",
      },
      {
        question: "What payment options are available?",
        answer:
          "You can pay through UPI, and EMI options are also available. After you click Enroll now, our team shares the payment details with you on WhatsApp.",
      },
      {
        question: "How do I enroll?",
        answer:
          "Choose your program and track, then click Enroll now. Share your name, phone number and email, and continue on WhatsApp, where our team shares the payment details and the next steps.",
      },
    ],
  },
  {
    title: "Refunds and batch transfer",
    faqs: [
      {
        question: "What is your refund policy?",
        answer:
          "If you cancel within 7 days of your cohort's start date, you receive a pro-rata refund. Please read our Refund & Cancellation Policy for the full details.",
      },
      {
        question: "Can I move to a later batch?",
        answer: "Yes. You can transfer to a later batch once.",
      },
    ],
  },
  {
    title: "Career support",
    faqs: [
      {
        question: "Do you offer career support?",
        answer:
          "Yes. We guide you on your resume, LinkedIn profile and GitHub portfolio, and top-performing students get a chance of referrals to MNCs.",
      },
      {
        question: "Do you promise a job or placement?",
        answer:
          "We do not promise jobs, placements or salaries; outcomes depend on your skills, effort and the job market. We guide you throughout, and top-performing students may get referral opportunities at MNCs.",
      },
    ],
  },
];

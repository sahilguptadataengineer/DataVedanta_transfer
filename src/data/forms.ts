/*
  Wording for the demo and enquiry forms: labels, error messages and status messages.
  DRAFT - needs client approval.
*/

export const fieldLabels = {
  name: "Full name",
  phone: "Phone number",
  phoneHint: "10-digit mobile number",
  email: "Email",
  program: "Program",
  programPlaceholder: "Select a program",
  programNotSure: "Not sure yet",
  message: "Message (optional)",
  consentBefore: "I agree to the ",
  consentLink: { label: "Privacy Policy", href: "/privacy/" },
  consentAfter: " and to be contacted about my request.",
  // Hidden spam trap (people never see it).
  honeypot: "Leave this field empty",
};

export const fieldErrors = {
  name: "Please enter your full name (at least 2 letters).",
  phone: "Please enter a valid 10-digit Indian mobile number.",
  email: "Please enter a valid email address.",
  program: "Please choose a program.",
  message: "Please keep your message under 1000 characters.",
  consent: "Please agree to the Privacy Policy so we can contact you.",
};

export const formStatus = {
  sending: "Sending…",
  // Google can take 10-20 seconds to answer, especially the first time in a while.
  slow: "Still sending… this can take up to 30 seconds. Please don't close this page.",
  // No answer after 60 seconds. The request may still have reached the Sheet, so we must not invite a second submission.
  timeout:
    "This is taking longer than usual. Your request may already have reached us, so please don't send it again. Message us on WhatsApp to confirm.",
  error: "Sorry, something went wrong. Please try again, or reach us on WhatsApp.",
  notConfigured: "Online booking is being set up. Please reach us on WhatsApp, email or phone.",
  fixErrors: "Please fix the highlighted fields.",
};

export const demoForm = {
  title: "Book your free demo",
  dateLabel: "Your demo",
  time: "7:00 PM (IST)",
  // Shown while the date is being worked out in the browser.
  dateLoading: "Finding the next Saturday…",
  // Tuesday to Saturday: this week's demo is closed (Monday cut-off).
  closedMessage: (nextDay: string) => `Booking for this Saturday is closed. Book for next Saturday, ${nextDay}.`,
  submit: "Book free demo",
};

export const enquiryForm = {
  title: "Send an enquiry",
  submit: "Send enquiry",
};

// Optional field on the demo form (client point 10).
export const demoAboutField = {
  label: "College / company and current role (optional)",
  placeholder: "e.g. 3rd year, VIT · or · Analyst at TCS",
};

/*
  "Apply as a mentor" form (client point 3), on /mentor/. Saved to the "Mentor Applications" Sheet tab.
  The experience and teaching choices must match MENTOR_EXPERIENCE / MENTOR_TEACHING in apps-script/Code.gs.
*/
export const mentorForm = {
  title: "Mentor application",
  labels: {
    degree: "Highest degree",
    degreePlaceholder: "e.g. B.Tech Computer Science",
    position: "Current position",
    positionPlaceholder: "e.g. Senior Data Engineer",
    company: "Company (MNC / current employer)",
    experience: "Total years of experience",
    experienceNote: "Minimum 3 years of industry experience.",
    techStack: "Tech stack",
    techStackPlaceholder: "e.g. Python, PySpark, AWS, LangChain",
    courses: "Programs you can teach",
    teaching: "Teaching or mentoring experience",
    linkedin: "LinkedIn profile URL (optional)",
    linkedinPlaceholder: "https://www.linkedin.com/in/…",
    message: "Anything else you'd like to share? (optional)",
    choose: "Select",
  },
  experienceOptions: ["3–5 years", "5–10 years", "10–15 years", "15+ years"],
  teachingOptions: ["No formal teaching yet", "Less than 1 year", "1–3 years", "3+ years"],
  errors: {
    degree: "Please enter your highest degree.",
    position: "Please enter your current position.",
    company: "Please enter your company.",
    experience: "Please choose your experience.",
    techStack: "Please list your main tools and technologies.",
    courses: "Please choose at least one program.",
    teaching: "Please choose an option.",
    linkedin: "Please enter a full link starting with https://, or leave it empty.",
  },
  submit: "Submit application",
};

// "Talk to an expert" pop-up (client point 22). Shown once per visit after 1 minute on the site.
export const callbackPopup = {
  delaySeconds: 60,
  side: {
    title: "Find the right program for you",
    text: "Not sure where to start? Talk to our team and get a personalised recommendation for your goals.",
    points: ["Personalised program guidance", "Free demo every Saturday", "No commitment"],
  },
  title: "Talk to an expert today",
  phoneLabel: "Phone number",
  countryCode: "+91",
  submit: "Request a call back",
  close: "Close",
  success: "Thank you! Our team will call you soon.",
};

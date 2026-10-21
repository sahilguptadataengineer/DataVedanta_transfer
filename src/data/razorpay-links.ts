/*
  One Razorpay Payment Page link per program and tier (10 in total).
  Replace each PLACEHOLDER_ with the real LIVE link from the Razorpay dashboard (guide: docs/RAZORPAY_SETUP.md).
  While a link is a placeholder, Enroll uses manual enrollment instead (form, then WhatsApp; see below).
  No keys or secrets ever go in this file: these are public payment page links.
*/

import type { TrackId } from "./curriculum/types";

export const razorpayLinks: Record<TrackId, string> = {
  "genai-12": "PLACEHOLDER_RAZORPAY_GENAI_12",
  "aiml-12": "PLACEHOLDER_RAZORPAY_AIML_12",
  "aiml-24": "PLACEHOLDER_RAZORPAY_AIML_24",
  "ds-12": "PLACEHOLDER_RAZORPAY_DATA_SCIENCE_12",
  "ds-24": "PLACEHOLDER_RAZORPAY_DATA_SCIENCE_24",
  "de-12": "PLACEHOLDER_RAZORPAY_DATA_ENGINEERING_12",
  "de-24": "PLACEHOLDER_RAZORPAY_DATA_ENGINEERING_24",
  "pfs-12": "PLACEHOLDER_RAZORPAY_PYTHON_FULL_STACK_12",
  "pfs-24": "PLACEHOLDER_RAZORPAY_PYTHON_FULL_STACK_24",
  "py-8": "PLACEHOLDER_RAZORPAY_PYTHON_8",
};

/*
  Manual enrollment (client decision, 12 Oct 2026): while a tier's Razorpay link is a placeholder,
  Enroll opens a short form (name, phone, email) and then WhatsApp with a prefilled message.
  The team replies on WhatsApp with the payment details.
*/
export const manualEnrollment = {
  titlePrefix: "Enroll in",
  description: "Share your details and we will continue on WhatsApp to complete your enrollment and share the payment details.",
  submit: "Continue on WhatsApp",
  cancel: "Cancel",
  close: "Close",
  whatsappMessage: (p: { program: string; track: string; name: string; phone: string; email: string }) =>
    [
      `Hi DataVedanta, I want to enroll in the ${p.program} program (${p.track}).`,
      `Name: ${p.name}`,
      `Phone: ${p.phone}`,
      `Email: ${p.email}`,
      "Please share the payment details.",
    ].join("\n"),
};

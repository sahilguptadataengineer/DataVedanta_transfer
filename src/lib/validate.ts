/*
  Form checks shared by the demo and enquiry forms. The Apps Script repeats the same checks
  on its side, because anything coming from a browser can be faked.
*/

export const LIMITS = {
  name: 100,
  email: 120,
  message: 1000,
  program: 80,
  about: 150,
  degree: 100,
  position: 100,
  company: 100,
  techStack: 300,
  linkedin: 200,
} as const;

export type LeadFields = {
  name: string;
  phone: string;
  email: string;
  program: string;
  message?: string;
  consent: boolean;
};

export type FieldError = "name" | "phone" | "email" | "program" | "message" | "consent";

// Removes spaces, dashes, brackets and a leading +91 / 91 / 0: "+91 98765-43210" -> "9876543210".
export function normalisePhone(phone: string): string {
  const digits = phone.replace(/[\s\-()]/g, "");
  return digits.replace(/^(\+?91|0)(?=\d{10}$)/, "");
}

export function isValidPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(normalisePhone(phone));
}

export function isValidEmail(email: string): boolean {
  return email.length <= LIMITS.email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// Returns the list of fields that are wrong (empty list = all good).
export function validateLead(fields: LeadFields, allowedPrograms: string[]): FieldError[] {
  const errors: FieldError[] = [];
  const name = fields.name.trim();
  if (name.length < 2 || name.length > LIMITS.name) errors.push("name");
  if (!isValidPhone(fields.phone)) errors.push("phone");
  if (!isValidEmail(fields.email.trim())) errors.push("email");
  if (!allowedPrograms.includes(fields.program)) errors.push("program");
  if ((fields.message ?? "").length > LIMITS.message) errors.push("message");
  if (!fields.consent) errors.push("consent");
  return errors;
}

// Optional LinkedIn link: empty, or a full web address.
export function isValidOptionalLink(link: string): boolean {
  return link === "" || /^https?:\/\/\S+$/.test(link);
}

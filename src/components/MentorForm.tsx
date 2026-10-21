"use client";

/*
  Client component: "Apply as a mentor" form (client point 3) on /mentor/.
  Flow: check fields -> send to Apps Script ("Mentor Applications" tab) -> GA4 event -> /thank-you/?type=mentor.
  The Apps Script repeats every check on its side.
*/
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, type ReactNode, useRef, useState } from "react";
import { fieldErrors, fieldLabels, formStatus, mentorForm as copy } from "@/data/forms";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/submit";
import { isValidEmail, isValidOptionalLink, isValidPhone, LIMITS, normalisePhone } from "@/lib/validate";

type Field =
  | "name"
  | "phone"
  | "email"
  | "degree"
  | "position"
  | "company"
  | "experience"
  | "techStack"
  | "courses"
  | "teaching"
  | "linkedin"
  | "consent";
type Status = "idle" | "sending" | "slow" | "error" | "timeout" | "not-configured" | "invalid";

const inputBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-ink focus:border-petrol focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-coral-deep placeholder:text-muted/70";
const labelClass = "block text-sm font-semibold text-petrol";

const errorText: Record<Field, string> = {
  name: fieldErrors.name,
  phone: fieldErrors.phone,
  email: fieldErrors.email,
  consent: fieldErrors.consent,
  ...copy.errors,
};

export function MentorForm({ programs }: { programs: string[] }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Field[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const id = (field: string) => `mentor-${field}`;
  const has = (field: Field) => errors.includes(field);
  const input = (field: Field) => `${inputBase} ${has(field) ? "border-coral-deep" : "border-petrol/25"}`;
  const describedBy = (field: Field) => (has(field) ? id(`${field}-error`) : undefined);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "slow") return;
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const courses = data.getAll("courses").map(String).filter((c) => programs.includes(c));
    const fields = {
      name: value("name"),
      phone: value("phone"),
      email: value("email"),
      degree: value("degree"),
      position: value("position"),
      company: value("company"),
      experience: value("experience"),
      techStack: value("techStack"),
      teaching: value("teaching"),
      linkedin: value("linkedin"),
      message: value("message"),
    };

    const found: Field[] = [];
    if (fields.name.length < 2) found.push("name");
    if (!isValidPhone(fields.phone)) found.push("phone");
    if (!isValidEmail(fields.email)) found.push("email");
    if (fields.degree.length < 2) found.push("degree");
    if (fields.position.length < 2) found.push("position");
    if (fields.company.length < 2) found.push("company");
    if (!copy.experienceOptions.includes(fields.experience)) found.push("experience");
    if (fields.techStack.length < 2) found.push("techStack");
    if (courses.length === 0) found.push("courses");
    if (!copy.teachingOptions.includes(fields.teaching)) found.push("teaching");
    if (!isValidOptionalLink(fields.linkedin)) found.push("linkedin");
    if (data.get("consent") !== "on") found.push("consent");
    setErrors(found);
    if (found.length > 0) {
      setStatus("invalid");
      formRef.current?.querySelector<HTMLElement>(`[name="${found[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    const slowTimer = window.setTimeout(() => setStatus((s) => (s === "sending" ? "slow" : s)), 5000);
    const result = await submitLead({
      type: "mentor",
      name: fields.name.slice(0, LIMITS.name),
      phone: normalisePhone(fields.phone),
      email: fields.email,
      degree: fields.degree.slice(0, LIMITS.degree),
      position: fields.position.slice(0, LIMITS.position),
      company: fields.company.slice(0, LIMITS.company),
      experience: fields.experience,
      techStack: fields.techStack.slice(0, LIMITS.techStack),
      courses: courses.join(", "),
      teaching: fields.teaching,
      linkedin: fields.linkedin.slice(0, LIMITS.linkedin),
      message: fields.message.slice(0, LIMITS.message),
      sourcePage: window.location.pathname,
      website: value("hp_check"),
    });
    window.clearTimeout(slowTimer);
    if (result !== "ok") {
      setStatus(result);
      return;
    }
    trackEvent("mentor_submit", { company: fields.company });
    router.push("/thank-you/?type=mentor");
  }

  const statusText: Record<Status, string> = {
    idle: "",
    sending: formStatus.sending,
    slow: formStatus.slow,
    error: formStatus.error,
    timeout: formStatus.timeout,
    "not-configured": formStatus.notConfigured,
    invalid: formStatus.fixErrors,
  };
  const busy = status === "sending" || status === "slow";

  // One labelled text input with its error message.
  const text = (field: Field, label: string, opts: { type?: string; placeholder?: string; max?: number; auto?: string; note?: ReactNode } = {}) => (
    <div>
      <label htmlFor={id(field)} className={labelClass}>
        {label}
      </label>
      <input
        id={id(field)}
        name={field}
        type={opts.type ?? "text"}
        maxLength={opts.max}
        autoComplete={opts.auto}
        placeholder={opts.placeholder}
        aria-invalid={has(field)}
        aria-describedby={describedBy(field)}
        className={input(field)}
      />
      {has(field) && <Message id={id(`${field}-error`)} text={errorText[field]} />}
    </div>
  );

  const select = (field: Field, label: string, options: string[], note?: string) => (
    <div>
      <label htmlFor={id(field)} className={labelClass}>
        {label}
      </label>
      <select id={id(field)} name={field} defaultValue="" aria-invalid={has(field)} aria-describedby={describedBy(field)} className={input(field)}>
        <option value="" disabled>
          {copy.labels.choose}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {note && <p className="mt-1.5 text-sm text-muted">{note}</p>}
      {has(field) && <Message id={id(`${field}-error`)} text={errorText[field]} />}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <h2 className="font-serif text-2xl text-petrol">{copy.title}</h2>

      {text("name", fieldLabels.name, { max: LIMITS.name, auto: "name" })}
      <div className="grid gap-5 sm:grid-cols-2">
        {text("phone", fieldLabels.phone, { type: "tel", max: 16, auto: "tel", placeholder: fieldLabels.phoneHint })}
        {text("email", fieldLabels.email, { type: "email", max: LIMITS.email, auto: "email" })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {text("degree", copy.labels.degree, { max: LIMITS.degree, placeholder: copy.labels.degreePlaceholder })}
        {text("position", copy.labels.position, { max: LIMITS.position, auto: "organization-title", placeholder: copy.labels.positionPlaceholder })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {text("company", copy.labels.company, { max: LIMITS.company, auto: "organization" })}
        {select("experience", copy.labels.experience, copy.experienceOptions, copy.labels.experienceNote)}
      </div>
      {text("techStack", copy.labels.techStack, { max: LIMITS.techStack, placeholder: copy.labels.techStackPlaceholder })}

      <fieldset aria-describedby={describedBy("courses")}>
        <legend className={labelClass}>{copy.labels.courses}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {programs.map((program, i) => (
            <label key={program} className="flex items-center gap-3 rounded-xl border border-petrol/15 px-3 py-2.5 text-sm text-ink has-checked:border-petrol">
              <input type="checkbox" name="courses" value={program} id={i === 0 ? id("courses") : undefined} className="size-4 accent-petrol" />
              {program}
            </label>
          ))}
        </div>
        {has("courses") && <Message id={id("courses-error")} text={errorText.courses} />}
      </fieldset>

      {select("teaching", copy.labels.teaching, copy.teachingOptions)}
      {text("linkedin", copy.labels.linkedin, { type: "url", max: LIMITS.linkedin, placeholder: copy.labels.linkedinPlaceholder })}

      <div>
        <label htmlFor={id("message")} className={labelClass}>
          {copy.labels.message}
        </label>
        <textarea id={id("message")} name="message" rows={3} maxLength={LIMITS.message} className={`${inputBase} border-petrol/25`} />
      </div>

      {/* Honeypot: hidden from people, filled in by spam bots. The Apps Script drops submissions that fill it. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={id("hp")}>{fieldLabels.honeypot}</label>
        <input id={id("hp")} name="hp_check" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={id("consent")}
            name="consent"
            type="checkbox"
            aria-invalid={has("consent")}
            aria-describedby={describedBy("consent")}
            className="mt-1 size-5 shrink-0 accent-petrol"
          />
          <label htmlFor={id("consent")} className="text-sm leading-relaxed text-muted">
            {fieldLabels.consentBefore}
            <Link href={fieldLabels.consentLink.href} target="_blank" rel="noopener noreferrer" className="font-medium text-coral-deep underline underline-offset-2">
              {fieldLabels.consentLink.label}
            </Link>
            {fieldLabels.consentAfter}
          </label>
        </div>
        {has("consent") && <Message id={id("consent-error")} text={errorText.consent} />}
      </div>

      <button
        type="submit"
        disabled={busy || status === "timeout"}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-coral px-7 py-3.5 font-semibold text-petrol transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {busy ? formStatus.sending : copy.submit}
      </button>
      <p role="status" aria-live="polite" className={`text-sm ${["invalid", "error", "timeout"].includes(status) ? "text-coral-deep" : "text-petrol"}`}>
        {statusText[status]}
      </p>
    </form>
  );
}

function Message({ id, text }: { id: string; text: string }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-coral-deep">
      {text}
    </p>
  );
}

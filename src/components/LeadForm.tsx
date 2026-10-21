"use client";

/*
  Client component: the demo booking form and the enquiry form (same fields, checks and sending logic).
  Flow: check fields -> send to Apps Script (src/lib/submit.ts) -> GA4 event -> /thank-you/.
*/
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useRef, useState } from "react";
import { demoAboutField, demoForm, enquiryForm, fieldErrors, fieldLabels, formStatus } from "@/data/forms";
import { trackEvent } from "@/lib/analytics";
import { formatDemoDate, formatDemoDay } from "@/lib/demo-date";
import { submitLead } from "@/lib/submit";
import { useDemoSlot } from "@/lib/use-demo-slot";
import { type FieldError, LIMITS, normalisePhone, validateLead } from "@/lib/validate";

type Program = { slug: string; name: string };
type Props = { type: "demo" | "enquiry"; programs: Program[]; idPrefix: string };
type Status = "idle" | "sending" | "slow" | "error" | "timeout" | "not-configured" | "invalid";

const inputBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-ink focus:border-petrol focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-coral-deep";
const labelClass = "block text-sm font-semibold text-petrol";

export function LeadForm({ type, programs, idPrefix }: Props) {
  const router = useRouter();
  const slot = useDemoSlot();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldError[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const isDemo = type === "demo";
  const copy = isDemo ? demoForm : enquiryForm;
  const programNames = programs.map((p) => p.name);
  const allowed = isDemo ? programNames : [...programNames, fieldLabels.programNotSure];
  const id = (field: string) => `${idPrefix}-${field}`;
  const hasError = (field: FieldError) => errors.includes(field);
  const input = (field: FieldError) => `${inputBase} ${hasError(field) ? "border-coral-deep" : "border-petrol/25"}`;
  const describedBy = (field: FieldError) => (hasError(field) ? id(`${field}-error`) : undefined);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "slow") return; // no double submit

    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "");
    const fields = {
      name: value("name").trim(),
      phone: value("phone"),
      email: value("email").trim(),
      program: value("program"),
      message: isDemo ? "" : value("message").trim(),
      consent: data.get("consent") === "on",
    };

    const found = validateLead(fields, allowed);
    setErrors(found);
    if (found.length > 0) {
      setStatus("invalid");
      // Move keyboard focus to the first wrong field.
      formRef.current?.querySelector<HTMLElement>(`[name="${found[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    // After 5 seconds, reassure the visitor that it is still working.
    const slowTimer = window.setTimeout(() => setStatus((s) => (s === "sending" ? "slow" : s)), 5000);
    const result = await submitLead({
      type,
      name: fields.name.slice(0, LIMITS.name),
      phone: normalisePhone(fields.phone),
      email: fields.email,
      program: fields.program,
      message: fields.message.slice(0, LIMITS.message),
      about: isDemo ? value("about").trim().slice(0, LIMITS.about) : undefined,
      sourcePage: window.location.pathname,
      website: value("hp_check"),
      clientDemoDate: isDemo ? slot?.isoDate : undefined,
    });

    window.clearTimeout(slowTimer);
    if (result !== "ok") {
      setStatus(result);
      return;
    }
    trackEvent(isDemo ? "demo_submit" : "enquiry_submit", { program: fields.program });
    const slug = programs.find((p) => p.name === fields.program)?.slug;
    router.push(isDemo ? `/thank-you/?type=demo&program=${slug}` : "/thank-you/?type=enquiry");
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
  // After a timeout the request may have been saved: keep the button disabled to avoid a duplicate.
  const locked = busy || status === "timeout";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <h2 className="font-serif text-2xl text-petrol">{copy.title}</h2>

      {isDemo && (
        <div className="rounded-xl border border-petrol/15 px-4 py-3" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{demoForm.dateLabel}</p>
          {slot ? (
            <>
              <p className="mt-1 font-semibold text-petrol">
                {formatDemoDate(slot)} · {demoForm.time}
              </p>
              {slot.thisWeekClosed && <p className="mt-1 text-sm text-coral-deep">{demoForm.closedMessage(formatDemoDay(slot))}</p>}
            </>
          ) : (
            <p className="mt-1 text-muted">{demoForm.dateLoading}</p>
          )}
        </div>
      )}

      <div>
        <label htmlFor={id("name")} className={labelClass}>
          {fieldLabels.name}
        </label>
        <input
          id={id("name")}
          name="name"
          type="text"
          maxLength={LIMITS.name}
          autoComplete="name"
          aria-invalid={hasError("name")}
          aria-describedby={describedBy("name")}
          className={input("name")}
        />
        {hasError("name") && <FieldMessage id={id("name-error")} text={fieldErrors.name} />}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("phone")} className={labelClass}>
            {fieldLabels.phone}
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            maxLength={16}
            autoComplete="tel"
            placeholder={fieldLabels.phoneHint}
            aria-invalid={hasError("phone")}
            aria-describedby={describedBy("phone")}
            className={`${input("phone")} placeholder:text-muted/70`}
          />
          {hasError("phone") && <FieldMessage id={id("phone-error")} text={fieldErrors.phone} />}
        </div>
        <div>
          <label htmlFor={id("email")} className={labelClass}>
            {fieldLabels.email}
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            maxLength={LIMITS.email}
            autoComplete="email"
            aria-invalid={hasError("email")}
            aria-describedby={describedBy("email")}
            className={input("email")}
          />
          {hasError("email") && <FieldMessage id={id("email-error")} text={fieldErrors.email} />}
        </div>
      </div>

      <div>
        <label htmlFor={id("program")} className={labelClass}>
          {fieldLabels.program}
        </label>
        <select
          id={id("program")}
          name="program"
          defaultValue=""
          aria-invalid={hasError("program")}
          aria-describedby={describedBy("program")}
          className={input("program")}
        >
          <option value="" disabled>
            {fieldLabels.programPlaceholder}
          </option>
          {allowed.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        {hasError("program") && <FieldMessage id={id("program-error")} text={fieldErrors.program} />}
      </div>

      {isDemo && (
        <div>
          <label htmlFor={id("about")} className={labelClass}>
            {demoAboutField.label}
          </label>
          <input
            id={id("about")}
            name="about"
            type="text"
            maxLength={LIMITS.about}
            autoComplete="organization-title"
            placeholder={demoAboutField.placeholder}
            className={`${inputBase} border-petrol/25 placeholder:text-muted/70`}
          />
        </div>
      )}

      {!isDemo && (
        <div>
          <label htmlFor={id("message")} className={labelClass}>
            {fieldLabels.message}
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={4}
            maxLength={LIMITS.message}
            aria-invalid={hasError("message")}
            aria-describedby={describedBy("message")}
            className={input("message")}
          />
          {hasError("message") && <FieldMessage id={id("message-error")} text={fieldErrors.message} />}
        </div>
      )}

      {/* Honeypot: hidden from people, filled in by spam bots. The Apps Script drops submissions that fill it.
          display:none + a name with no autofill meaning, so browser autofill never fills it (it did as "website"). */}
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
            aria-invalid={hasError("consent")}
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
        {hasError("consent") && <FieldMessage id={id("consent-error")} text={fieldErrors.consent} />}
      </div>

      <button
        type="submit"
        disabled={locked}
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

function FieldMessage({ id, text }: { id: string; text: string }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-coral-deep">
      {text}
    </p>
  );
}

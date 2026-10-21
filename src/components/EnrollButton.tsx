"use client";

/*
  Client component: the Enroll button.
  - Real Razorpay link: opens the Razorpay Payment Page in a new tab.
  - Otherwise (manual payment for now): opens a pop-up form (name, phone, email, consent), then WhatsApp
    with a prefilled message, so the team can reply with the payment details.
  The details are also saved to the Google Sheet ("Enrollments" tab) in the background; WhatsApp never waits for it.
  Both record the GA4 "enroll_click" event.
*/
import Link from "next/link";
import { type FormEvent, useId, useRef, useState } from "react";
import type { TrackId } from "@/data/curriculum/types";
import { fieldErrors, fieldLabels } from "@/data/forms";
import { manualEnrollment as copy } from "@/data/razorpay-links";
import { trackEvent } from "@/lib/analytics";
import { enrollmentWhatsAppUrl, enrollTarget } from "@/lib/enroll";
import { submitLead } from "@/lib/submit";
import { isValidEmail, isValidPhone, LIMITS, normalisePhone } from "@/lib/validate";
import { Button, buttonClasses } from "./Button";
import { CloseIcon } from "./icons";

type Props = {
  // Omit for options without their own payment link (the Advanced 3 months add-on): always manual enrollment.
  track?: TrackId;
  // Shown in the form title and the WhatsApp message, e.g. "Data Science" and "24 weeks (6 months)".
  programName: string;
  trackLabel: string;
  label: string;
  size?: "md" | "lg";
  className?: string;
};

type Field = "name" | "phone" | "email" | "consent";

const inputBase =
  "mt-1.5 block w-full rounded-xl border bg-white px-4 py-2.5 text-ink focus:border-petrol focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-coral-deep";

export function EnrollButton({ track, programName, trackLabel, label, size = "lg", className = "" }: Props) {
  const target = track ? enrollTarget(track) : ({ kind: "whatsapp" } as const);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Field[]>([]);
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;

  if (target.kind === "razorpay") {
    return (
      <span
        className="contents"
        onClickCapture={() => trackEvent("enroll_click", { program: programName, track: track ?? trackLabel, destination: "razorpay" })}
      >
        <Button href={target.href} external size={size} className={className}>
          {label}
        </Button>
      </span>
    );
  }

  function close() {
    dialogRef.current?.close();
    formRef.current?.reset();
    setErrors([]);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const details = { name: value("name"), phone: value("phone"), email: value("email") };

    const found: Field[] = [];
    if (details.name.length < 2) found.push("name");
    if (!isValidPhone(details.phone)) found.push("phone");
    if (!isValidEmail(details.email)) found.push("email");
    if (data.get("consent") !== "on") found.push("consent");
    setErrors(found);
    if (found.length > 0) {
      formRef.current?.querySelector<HTMLElement>(`[name="${found[0]}"]`)?.focus();
      return;
    }

    const lead = {
      program: programName,
      track: trackLabel,
      name: details.name.slice(0, LIMITS.name),
      phone: normalisePhone(details.phone),
      email: details.email,
    };
    trackEvent("enroll_click", { program: programName, track: track ?? trackLabel, destination: "whatsapp" });
    // Open WhatsApp first, inside the click, so the browser does not block it.
    const url = enrollmentWhatsAppUrl(lead);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
    // Then save a copy to the Google Sheet in the background (ignored if the Apps Script URL is not set).
    void submitLead(
      { type: "enrollment", ...lead, sourcePage: window.location.pathname, website: String(data.get("hp_check") ?? "") },
      undefined,
      60_000,
      { keepalive: true },
    );
    close();
  }

  const hasError = (field: Field) => errors.includes(field);
  const input = (field: Field) => `${inputBase} ${hasError(field) ? "border-coral-deep" : "border-petrol/25"}`;
  const error = (field: Exclude<Field, "consent"> | "consent") =>
    hasError(field) ? (
      <p id={id(`${field}-error`)} className="mt-1 text-sm text-coral-deep">
        {fieldErrors[field]}
      </p>
    ) : null;

  return (
    <>
      <button type="button" onClick={() => dialogRef.current?.showModal()} className={buttonClasses("primary", size, className)}>
        {label}
      </button>

      {/* Native <dialog>: keeps keyboard focus inside while open and closes with Esc. */}
      <dialog
        ref={dialogRef}
        aria-labelledby={id("title")}
        onClose={() => setErrors([])}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-card border border-petrol/15 bg-white p-0 text-left shadow-card backdrop:bg-petrol/60"
      >
        <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id={id("title")} className="font-serif text-2xl leading-snug text-petrol">
              {copy.titlePrefix} {programName}
              <span className="mt-1 block font-sans text-sm font-semibold text-coral-deep">{trackLabel}</span>
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label={copy.close}
              className="-mt-1 -mr-2 inline-flex size-10 shrink-0 items-center justify-center rounded-full text-petrol hover:bg-petrol/5"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>
          <p className="text-sm leading-relaxed text-muted">{copy.description}</p>

          <div>
            <label htmlFor={id("name")} className="block text-sm font-semibold text-petrol">
              {fieldLabels.name}
            </label>
            <input
              id={id("name")}
              name="name"
              type="text"
              autoComplete="name"
              maxLength={LIMITS.name}
              aria-invalid={hasError("name")}
              aria-describedby={hasError("name") ? id("name-error") : undefined}
              className={input("name")}
            />
            {error("name")}
          </div>
          <div>
            <label htmlFor={id("phone")} className="block text-sm font-semibold text-petrol">
              {fieldLabels.phone}
            </label>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={16}
              placeholder={fieldLabels.phoneHint}
              aria-invalid={hasError("phone")}
              aria-describedby={hasError("phone") ? id("phone-error") : undefined}
              className={`${input("phone")} placeholder:text-muted/70`}
            />
            {error("phone")}
          </div>
          <div>
            <label htmlFor={id("email")} className="block text-sm font-semibold text-petrol">
              {fieldLabels.email}
            </label>
            <input
              id={id("email")}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={LIMITS.email}
              aria-invalid={hasError("email")}
              aria-describedby={hasError("email") ? id("email-error") : undefined}
              className={input("email")}
            />
            {error("email")}
          </div>
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
                aria-describedby={hasError("consent") ? id("consent-error") : undefined}
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
            {error("consent")}
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button type="button" onClick={close} className={buttonClasses("outline", "md")}>
              {copy.cancel}
            </button>
            <button type="submit" className={buttonClasses("primary", "md")}>
              {copy.submit}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

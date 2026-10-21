"use client";

/*
  Client component: "Download brochure" with lead capture (21 Oct 2026).
  First click: a short form (name, phone, email, consent). On submit the brochure downloads at once and the details
  are saved to the Google Sheet ("Brochure Downloads" tab) in the background; the download never waits for Google.
  The browser remembers the details (localStorage), so later downloads skip the form but are still recorded.
  Records the GA4 event "brochure_download".
*/
import Link from "next/link";
import { type FormEvent, useId, useRef, useState } from "react";
import { fieldErrors, fieldLabels } from "@/data/forms";
import { programDetailsPage } from "@/data/pages";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/submit";
import { isValidEmail, isValidPhone, LIMITS, normalisePhone } from "@/lib/validate";
import { buttonClasses } from "./Button";
import { CloseIcon, DownloadIcon } from "./icons";

const copy = programDetailsPage.brochureForm;
const STORAGE_KEY = "dv-brochure-lead";

type Lead = { name: string; phone: string; email: string };
type Field = "name" | "phone" | "email" | "consent";

type Props = {
  programName: string;
  // PDF path in public/brochures/.
  href: string;
  label: string;
  variant: "outline" | "outline-light";
  className?: string;
};

const inputBase =
  "mt-1.5 block w-full rounded-xl border bg-white px-4 py-2.5 text-ink focus:border-petrol focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-coral-deep";

function savedLead(): Lead | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const lead = raw ? (JSON.parse(raw) as Lead) : null;
    return lead && lead.name && isValidPhone(lead.phone) && isValidEmail(lead.email) ? lead : null;
  } catch {
    return null;
  }
}

function rememberLead(lead: Lead) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
  } catch {
    // Private mode or storage blocked: the form simply shows again next time.
  }
}

// Starts the PDF download (same as clicking a normal download link).
function startDownload(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = href.split("/").pop() ?? "brochure.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function BrochureButton({ programName, href, label, variant, className = "" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Field[]>([]);
  const [started, setStarted] = useState(false);
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;

  function record(lead: Lead, website = "") {
    trackEvent("brochure_download", { program: programName });
    void submitLead(
      { type: "brochure", ...lead, program: programName, sourcePage: window.location.pathname, website },
      undefined,
      60_000,
      { keepalive: true },
    );
  }

  function onClick() {
    const lead = savedLead();
    if (lead) {
      startDownload(href);
      record(lead);
      setStarted(true);
      return;
    }
    dialogRef.current?.showModal();
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
    const found: Field[] = [];
    if (value("name").length < 2) found.push("name");
    if (!isValidPhone(value("phone"))) found.push("phone");
    if (!isValidEmail(value("email"))) found.push("email");
    if (data.get("consent") !== "on") found.push("consent");
    setErrors(found);
    if (found.length > 0) {
      formRef.current?.querySelector<HTMLElement>(`[name="${found[0]}"]`)?.focus();
      return;
    }
    const lead = { name: value("name").slice(0, LIMITS.name), phone: normalisePhone(value("phone")), email: value("email") };
    // Download first, inside the click, so the browser allows it.
    startDownload(href);
    rememberLead(lead);
    record(lead, value("hp_check"));
    setStarted(true);
    close();
  }

  const hasError = (field: Field) => errors.includes(field);
  const input = (field: Field) => `${inputBase} ${hasError(field) ? "border-coral-deep" : "border-petrol/25"}`;
  const error = (field: Field) =>
    hasError(field) ? (
      <p id={id(`${field}-error`)} className="mt-1 text-sm text-coral-deep">
        {fieldErrors[field]}
      </p>
    ) : null;

  return (
    <>
      <button type="button" onClick={onClick} className={buttonClasses(variant, "lg", className)}>
        <DownloadIcon />
        {label}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {started ? copy.started : ""}
      </span>

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
              {copy.titlePrefix} {programName} {copy.titleSuffix}
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
                aria-invalid={hasError("consent")}
                aria-describedby={hasError("consent") ? id("consent-error") : undefined}
                className="mt-1 size-5 shrink-0 accent-petrol"
              />
              <label htmlFor={id("consent")} className="text-sm leading-relaxed text-muted">
                {fieldLabels.consentBefore}
                <Link
                  href={fieldLabels.consentLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-coral-deep underline underline-offset-2"
                >
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
              <DownloadIcon />
              {copy.submit}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

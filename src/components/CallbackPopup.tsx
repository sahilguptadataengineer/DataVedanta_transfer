"use client";

/*
  Client component: "Talk to an expert" pop-up (client point 22).
  Opens once per visit after the visitor has spent `delaySeconds` on the site (time adds up across pages),
  never on the thank-you or mentor pages, and never on top of another open pop-up. Easy to close (X, Esc).
  Saves only the phone number to the "Callback Requests" Sheet tab.
  sessionStorage remembers the visit; if the browser blocks it, the pop-up simply shows on each page load at most once.
*/
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { callbackPopup as copy, fieldErrors, fieldLabels, formStatus } from "@/data/forms";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/submit";
import { isValidPhone, normalisePhone } from "@/lib/validate";
import { CheckIcon, CloseIcon } from "./icons";

const STARTED = "dv-visit-started";
const DONE = "dv-callback-done";
const skipPaths = ["/thank-you", "/mentor"];

function storage(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

type Status = "idle" | "invalid" | "consent" | "sending" | "done" | "error";

export function CallbackPopup() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (skipPaths.some((p) => pathname.startsWith(p))) return;
    const store = storage();
    if (store?.getItem(DONE)) return;

    const started = Number(store?.getItem(STARTED)) || Date.now();
    store?.setItem(STARTED, String(started));
    const wait = Math.max(0, started + copy.delaySeconds * 1000 - Date.now());

    let timer = window.setTimeout(function open() {
      // Another pop-up (for example Enroll) is open: try again a little later.
      if (document.querySelector("dialog[open]")) {
        timer = window.setTimeout(open, 10_000);
        return;
      }
      store?.setItem(DONE, "1");
      dialogRef.current?.showModal();
    }, wait);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  function close() {
    dialogRef.current?.close();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    const phone = String(data.get("phone") ?? "");
    if (!isValidPhone(phone)) return setStatus("invalid");
    if (data.get("consent") !== "on") return setStatus("consent");

    setStatus("sending");
    const result = await submitLead({
      type: "callback",
      phone: normalisePhone(phone),
      sourcePage: window.location.pathname,
      website: String(data.get("hp_check") ?? ""),
    });
    if (result !== "ok" && result !== "timeout") return setStatus("error");
    trackEvent("callback_submit", { page: window.location.pathname });
    setStatus("done");
    window.setTimeout(close, 3000);
  }

  const message: Record<Status, string> = {
    idle: "",
    invalid: fieldErrors.phone,
    consent: fieldErrors.consent,
    sending: formStatus.sending,
    done: copy.success,
    error: formStatus.error,
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="callback-title"
      className="m-auto w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-card border-0 bg-white p-0 text-left shadow-card backdrop:bg-petrol/60"
    >
      <div className="grid md:grid-cols-2">
        <div className="bg-grid hidden bg-navy p-8 text-white md:block">
          <p className="font-serif text-3xl leading-tight font-semibold">{copy.side.title}</p>
          <p className="mt-4 leading-relaxed text-white/80">{copy.side.text}</p>
          <ul className="mt-6 space-y-3">
            {copy.side.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-coral text-petrol">
                  <CheckIcon className="size-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            aria-label={copy.close}
            className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full text-petrol hover:bg-petrol/5"
          >
            <CloseIcon className="size-5" />
          </button>
          <h2 id="callback-title" className="pr-10 font-serif text-2xl text-petrol">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm text-muted md:hidden">{copy.side.text}</p>

          <label htmlFor="callback-phone" className="mt-6 block text-sm font-semibold text-petrol">
            {copy.phoneLabel}
          </label>
          <div
            className={`mt-2 flex items-center rounded-xl border bg-white focus-within:border-petrol ${status === "invalid" ? "border-coral-deep" : "border-petrol/25"}`}
          >
            <span className="border-r border-petrol/15 px-3 py-3 text-sm font-semibold text-petrol">{copy.countryCode}</span>
            <input
              id="callback-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              maxLength={16}
              placeholder={fieldLabels.phoneHint}
              aria-invalid={status === "invalid"}
              className="min-w-0 flex-1 rounded-r-xl px-3 py-3 text-ink placeholder:text-muted/70 focus:outline-none"
            />
          </div>

          <div aria-hidden="true" className="hidden">
            <input name="hp_check" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted">
            <input name="consent" type="checkbox" aria-invalid={status === "consent"} className="mt-1 size-5 shrink-0 accent-petrol" />
            <span>
              {fieldLabels.consentBefore}
              <Link href={fieldLabels.consentLink.href} target="_blank" rel="noopener noreferrer" className="font-medium text-coral-deep underline underline-offset-2">
                {fieldLabels.consentLink.label}
              </Link>
              {fieldLabels.consentAfter}
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "sending" || status === "done"}
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-coral px-6 py-3 font-semibold text-petrol transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? formStatus.sending : copy.submit}
          </button>
          <p role="status" aria-live="polite" className={`mt-3 min-h-5 text-sm ${status === "done" ? "font-semibold text-emerald" : "text-coral-deep"}`}>
            {message[status]}
          </p>
        </form>
      </div>
    </dialog>
  );
}

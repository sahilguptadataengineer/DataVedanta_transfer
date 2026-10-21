/*
  Sends a form (demo booking, enquiry, enrollment, mentor application or call back request) to the Google Apps Script
  web app, which appends a row to the Sheet.
  - The URL comes from NEXT_PUBLIC_APPS_SCRIPT_URL (.env.local locally, Vercel settings in production).
    It is public by design: the script only appends rows and never returns data.
  - Sent as text/plain so the browser makes a "simple" request with no CORS preflight
    (Apps Script cannot answer preflight requests).
*/

export type LeadPayload = {
  type: "demo" | "enquiry" | "enrollment" | "mentor" | "callback" | "brochure";
  // Not sent by the call back pop-up (phone number only).
  name?: string;
  phone: string;
  email?: string;
  program?: string;
  message?: string;
  // Enrollment requests only: "12 weeks", "24 weeks", "8 weeks" or "Advanced 3 months".
  track?: string;
  // Demo form only (optional): college / company and current role.
  about?: string;
  // Mentor applications only.
  degree?: string;
  position?: string;
  company?: string;
  experience?: string;
  techStack?: string;
  courses?: string;
  teaching?: string;
  linkedin?: string;
  sourcePage: string;
  // Honeypot value: empty for people, filled by bots.
  website: string;
  // For reference only: the Apps Script ignores it and computes the date itself.
  clientDemoDate?: string;
};

export type SubmitResult = "ok" | "error" | "not-configured" | "timeout";

export async function submitLead(
  payload: LeadPayload,
  url: string | undefined = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL,
  timeoutMs = 60_000,
  // keepalive lets the request finish even if the visitor leaves the page (e.g. switches to WhatsApp).
  options: { keepalive?: boolean } = {},
): Promise<SubmitResult> {
  if (!url) return "not-configured";
  // Stop waiting after timeoutMs, so the visitor is never left on "Sending…" forever.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      keepalive: options.keepalive ?? false,
      signal: controller.signal,
    });
    if (!response.ok) return "error";
    const data: unknown = await response.json();
    return typeof data === "object" && data !== null && (data as { ok?: unknown }).ok === true ? "ok" : "error";
  } catch (error) {
    if (controller.signal.aborted) return "timeout";
    // Shows up in the browser console (F12) to help diagnose network or browser-extension problems.
    console.error("Form submit failed:", error);
    return "error";
  } finally {
    clearTimeout(timer);
  }
}

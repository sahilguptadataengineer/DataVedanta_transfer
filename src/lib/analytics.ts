/*
  GA4 events: demo_submit, enquiry_submit, enroll_click, mentor_submit, callback_submit and brochure_download.
  If GA4 is not loaded (no ID set, or a visitor blocks it) these calls do nothing.
*/

export type AnalyticsEvent =
  | "demo_submit"
  | "enquiry_submit"
  | "enroll_click"
  | "mentor_submit"
  | "callback_submit"
  | "brochure_download";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEvent, params: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

/*
  Which Saturday's free demo can a visitor book right now?
  Rules (client change request 01, point 9, 18 Oct 2026), all in India time (IST = UTC+5:30, no daylight saving):
    Mon                          -> this week's Saturday          ("This week")
    Tue, Wed, Thu, Fri, Sat, Sun -> the following week's Saturday ("Next week")
  Booking for a Saturday closes at Tuesday 00:00 IST. (Sunday is the last day of the week, so on Sunday
  the "following week's Saturday" is the coming one, 6 days away.)
  Always called in the browser after the page loads (never at build time), and the Apps Script
  re-computes the same thing from its own clock (apps-script/Code.gs, computeDemoSlot).
*/

import { demo } from "@/data/demo-links";

const IST_OFFSET_MS = (5 * 60 + 30) * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export type DemoWeek = "This week" | "Next week";

export type DemoSlot = {
  // The demo start as a real moment in time (Saturday 7:00 PM IST).
  start: Date;
  // Calendar date of the Saturday in IST, "YYYY-MM-DD" (what the Sheet stores).
  isoDate: string;
  week: DemoWeek;
  // True from Tuesday to Saturday: this week's Saturday is closed, so we offer next week's.
  thisWeekClosed: boolean;
};

export function getDemoSlot(now: Date): DemoSlot {
  // Shift to IST and read the calendar fields with UTC getters.
  const ist = new Date(now.getTime() + IST_OFFSET_MS);
  const mondayBased = (ist.getUTCDay() + 6) % 7; // Mon = 0 ... Sun = 6
  const nextWeek = mondayBased >= 1; // Tue to Sun
  const daysToSaturday = 5 - mondayBased + (nextWeek ? 7 : 0);

  const saturday = new Date(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()) + daysToSaturday * DAY_MS);
  const y = saturday.getUTCFullYear();
  const m = saturday.getUTCMonth();
  const d = saturday.getUTCDate();
  // 7:00 PM IST = 13:30 UTC.
  const start = new Date(Date.UTC(y, m, d, demo.hour, demo.minute) - IST_OFFSET_MS);

  return {
    start,
    isoDate: `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    week: nextWeek ? "Next week" : "This week",
    thisWeekClosed: mondayBased >= 1 && mondayBased <= 5,
  };
}

// "Saturday, 10 October 2026" in IST, whatever the visitor's own time zone.
export function formatDemoDate(slot: DemoSlot): string {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: demo.timeZone,
  }).format(slot.start);
}

// "10 October" (short form for messages).
export function formatDemoDay(slot: DemoSlot): string {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", timeZone: demo.timeZone }).format(slot.start);
}

// "Sat, 24 Oct" (compact form for program cards).
export function formatDemoShort(slot: DemoSlot): string {
  return new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short", timeZone: demo.timeZone }).format(slot.start);
}

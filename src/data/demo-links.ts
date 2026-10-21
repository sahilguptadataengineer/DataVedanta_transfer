/*
  Free demo: one per program, always Saturday 7:00 PM (IST).
  There are no meeting links on the website (decided 7 Oct 2026): after booking, students message us on
  WhatsApp to get the meeting link. The date logic lives in src/lib/demo-date.ts.
*/

export const demo = {
  timeZone: "Asia/Kolkata",
  // 0 = Sunday ... 6 = Saturday.
  weekday: 6,
  hour: 19,
  minute: 0,
  timeLabel: "7:00 PM (IST)",
  scheduleLabel: "Free demo every Saturday, 7:00 PM (IST)",
  // Prefilled WhatsApp message from the thank-you page.
  whatsappMessage: (program: string, date: string) =>
    `Hi DataVedanta, I have booked the free ${program} demo on ${date} at 7:00 PM (IST). Please share the meeting link.`,
} as const;

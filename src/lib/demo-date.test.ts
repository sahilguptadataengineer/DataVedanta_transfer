import { describe, expect, it } from "vitest";
import { formatDemoDate, formatDemoShort, getDemoSlot } from "./demo-date";

// Helper: a moment written in India time, e.g. ist("2026-10-07T23:59").
const ist = (local: string) => new Date(`${local}:00+05:30`);

describe("getDemoSlot", () => {
  it.each([
    // Week of Mon 5 – Sun 11 October 2026. Monday is the cut-off (client point 9).
    ["Mon 5 Oct", "2026-10-05T10:00", "2026-10-10", "This week", false],
    ["Tue 6 Oct", "2026-10-06T10:00", "2026-10-17", "Next week", true],
    ["Wed 7 Oct", "2026-10-07T10:00", "2026-10-17", "Next week", true],
    ["Thu 8 Oct", "2026-10-08T10:00", "2026-10-17", "Next week", true],
    ["Fri 9 Oct", "2026-10-09T10:00", "2026-10-17", "Next week", true],
    ["Sat 10 Oct (demo day)", "2026-10-10T10:00", "2026-10-17", "Next week", true],
    ["Sun 11 Oct", "2026-10-11T10:00", "2026-10-17", "Next week", false],
    ["Mon 12 Oct", "2026-10-12T10:00", "2026-10-17", "This week", false],
  ])("%s -> Saturday %s", (_label, now, expected, week, closed) => {
    const slot = getDemoSlot(ist(now));
    expect(slot.isoDate).toBe(expected);
    expect(slot.week).toBe(week);
    expect(slot.thisWeekClosed).toBe(closed);
  });

  it("closes at Tuesday 00:00 IST exactly (Monday 23:59 still books this Saturday)", () => {
    expect(getDemoSlot(ist("2026-10-05T23:59")).isoDate).toBe("2026-10-10");
    expect(getDemoSlot(ist("2026-10-06T00:00")).isoDate).toBe("2026-10-17");
  });

  it("uses India time, not the visitor's time zone", () => {
    // Mon 5 Oct 20:00 in New York = Tue 6 Oct 05:30 in India -> already next week.
    expect(getDemoSlot(new Date("2026-10-05T20:00:00-04:00")).isoDate).toBe("2026-10-17");
    // Mon 5 Oct 18:00 UTC = Mon 23:30 IST -> still this week.
    expect(getDemoSlot(new Date("2026-10-05T18:00:00Z")).isoDate).toBe("2026-10-10");
  });

  it("rolls over the end of a month", () => {
    expect(getDemoSlot(ist("2026-10-26T09:00")).isoDate).toBe("2026-10-31"); // Mon -> Sat 31 Oct
    expect(getDemoSlot(ist("2026-10-27T09:00")).isoDate).toBe("2026-11-07"); // Tue -> Sat 7 Nov
  });

  it("rolls over the end of a year", () => {
    expect(getDemoSlot(ist("2026-12-24T09:00")).isoDate).toBe("2027-01-02"); // Thu 24 Dec -> Sat 2 Jan
    expect(getDemoSlot(ist("2026-12-28T09:00")).isoDate).toBe("2027-01-02"); // Mon 28 Dec -> Sat 2 Jan
    expect(getDemoSlot(ist("2027-01-01T09:00")).isoDate).toBe("2027-01-09"); // Fri 1 Jan -> Sat 9 Jan
  });

  it("starts at 7:00 PM IST", () => {
    const slot = getDemoSlot(ist("2026-10-05T10:00"));
    expect(slot.start.toISOString()).toBe("2026-10-10T13:30:00.000Z");
    expect(formatDemoDate(slot)).toBe("Saturday, 10 October 2026");
    expect(formatDemoShort(slot)).toBe("Sat, 10 Oct");
  });
});

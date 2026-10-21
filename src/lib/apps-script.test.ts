/*
  Runs the real apps-script/Code.gs in Node with fake Google services (Sheet, Mail, Lock, Cache),
  so the script's behaviour is tested without deploying it.
*/
import { readFileSync } from "node:fs";
import { join } from "node:path";
import vm from "node:vm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { programs } from "@/data/programs";
import { getDemoSlot } from "./demo-date";

type Row = string[];
type Mail = { to: string; subject: string; body: string };

function loadScript() {
  const rows: Record<string, Row[]> = {
    "Demo Bookings": [],
    Enquiries: [],
    Enrollments: [],
    "Mentor Applications": [],
    "Callback Requests": [],
    "Brochure Downloads": [],
  };
  const mails: Mail[] = [];
  const cache = new Map<string, string>();
  const formatters: Record<string, Intl.DateTimeFormatOptions> = {
    "EEEE, d MMMM yyyy": { weekday: "long", day: "numeric", month: "long", year: "numeric" },
  };
  const context = vm.createContext({
    Date, // the test's (fake-able) clock
    JSON,
    String,
    Object,
    console: { log() {}, error() {} },
    Utilities: {
      formatDate: (date: Date, tz: string, format: string) =>
        format === "yyyy-MM-dd HH:mm:ss"
          ? new Intl.DateTimeFormat("sv-SE", { timeZone: tz, dateStyle: "short", timeStyle: "medium" }).format(date)
          : new Intl.DateTimeFormat("en-IN", { timeZone: tz, ...formatters[format] }).format(date),
    },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    CacheService: {
      getScriptCache: () => ({ get: (k: string) => cache.get(k) ?? null, put: (k: string, v: string) => void cache.set(k, v) }),
    },
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ({ getSheetByName: (name: string) => ({ appendRow: (row: Row) => rows[name].push(row) }) }),
      flush() {},
    },
    MailApp: { sendEmail: (m: Mail) => void mails.push(m) },
    ContentService: {
      MimeType: { JSON: "json" },
      createTextOutput: (content: string) => ({ setMimeType: () => ({ content }) }),
    },
  });
  const code = readFileSync(join(__dirname, "..", "..", "apps-script", "Code.gs"), "utf-8");
  vm.runInContext(`${code}\n;globalThis.__api = { doPost, computeDemoSlot, CONFIG };`, context);
  const api = (context as unknown as { __api: { doPost: (e: unknown) => { content: string }; computeDemoSlot: (d: Date) => { isoDate: string; week: string }; CONFIG: { PROGRAMS: string[]; WHATSAPP_NUMBER: string; TEAM_EMAIL: string; MENTOR_EXPERIENCE: string[]; MENTOR_TEACHING: string[] } } }).__api;
  const post = (body: object) => JSON.parse(api.doPost({ postData: { contents: JSON.stringify(body) } }).content) as { ok: boolean };
  return { api, post, rows, mails };
}

const demo = {
  type: "demo",
  name: "  Asha   Rao ",
  phone: "+91 98765 43210",
  email: "Asha@Example.com",
  program: "Data Science",
  sourcePage: "/",
  website: "",
  clientDemoDate: "1999-01-01", // must be ignored
};

describe("apps-script/Code.gs", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-05T23:59:00+05:30")); // Monday 23:59 IST (last minute for this Saturday)
  });
  afterEach(() => vi.useRealTimers());

  it("computes the same demo date as the website, every hour for two years", () => {
    vi.useRealTimers();
    const { api } = loadScript();
    for (let t = Date.UTC(2026, 0, 1); t < Date.UTC(2028, 0, 1); t += 3600_000) {
      const now = new Date(t);
      const site = getDemoSlot(now);
      const script = api.computeDemoSlot(now);
      expect([script.isoDate, script.week]).toEqual([site.isoDate, site.week]);
    }
  });

  it("uses the same program names as the website", () => {
    const { api } = loadScript();
    expect(api.CONFIG.PROGRAMS).toEqual(programs.map((p) => p.name));
  });

  it("writes exactly one correct demo row, with the date from its own IST clock", () => {
    const { post, rows, mails } = loadScript();
    expect(post(demo)).toEqual({ ok: true });
    expect(rows["Demo Bookings"]).toEqual([
      ["2026-10-05 23:59:00", "Asha Rao", "'9876543210", "asha@example.com", "Data Science", "2026-10-10", "This week", "/", ""],
    ]);
    // Student confirmation (meeting link via WhatsApp); no team alert while TEAM_EMAIL is a placeholder.
    expect(mails).toHaveLength(1);
    expect(mails[0].to).toBe("asha@example.com");
    expect(mails[0].subject).toBe("Your free Data Science demo: Saturday, 10 October 2026, 7:00 PM (IST)");
    expect(mails[0].body).toContain("To get the meeting link, message us on WhatsApp: https://wa.me/917892891602");
    expect(mails[0].body).not.toMatch(/meet\.google|zoom\.us/);
  });

  it("switches to next week's Saturday at Tuesday 00:00 IST (Monday cut-off)", () => {
    vi.setSystemTime(new Date("2026-10-06T00:00:00+05:30"));
    const { post, rows } = loadScript();
    post(demo);
    expect(rows["Demo Bookings"][0].slice(5, 7)).toEqual(["2026-10-17", "Next week"]);
  });

  it("writes an enquiry row, including 'Not sure yet'", () => {
    const { post, rows } = loadScript();
    expect(post({ ...demo, type: "enquiry", program: "Not sure yet", message: "Weekend batches?" })).toEqual({ ok: true });
    expect(rows.Enquiries[0]).toEqual(["2026-10-05 23:59:00", "Asha Rao", "'9876543210", "asha@example.com", "Not sure yet", "Weekend batches?", "/"]);
  });

  it("silently drops bots that fill the honeypot", () => {
    const { post, rows, mails } = loadScript();
    expect(post({ ...demo, website: "http://spam.example" })).toEqual({ ok: true });
    expect(rows["Demo Bookings"]).toHaveLength(0);
    expect(mails).toHaveLength(0);
  });

  it.each([
    ["a bad phone", { phone: "12345" }],
    ["a bad email", { email: "not-an-email" }],
    ["an unknown program", { program: "Big Data Hacking" }],
    ["'Not sure yet' on the demo form", { program: "Not sure yet" }],
    ["an unknown form type", { type: "payment" }],
  ])("rejects %s", (_label, change) => {
    const { post, rows } = loadScript();
    expect(post({ ...demo, ...change })).toEqual({ ok: false });
    expect(rows["Demo Bookings"]).toHaveLength(0);
  });

  it("stores a double click only once", () => {
    const { post, rows } = loadScript();
    post(demo);
    post(demo);
    expect(rows["Demo Bookings"]).toHaveLength(1);
  });

  it("stores formula-like text as plain text and trims long input", () => {
    const { post, rows } = loadScript();
    post({ ...demo, name: `=HYPERLINK("http://evil","x")${"a".repeat(200)}` });
    const name = rows["Demo Bookings"][0][1];
    expect(name.startsWith("'=HYPERLINK")).toBe(true);
    expect(name.length).toBe(101); // 100 characters + the protecting apostrophe
  });

  it("returns ok: false for a body that is not JSON", () => {
    const { api } = loadScript();
    expect(JSON.parse(api.doPost({ postData: { contents: "not json" } }).content)).toEqual({ ok: false });
  });
});

describe("apps-script/Code.gs without a WhatsApp number", () => {
  it("still tells the student to ask on WhatsApp", () => {
    const { api, post, mails } = loadScript();
    api.CONFIG.WHATSAPP_NUMBER = "PLACEHOLDER_WHATSAPP";
    post(demo);
    expect(mails[0].body).toContain("To get the meeting link, please message us on WhatsApp.");
  });
});

describe("apps-script/Code.gs enrollment requests", () => {
  const enrollment = {
    type: "enrollment",
    name: "Asha Rao",
    phone: "9876543210",
    email: "asha@example.com",
    program: "Data Science",
    track: "24 weeks",
    sourcePage: "/programs/data-science/",
    website: "",
  };

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-12T11:00:00+05:30"));
  });
  afterEach(() => vi.useRealTimers());

  it("writes one row to the Enrollments tab and emails only the team", () => {
    const { api, post, rows, mails } = loadScript();
    api.CONFIG.TEAM_EMAIL = "hello@datavedanta.com";
    expect(post(enrollment)).toEqual({ ok: true });
    expect(rows.Enrollments).toEqual([
      ["2026-10-12 11:00:00", "Asha Rao", "'9876543210", "asha@example.com", "Data Science", "24 weeks", "/programs/data-science/"],
    ]);
    expect(rows["Demo Bookings"]).toHaveLength(0);
    expect(mails).toHaveLength(1);
    expect(mails[0].to).toBe("hello@datavedanta.com");
    expect(mails[0].subject).toBe("New enrollment request: Data Science (24 weeks)");
  });

  it.each([
    ["an unknown track", { track: "36 weeks" }],
    ["a missing track", { track: "" }],
    ["'Not sure yet' as the program", { program: "Not sure yet" }],
  ])("rejects %s", (_label, change) => {
    const { post, rows } = loadScript();
    expect(post({ ...enrollment, ...change })).toEqual({ ok: false });
    expect(rows.Enrollments).toHaveLength(0);
  });
});

describe("apps-script/Code.gs: demo extra field, mentor applications and call back requests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-19T10:00:00+05:30")); // Monday
  });
  afterEach(() => vi.useRealTimers());

  it("stores the optional college / company and role on demo bookings", () => {
    const { post, rows } = loadScript();
    post({ ...demo, about: "  3rd year,   SPIT " });
    expect(rows["Demo Bookings"][0].slice(5)).toEqual(["2026-10-24", "This week", "/", "3rd year, SPIT"]);
  });

  const mentor = {
    type: "mentor",
    name: "Ravi Kumar",
    phone: "9876500000",
    email: "ravi@example.com",
    degree: "B.Tech Computer Science",
    position: "Senior Data Engineer",
    company: "Databricks",
    experience: "5–10 years",
    techStack: "Python, PySpark, AWS",
    courses: "Data Engineering, Data Science",
    teaching: "1–3 years",
    linkedin: "https://www.linkedin.com/in/example",
    message: "Weekends work best.",
    sourcePage: "/mentor/",
    website: "",
  };

  it("uses the same mentor form choices as the website", async () => {
    const { mentorForm } = await import("@/data/forms");
    const { api } = loadScript();
    expect(api.CONFIG.MENTOR_EXPERIENCE).toEqual(mentorForm.experienceOptions);
    expect(api.CONFIG.MENTOR_TEACHING).toEqual(mentorForm.teachingOptions);
  });

  it("writes a mentor application row and emails the team", () => {
    const { api, post, rows, mails } = loadScript();
    api.CONFIG.TEAM_EMAIL = "hello@datavedanta.com";
    expect(post(mentor)).toEqual({ ok: true });
    expect(rows["Mentor Applications"]).toEqual([
      [
        "2026-10-19 10:00:00", "Ravi Kumar", "'9876500000", "ravi@example.com", "B.Tech Computer Science", "Senior Data Engineer",
        "Databricks", "5–10 years", "Python, PySpark, AWS", "Data Engineering, Data Science", "1–3 years",
        "https://www.linkedin.com/in/example", "Weekends work best.", "/mentor/",
      ],
    ]);
    expect(mails).toHaveLength(1);
    expect(mails[0].subject).toBe("New mentor application: Ravi Kumar (Databricks)");
  });

  it.each([
    ["an unknown experience band", { experience: "1 year" }],
    ["no programs", { courses: "" }],
    ["an unknown program", { courses: "Data Engineering, Big Data Hacking" }],
    ["a LinkedIn value that is not a link", { linkedin: "ravi" }],
    ["a missing company", { company: "" }],
  ])("rejects a mentor application with %s", (_label, change) => {
    const { post, rows } = loadScript();
    expect(post({ ...mentor, ...change })).toEqual({ ok: false });
    expect(rows["Mentor Applications"]).toHaveLength(0);
  });

  it("accepts a mentor application without the optional LinkedIn and message", () => {
    const { post, rows } = loadScript();
    expect(post({ ...mentor, linkedin: "", message: "" })).toEqual({ ok: true });
    expect(rows["Mentor Applications"]).toHaveLength(1);
  });

  it("writes a call back request with only the phone number", () => {
    const { api, post, rows, mails } = loadScript();
    api.CONFIG.TEAM_EMAIL = "hello@datavedanta.com";
    expect(post({ type: "callback", phone: "+91 98765 11111", sourcePage: "/programs/", website: "" })).toEqual({ ok: true });
    expect(rows["Callback Requests"]).toEqual([["2026-10-19 10:00:00", "'9876511111", "/programs/"]]);
    expect(mails[0].subject).toBe("Call back request: 9876511111");
  });

  it("rejects a call back request with a bad phone number", () => {
    const { post, rows } = loadScript();
    expect(post({ type: "callback", phone: "12345", sourcePage: "/", website: "" })).toEqual({ ok: false });
    expect(rows["Callback Requests"]).toHaveLength(0);
  });
});

describe("apps-script/Code.gs: brochure downloads", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-21T12:00:00+05:30"));
  });
  afterEach(() => vi.useRealTimers());

  const brochure = {
    type: "brochure",
    name: "Neha Joshi",
    phone: "9876522222",
    email: "neha@example.com",
    program: "Data Engineering",
    sourcePage: "/programs/data-engineering/",
    website: "",
  };

  it("writes a brochure lead row and emails the team", () => {
    const { api, post, rows, mails } = loadScript();
    api.CONFIG.TEAM_EMAIL = "hello@datavedanta.com";
    expect(post(brochure)).toEqual({ ok: true });
    expect(rows["Brochure Downloads"]).toEqual([
      ["2026-10-21 12:00:00", "Neha Joshi", "'9876522222", "neha@example.com", "Data Engineering", "/programs/data-engineering/"],
    ]);
    expect(mails[0].subject).toBe("Brochure downloaded: Data Engineering");
  });

  it.each([
    ["a bad email", { email: "nope" }],
    ["an unknown program", { program: "Big Data Hacking" }],
  ])("rejects a brochure lead with %s", (_label, change) => {
    const { post, rows } = loadScript();
    expect(post({ ...brochure, ...change })).toEqual({ ok: false });
    expect(rows["Brochure Downloads"]).toHaveLength(0);
  });
});

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { formatDiscount, formatRupees } from "@/lib/format-price";
import { demo } from "./demo-links";
import { faqCategories } from "./faqs";
import { advancedAddOn, bundleSavings, pricing } from "./pricing";
import { allTracks, getProgram, programs } from "./programs";
import { razorpayLinks } from "./razorpay-links";
import { testimonials } from "./testimonials";

describe("programs", () => {
  it("has exactly the 6 approved programs and 10 tracks", () => {
    expect(programs.map((p) => p.name)).toEqual([
      "Generative AI Engineering",
      "Applied AI & ML Engineering",
      "Data Science",
      "Data Engineering",
      "Python Full Stack",
      "Python Programming",
    ]);
    expect(allTracks.map(({ track }) => track.id)).toEqual([
      "genai-12",
      "aiml-12",
      "aiml-24",
      "ds-12",
      "ds-24",
      "de-12",
      "de-24",
      "pfs-12",
      "pfs-24",
      "py-8",
    ]);
  });

  it("finds programs by slug", () => {
    expect(getProgram("data-science")?.name).toBe("Data Science");
    expect(getProgram("data-engineering")?.name).toBe("Data Engineering");
    expect(getProgram("big-data")).toBeUndefined();
  });

  it("names the tracks Foundations / Advanced (client point 16)", () => {
    expect(new Set(allTracks.map(({ track }) => track.name))).toEqual(new Set(["8 Weeks", "12 Weeks", "12 Weeks Foundations", "24 Weeks Advanced"]));
  });

  it("gives every program a rating, a tech stack and a brochure that exists", () => {
    for (const program of programs) {
      expect(program.rating).toBeGreaterThanOrEqual(4.5);
      expect(program.techStack.length).toBeGreaterThan(3);
      expect(existsSync(join(__dirname, "..", "..", "public", program.brochure))).toBe(true);
    }
  });

  const pdfTracks = allTracks.filter(({ track }) => track.curriculum.sourcePages);
  const brochureTracks = allTracks.filter(({ track }) => track.curriculum.sourceBrochure);

  it("takes every track from the course PDF or a brochure", () => {
    expect(pdfTracks.length + brochureTracks.length).toBe(allTracks.length);
    expect(brochureTracks.map(({ track }) => track.id)).toEqual(["de-12", "de-24", "py-8"]);
  });

  it.each(pdfTracks.map(({ track }) => [track.id, track] as const))(
    "%s has every week in the module table and the detailed curriculum, in order",
    (_id, track) => {
      const expected = Array.from({ length: track.weeks }, (_, i) => i + 1);
      expect(track.curriculum.id).toBe(track.id);
      expect(track.curriculum.modules.map((m) => m.week)).toEqual(expected);
      expect(track.curriculum.weeks.map((w) => w.week)).toEqual(expected);
    },
  );

  it.each(pdfTracks.map(({ track }) => [track.id, track] as const))(
    "%s has a month overview, 5 differentiators and no empty text",
    (_id, track) => {
      const { overview, differentiation, weeks } = track.curriculum;
      expect(overview.filter((row) => row.label.startsWith("Month ") && !row.label.includes("Project"))).toHaveLength(
        track.weeks / 4,
      );
      expect(differentiation.focusAreas).toHaveLength(5);
      const texts = weeks.flatMap((w) => w.groups.flatMap((g) => g.items.map((i) => i.text)));
      expect(texts.every((t) => t.trim().length > 0)).toBe(true);
    },
  );

  it.each(brochureTracks.map(({ track }) => [track.id, track] as const))(
    "%s has one month of modules per 4 weeks, 4 benefits and no empty text",
    (_id, track) => {
      const { monthModules = [], overview, differentiation, projectSections } = track.curriculum;
      expect(track.curriculum.id).toBe(track.id);
      expect(monthModules).toHaveLength(track.weeks / 4);
      expect(monthModules.every((m) => m.modules.length === 4)).toBe(true);
      expect(overview.length).toBeGreaterThan(0);
      expect(differentiation.focusAreas).toHaveLength(4);
      expect(projectSections.length).toBeGreaterThan(0);
      const texts = monthModules.flatMap((m) => [m.title, ...m.modules.flatMap((x) => [x.title, x.text])]);
      expect(texts.every((t) => t.trim().length > 0)).toBe(true);
    },
  );

  it("Data Engineering 12 weeks is the first 3 months of the 24-week track", () => {
    const de12 = getProgram("data-engineering")!.tracks[0].curriculum;
    const de24 = getProgram("data-engineering")!.tracks[1].curriculum;
    expect(de12.monthModules).toEqual(de24.monthModules!.slice(0, 3));
    expect(de12.projectSections.map((s) => s.projects[0].title)).toEqual(["Automated Analytics Pipeline"]);
    expect(de24.projectSections.map((s) => s.projects[0].title)).toEqual(["Automated Analytics Pipeline", "The Enterprise Cloud Lakehouse"]);
  });

  it("turns each Python lab into a hands-on project", () => {
    const py = getProgram("python-programming")!.tracks[0].curriculum;
    expect(py.projectSections[0].projects).toHaveLength(7);
    expect(py.projectSections[0].projects[0].title).toBe("Building a dynamic CLI tool that authenticates users and calculates compound interest");
  });
});

describe("pricing", () => {
  it.each(Object.entries(pricing))("%s: You pay = Program fee - Early bird offer", (_id, price) => {
    expect(price.programFee - price.earlyBirdDiscount).toBe(price.youPay);
  });

  it("matches the brochure figures", () => {
    for (const { track } of allTracks) {
      const price = pricing[track.id];
      if (track.weeks === 12) expect(price).toEqual({ programFee: 50000, earlyBirdDiscount: 15000, youPay: 35000 });
      if (track.weeks === 24) expect(price).toEqual({ programFee: 70000, earlyBirdDiscount: 21000, youPay: 49000 });
    }
    expect(pricing["py-8"]).toEqual({ programFee: 28500, earlyBirdDiscount: 8550, youPay: 19950 });
    expect(advancedAddOn.youPay).toBe(35000);
  });

  it("shows the saving of the full 24 weeks over Foundations + Advanced", () => {
    expect(bundleSavings(getProgram("data-science")!)).toEqual({ separately: 70000, full: 49000, saving: 21000 });
    expect(bundleSavings(getProgram("generative-ai-engineering")!)).toBeNull();
    expect(bundleSavings(getProgram("python-programming")!)).toBeNull();
  });

  it("formats amounts the Indian way, without GST", () => {
    expect(formatRupees(35000)).toBe("₹35,000");
    expect(formatRupees(150000)).toBe("₹1,50,000");
    expect(formatDiscount(15000)).toBe("– ₹15,000");
  });
});

describe("links", () => {
  it("asks for the demo meeting link on WhatsApp with the program and date (no links on the site)", () => {
    expect(demo.whatsappMessage("Data Science", "Saturday, 10 October 2026")).toBe(
      "Hi DataVedanta, I have booked the free Data Science demo on Saturday, 10 October 2026 at 7:00 PM (IST). Please share the meeting link.",
    );
  });

  it("has a Razorpay link entry for every program and tier", () => {
    for (const { track } of allTracks) expect(razorpayLinks[track.id]).toBeTruthy();
    expect(Object.keys(razorpayLinks)).toHaveLength(10);
  });

  it.each(Object.entries(razorpayLinks))("%s: Razorpay link is a placeholder or a real Razorpay page", (_id, link) => {
    expect(link.startsWith("PLACEHOLDER_") || /^https:\/\/(rzp\.io|pages\.razorpay\.com)\/\S+$/.test(link)).toBe(true);
  });

  it("uses a different Razorpay link for every tier once links are real", () => {
    const real = Object.values(razorpayLinks).filter((l) => !l.startsWith("PLACEHOLDER_"));
    expect(new Set(real).size).toBe(real.length);
  });
});

describe("content rules", () => {
  it("labels every testimonial as a sample until real ones exist", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
    expect(testimonials.every((t) => t.isSample)).toBe(true);
  });

  it("answers the payment-option question with UPI, EMI and WhatsApp (client, 20 Oct 2026)", () => {
    const answer = faqCategories.flatMap((c) => c.faqs).find((f) => f.question.includes("payment options"))?.answer ?? "";
    expect(answer).toMatch(/UPI/);
    expect(answer).toMatch(/EMI/);
    expect(answer).toMatch(/WhatsApp/);
  });

  it("uses the real seats numbers and ratings from the client", () => {
    expect(programs.map((p) => [p.slug, p.rating, p.seatsLeft, p.trending])).toEqual([
      ["generative-ai-engineering", 4.8, 15, true],
      ["applied-ai-ml-engineering", 4.8, 11, true],
      ["data-science", 4.7, 14, true],
      ["data-engineering", 4.6, 13, false],
      ["python-full-stack-web-engineering", 4.7, 12, false],
      ["python-programming", 4.6, 10, false],
    ]);
  });

  // Scans every data file for words the site must never use (see README: content rules).
  const dataDir = __dirname;
  const files = [
    ...readdirSync(dataDir).filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts")),
    ...readdirSync(join(dataDir, "curriculum")).map((f) => join("curriculum", f)),
  ];
  const banned: [string, RegExp][] = [
    ["EMI", /\bEMIs?\b/],
    ["percentage discount", /\d+\s?%\s?off/i],
    ["guarantee", /guarantee/i],
    ["money-back", /money[- ]back/i],
  ];

  it.each(files)("%s contains no banned wording", (file) => {
    // Comments explain the rules, so only check the code and text outside comments.
    const source = readFileSync(join(dataDir, file), "utf-8")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    for (const [name, pattern] of banned) {
      // EMI is allowed only in the payment-options FAQ answer (client confirmed EMI, 20 Oct 2026).
      if (name === "EMI" && file === "faqs.ts") continue;
      expect(pattern.test(source), `${file} contains ${name}`).toBe(false);
    }
  });
});

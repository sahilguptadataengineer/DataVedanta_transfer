import { describe, expect, it } from "vitest";
import { privacyPolicy } from "./privacy";
import { refundPolicy } from "./refund";
import { termsPolicy } from "./terms";
import type { PolicyDocument, PolicyParagraph } from "./types";

const text = (p: PolicyParagraph) => (typeof p === "string" ? p : p.text);
const allText = (doc: PolicyDocument) =>
  [...doc.intro, ...doc.sections.flatMap((s) => s.paragraphs)].map(text).join(" ");

describe("policy documents", () => {
  it("keep the client's section numbering", () => {
    expect(termsPolicy.sections.map((s) => s.heading.split(".")[0])).toEqual(
      Array.from({ length: 26 }, (_, i) => String(i + 1)),
    );
    expect(privacyPolicy.sections).toHaveLength(18); // 17 numbered sections + "Policy acknowledgement"
    expect(refundPolicy.sections.map((s) => s.heading.split(".")[0])).toEqual(["1", "2", "3", "4", "5", "6", "7", "8"]);
  });

  it.each([termsPolicy, privacyPolicy, refundPolicy])("$title: every section has text and bold phrases exist", (doc) => {
    for (const section of doc.sections) {
      expect(section.paragraphs.length, section.heading).toBeGreaterThan(0);
      for (const p of section.paragraphs) {
        if (typeof p !== "string") for (const phrase of p.bold ?? []) expect(p.text).toContain(phrase);
      }
    }
  });

  it("refund policy matches the site's refund wording (7 days, pro-rata, one batch transfer)", () => {
    const refund = allText(refundPolicy);
    expect(refund).toContain("within 7 calendar days from the commencement date");
    expect(refund).toContain("pro-rata basis");
    expect(refund).toContain("may be used only once");
    expect(refund).not.toMatch(/money[- ]back/i);
  });
});

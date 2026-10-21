import { describe, expect, it } from "vitest";
import { isValidEmail, isValidPhone, normalisePhone, validateLead } from "./validate";

describe("phone", () => {
  it.each(["9876543210", "+91 98765 43210", "+91-9876543210", "919876543210", "09876543210", "(987) 654-3210"])(
    "accepts %s",
    (p) => expect(isValidPhone(p)).toBe(true),
  );
  it.each(["12345", "5876543210", "98765432101", "abcdefghij", ""])("rejects %s", (p) => expect(isValidPhone(p)).toBe(false));
  it("normalises to 10 digits", () => expect(normalisePhone("+91 98765-43210")).toBe("9876543210"));
});

describe("email", () => {
  it("accepts normal addresses", () => expect(isValidEmail("student@college.ac.in")).toBe(true));
  it.each(["no-at-sign", "a@b", "a b@c.com", ""])("rejects %s", (e) => expect(isValidEmail(e)).toBe(false));
});

describe("validateLead", () => {
  const ok = { name: "Asha", phone: "9876543210", email: "asha@example.com", program: "Data Science", consent: true };
  const programs = ["Data Science"];

  it("passes a complete form", () => expect(validateLead(ok, programs)).toEqual([]));

  it("lists every wrong field", () => {
    expect(
      validateLead({ name: " ", phone: "1", email: "x", program: "Data Engineering", message: "a".repeat(1001), consent: false }, programs),
    ).toEqual(["name", "phone", "email", "program", "message", "consent"]);
  });
});

describe("isValidOptionalLink", () => {
  it("accepts an empty value or a full web link, and nothing else", async () => {
    const { isValidOptionalLink } = await import("./validate");
    expect(isValidOptionalLink("")).toBe(true);
    expect(isValidOptionalLink("https://www.linkedin.com/in/example")).toBe(true);
    expect(isValidOptionalLink("linkedin.com/in/example")).toBe(false);
    expect(isValidOptionalLink("https://bad link")).toBe(false);
  });
});

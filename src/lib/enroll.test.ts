import { describe, expect, it } from "vitest";
import { razorpayLinks } from "@/data/razorpay-links";
import { enrollmentWhatsAppUrl, enrollTarget } from "./enroll";

describe("enrollTarget", () => {
  it("uses manual enrollment (form, then WhatsApp) while the Razorpay link is a placeholder", () => {
    expect(enrollTarget("ds-24")).toEqual({ kind: "whatsapp" });
  });

  it("opens the real Razorpay link once it is added", () => {
    const original = razorpayLinks["ds-24"];
    razorpayLinks["ds-24"] = "https://rzp.io/l/example";
    try {
      expect(enrollTarget("ds-24")).toEqual({ kind: "razorpay", href: "https://rzp.io/l/example" });
    } finally {
      razorpayLinks["ds-24"] = original;
    }
  });
});

describe("enrollmentWhatsAppUrl", () => {
  it("opens WhatsApp with the program, track and the student's details", () => {
    const url = enrollmentWhatsAppUrl({
      program: "Data Science",
      track: "24 weeks",
      name: "Asha Rao",
      phone: "9876543210",
      email: "asha@example.com",
    });
    expect(url).toMatch(/^https:\/\/wa\.me\/917892891602\?text=/);
    const text = decodeURIComponent(url!.split("?text=")[1]);
    expect(text).toBe(
      [
        "Hi DataVedanta, I want to enroll in the Data Science program (24 weeks).",
        "Name: Asha Rao",
        "Phone: 9876543210",
        "Email: asha@example.com",
        "Please share the payment details.",
      ].join("\n"),
    );
  });
});

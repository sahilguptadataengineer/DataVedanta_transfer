import { describe, expect, it } from "vitest";
import { isPlaceholder } from "./placeholder";
import { formatIndianNumber, whatsappUrl } from "./whatsapp";

describe("isPlaceholder", () => {
  it("detects placeholder and empty values", () => {
    expect(isPlaceholder("PLACEHOLDER_WHATSAPP")).toBe(true);
    expect(isPlaceholder("   ")).toBe(true);
    expect(isPlaceholder("919876543210")).toBe(false);
  });
});

describe("whatsappUrl", () => {
  it("returns null while the number is a placeholder", () => {
    expect(whatsappUrl("PLACEHOLDER_WHATSAPP", "Hi")).toBeNull();
  });

  it("returns null for numbers that are too short", () => {
    expect(whatsappUrl("12345")).toBeNull();
  });

  it("strips spaces, plus signs and dashes from the number", () => {
    expect(whatsappUrl("+91 98765-43210")).toBe("https://wa.me/919876543210");
  });

  it("encodes the prefilled message", () => {
    expect(whatsappUrl("919876543210", "Hi DataVedanta & team")).toBe(
      "https://wa.me/919876543210?text=Hi%20DataVedanta%20%26%20team",
    );
  });
});

describe("formatIndianNumber", () => {
  it("formats Indian numbers for display", () => {
    expect(formatIndianNumber("917892891602")).toBe("+91 78928 91602");
    expect(formatIndianNumber("7892891602")).toBe("+91 78928 91602");
  });
});

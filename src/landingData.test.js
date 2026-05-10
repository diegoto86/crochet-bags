import { describe, expect, it } from "vitest";
import { validateLandingData } from "./landingData";

describe("validateLandingData", () => {
  const validData = {
    products: [{}, {}, {}],
    steps: [{}, {}, {}],
    whatsappNumber: "51987654321",
    instagramUrl: "https://www.instagram.com/tu_marca",
  };

  it("accepts valid landing data", () => {
    expect(validateLandingData(validData)).toEqual([]);
  });

  it("requires at least three products", () => {
    const result = validateLandingData({ ...validData, products: [{}, {}] });
    expect(result.some((error) => error.includes("3 productos"))).toBe(true);
  });

  it("requires a valid WhatsApp number", () => {
    const result = validateLandingData({ ...validData, whatsappNumber: "+51 987" });
    expect(result.some((error) => error.includes("WhatsApp"))).toBe(true);
  });

  it("requires a valid Instagram URL", () => {
    const result = validateLandingData({ ...validData, instagramUrl: "https://instagram.com/tu_marca" });
    expect(result.some((error) => error.includes("Instagram"))).toBe(true);
  });
});

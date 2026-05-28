import { describe, expect, test } from "bun:test";
import { contactFieldOptions, validateContactPayload } from "./contact-schema";

describe("contact lead intake validation", () => {
  test("accepts a complete first-contact payload without confidential files", () => {
    const result = validateContactPayload({
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines Ltd",
      role: "CTO",
      industry: "legal-ip",
      use_case: "lora-adapter",
      deployment_target: ["customer-vpc", "air-gapped"],
      data_sensitivity: "legal-ip",
      air_gapped_required: "yes",
      onsite_intro: "unsure",
      timeline: "1-3-months",
      support_preference: ["hybrid"],
      compliance_constraints: "IP-sensitive documents, category only.",
      message: "We need an adapter evaluation workflow inside our boundary.",
      consent: true,
      locale: "en",
      page_origin: "/en/contact",
      utm_source: "direct"
    });

    expect(result.ok).toBe(true);
  });

  test("rejects missing required fields and file-like uploads", () => {
    const result = validateContactPayload({
      name: "",
      email: "not-an-email",
      company: "",
      industry: "other",
      use_case: "other",
      deployment_target: [],
      data_sensitivity: "other",
      air_gapped_required: "no",
      onsite_intro: "no",
      message: "attached file: secret.zip",
      consent: false,
      locale: "en",
      page_origin: "/en/contact",
      file: "secret.zip"
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors).toContain("name");
      expect(result.errors).toContain("email");
      expect(result.errors).toContain("company");
      expect(result.errors).toContain("deployment_target");
      expect(result.errors).toContain("consent");
      expect(result.errors).toContain("file");
      expect(result.errors).toContain("message");
    }
  });

  test("keeps controlled option sets aligned with the lead schema", () => {
    expect(contactFieldOptions.industry).toContain("manufacturing-industrial");
    expect(contactFieldOptions.deployment_target).toContain("edge-devices");
    expect(contactFieldOptions.use_case).toContain("evaluation-evidence");
  });
});

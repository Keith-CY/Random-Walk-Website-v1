import { describe, expect, test } from "bun:test";
import { parseFrontmatterMdx } from "./content";

describe("content parsing", () => {
  test("parses frontmatter and body from repository MDX", () => {
    const parsed = parseFrontmatterMdx(`---
title: "Private model workflow"
status: "placeholder"
locale: "en"
deployment_modes:
  - "customer-vpc"
  - "air-gapped"
deliverables:
  - "Dataset Package"
---

## Problem

Private records cannot leave the boundary.
`);

    expect(parsed.frontmatter.title).toBe("Private model workflow");
    expect(parsed.frontmatter.status).toBe("placeholder");
    expect(parsed.frontmatter.deployment_modes).toEqual(["customer-vpc", "air-gapped"]);
    expect(parsed.frontmatter.deliverables).toEqual(["Dataset Package"]);
    expect(parsed.body).toContain("Private records");
  });

  test("fails closed when required frontmatter fences are missing", () => {
    expect(() => parseFrontmatterMdx("# No frontmatter")).toThrow("frontmatter");
  });
});

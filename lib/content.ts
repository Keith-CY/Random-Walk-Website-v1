import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./i18n";

export type FrontmatterValue = string | string[];
export type Frontmatter = Record<string, FrontmatterValue>;

export type ParsedMdx = {
  frontmatter: Frontmatter;
  body: string;
};

export type ContentEntry = {
  slug: string;
  frontmatter: Frontmatter;
  body: string;
};

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function parseFrontmatterMdx(source: string): ParsedMdx {
  if (!source.startsWith("---\n")) {
    throw new Error("MDX content must start with frontmatter fence");
  }

  const end = source.indexOf("\n---", 4);
  if (end === -1) {
    throw new Error("MDX content must include a closing frontmatter fence");
  }

  const rawFrontmatter = source.slice(4, end).split("\n");
  const body = source.slice(end + 4).trim();
  const frontmatter: Frontmatter = {};
  let currentListKey: string | null = null;

  for (const line of rawFrontmatter) {
    if (line.trim().length === 0) continue;

    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && currentListKey) {
      const current = frontmatter[currentListKey];
      if (!Array.isArray(current)) {
        frontmatter[currentListKey] = [];
      }
      (frontmatter[currentListKey] as string[]).push(stripQuotes(listMatch[1]));
      continue;
    }

    const pairMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pairMatch) continue;

    const [, key, rawValue] = pairMatch;
    if (rawValue.trim() === "") {
      frontmatter[key] = [];
      currentListKey = key;
    } else {
      frontmatter[key] = stripQuotes(rawValue);
      currentListKey = null;
    }
  }

  return { frontmatter, body };
}

export function contentDirectory(type: "work" | "notes", locale: Locale): string {
  return path.join(process.cwd(), "content", type, locale);
}

export function getContentEntries(type: "work" | "notes", locale: Locale): ContentEntry[] {
  const dir = contentDirectory(type, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .sort()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const parsed = parseFrontmatterMdx(fs.readFileSync(path.join(dir, file), "utf8"));
      return { slug, ...parsed };
    });
}

export function getContentEntry(type: "work" | "notes", locale: Locale, slug: string): ContentEntry | null {
  const file = path.join(contentDirectory(type, locale), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const parsed = parseFrontmatterMdx(fs.readFileSync(file, "utf8"));
  return { slug, ...parsed };
}

export function getString(frontmatter: Frontmatter, key: string, fallback = ""): string {
  const value = frontmatter[key];
  return typeof value === "string" ? value : fallback;
}

export function getStringArray(frontmatter: Frontmatter, key: string): string[] {
  const value = frontmatter[key];
  return Array.isArray(value) ? value : [];
}

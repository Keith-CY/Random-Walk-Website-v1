import { locales } from "./i18n";

export const contactFieldOptions = {
  industry: ["legal-ip", "manufacturing-industrial", "finance-insurance", "other"],
  use_case: ["dataset-package", "lora-adapter", "private-deployment", "evaluation-evidence", "air-gapped", "other"],
  deployment_target: ["apple-silicon", "on-prem-gpu", "private-cloud", "customer-vpc", "air-gapped", "edge-devices"],
  data_sensitivity: ["trade-secrets", "customer-data", "legal-ip", "regulated-records", "internal-knowledge", "other"],
  air_gapped_required: ["yes", "no", "unsure"],
  onsite_intro: ["yes", "no", "unsure"],
  timeline: ["exploratory", "0-30-days", "1-3-months", "3-6-months"],
  support_preference: ["on-site", "remote", "hybrid", "continuous-tuning"]
} as const;

type ContactPayload = Record<string, unknown>;

type ValidationResult =
  | { ok: true; errors?: never }
  | { ok: false; errors: string[] };

const confidentialFilePattern = /\b(file|attach|attachment|upload|\.zip|\.pdf|\.docx|source code|secret|private key|customer record)\b/i;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isBooleanTrue(value: unknown): boolean {
  return value === true || value === "true" || value === "on";
}

function isInOptions<T extends readonly string[]>(value: unknown, options: T): value is T[number] {
  return typeof value === "string" && (options as readonly string[]).includes(value);
}

function hasOneValidArrayValue(value: unknown, options: readonly string[]): boolean {
  return Array.isArray(value) && value.some((item) => typeof item === "string" && options.includes(item));
}

export function validateContactPayload(payload: ContactPayload): ValidationResult {
  const errors = new Set<string>();

  if (!isNonEmptyString(payload.name)) errors.add("name");
  if (!isNonEmptyString(payload.email) || !emailPattern.test(payload.email)) errors.add("email");
  if (!isNonEmptyString(payload.company)) errors.add("company");
  if (!isInOptions(payload.industry, contactFieldOptions.industry)) errors.add("industry");
  if (!isInOptions(payload.use_case, contactFieldOptions.use_case)) errors.add("use_case");
  if (!hasOneValidArrayValue(payload.deployment_target, contactFieldOptions.deployment_target)) errors.add("deployment_target");
  if (!isInOptions(payload.data_sensitivity, contactFieldOptions.data_sensitivity)) errors.add("data_sensitivity");
  if (!isInOptions(payload.air_gapped_required, contactFieldOptions.air_gapped_required)) errors.add("air_gapped_required");
  if (!isInOptions(payload.onsite_intro, contactFieldOptions.onsite_intro)) errors.add("onsite_intro");
  if (!isNonEmptyString(payload.message)) errors.add("message");
  if (!isBooleanTrue(payload.consent)) errors.add("consent");
  if (!isInOptions(payload.locale, locales)) errors.add("locale");
  if (!isNonEmptyString(payload.page_origin)) errors.add("page_origin");
  if ("file" in payload || "upload" in payload || "attachment" in payload) errors.add("file");
  if (isNonEmptyString(payload.message) && confidentialFilePattern.test(payload.message)) errors.add("message");

  if (errors.size > 0) {
    return { ok: false, errors: [...errors] };
  }

  return { ok: true };
}

const meetTimeZone = "Asia/Tokyo";
const meetLeadDays = 2;
const meetDurationMinutes = 120;
const slotsApiVersion = "2024-09-04";

const meetSlots = [
  { id: "morning", start: "10:00", end: "12:00", policy: "blocked" },
  { id: "early-afternoon", start: "14:00", end: "16:00", policy: "bookable" },
  { id: "late-afternoon", start: "16:00", end: "18:00", policy: "bookable" }
] as const;

const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

type MeetSlotId = (typeof meetSlots)[number]["id"];

type MeetEnv = {
  CAL_API_KEY?: string;
  CAL_EVENT_TYPE_ID?: string;
  CAL_EVENT_TYPE_SLUG?: string;
  CAL_USERNAME?: string;
  CAL_TEAM_SLUG?: string;
  CAL_ORGANIZATION_SLUG?: string;
};

type HeaderValue = string | string[] | undefined;

type VercelRequestLike = {
  method?: string;
  url?: string;
  headers?: Headers | Record<string, HeaderValue>;
};

type VercelResponseLike = {
  status?: (statusCode: number) => VercelResponseLike;
  setHeader?: (name: string, value: string) => void;
  json?: (body: unknown) => void;
  send?: (body: string) => void;
  end?: (body?: string) => void;
  statusCode?: number;
};

function serverEnv(): MeetEnv {
  return {
    CAL_API_KEY: process.env.CAL_API_KEY,
    CAL_EVENT_TYPE_ID: process.env.CAL_EVENT_TYPE_ID,
    CAL_EVENT_TYPE_SLUG: process.env.CAL_EVENT_TYPE_SLUG,
    CAL_USERNAME: process.env.CAL_USERNAME,
    CAL_TEAM_SLUG: process.env.CAL_TEAM_SLUG,
    CAL_ORGANIZATION_SLUG: process.env.CAL_ORGANIZATION_SLUG
  };
}

function firstHeaderValue(value: HeaderValue) {
  if (Array.isArray(value)) return value[0];
  return value;
}

function headerValue(headers: VercelRequestLike["headers"], key: string) {
  if (!headers) return undefined;
  if (typeof Headers !== "undefined" && headers instanceof Headers) {
    return headers.get(key) || undefined;
  }

  const bag = headers as Record<string, HeaderValue>;
  return firstHeaderValue(bag[key]) || firstHeaderValue(bag[key.toLowerCase()]);
}

function requestUrl(request: VercelRequestLike) {
  const host = headerValue(request.headers, "x-forwarded-host") || headerValue(request.headers, "host") || "random-walk.co.jp";
  const protocol = headerValue(request.headers, "x-forwarded-proto") || "https";
  return new URL(request.url || "/", `${protocol}://${host}`);
}

function sendJson(response: VercelResponseLike | undefined, statusCode: number, body: unknown) {
  const payload = JSON.stringify(body);

  if (!response) {
    return new Response(payload, {
      status: statusCode,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  }

  response.statusCode = statusCode;
  response.setHeader?.("Content-Type", "application/json; charset=utf-8");
  response.setHeader?.("Cache-Control", "no-store");

  const nextResponse = response.status?.(statusCode) ?? response;

  if (typeof nextResponse.json === "function") {
    nextResponse.json(body);
    return undefined;
  }

  if (typeof nextResponse.send === "function") {
    nextResponse.send(payload);
    return undefined;
  }

  nextResponse.end?.(payload);
  return undefined;
}

function sendEmpty(response: VercelResponseLike | undefined, statusCode: number) {
  if (!response) {
    return new Response(null, { status: statusCode });
  }

  response.statusCode = statusCode;
  const nextResponse = response.status?.(statusCode) ?? response;
  nextResponse.end?.();
  return undefined;
}

function parseIsoDate(dateIso: string) {
  if (!isoDatePattern.test(dateIso)) return null;
  const [year, month, day] = dateIso.split("-").map(Number);
  return { year, month, day };
}

function makeIsoDate(year: number, month: number, day: number) {
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function addDaysIso(dateIso: string, days: number) {
  const date = parseIsoDate(dateIso);
  if (!date) return dateIso;
  const next = new Date(Date.UTC(date.year, date.month - 1, date.day + days, 12));
  return makeIsoDate(next.getUTCFullYear(), next.getUTCMonth() + 1, next.getUTCDate());
}

function getTokyoTodayIso(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: meetTimeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(now);
  const year = parts.find((part) => part.type === "year")?.value ?? "1970";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";
  return `${year}-${month}-${day}`;
}

function getWeekdayIso(dateIso: string) {
  const date = parseIsoDate(dateIso);
  if (!date) return -1;
  return new Date(Date.UTC(date.year, date.month - 1, date.day, 12)).getUTCDay();
}

function isWeekendIso(dateIso: string) {
  const weekday = getWeekdayIso(dateIso);
  return weekday === 0 || weekday === 6;
}

function getEarliestMeetDateIso(todayIso = getTokyoTodayIso()) {
  return addDaysIso(todayIso, meetLeadDays);
}

function isSelectableMeetDate(dateIso: string, todayIso = getTokyoTodayIso()) {
  return isoDatePattern.test(dateIso) && dateIso >= getEarliestMeetDateIso(todayIso) && !isWeekendIso(dateIso);
}

function slotStartUtcIso(dateIso: string, slotId: MeetSlotId) {
  const slot = meetSlots.find((item) => item.id === slotId);
  if (!slot) return "";
  return new Date(`${dateIso}T${slot.start}:00+09:00`).toISOString();
}

function dateRange(startIso: string, endIso: string) {
  const dates: string[] = [];
  let current = startIso;

  for (let index = 0; index < 45 && current <= endIso; index += 1) {
    dates.push(current);
    current = addDaysIso(current, 1);
  }

  return dates;
}

function requireCalConfig(env: MeetEnv) {
  if (!env.CAL_API_KEY) {
    throw new Error("missing_cal_api_key");
  }

  if (env.CAL_EVENT_TYPE_ID) {
    return;
  }

  if (env.CAL_EVENT_TYPE_SLUG && (env.CAL_USERNAME || env.CAL_TEAM_SLUG)) {
    return;
  }

  throw new Error("missing_cal_event_type");
}

function eventTypeQueryParams(env: MeetEnv) {
  const params = new URLSearchParams();

  if (env.CAL_EVENT_TYPE_ID) {
    params.set("eventTypeId", env.CAL_EVENT_TYPE_ID);
  } else {
    params.set("eventTypeSlug", env.CAL_EVENT_TYPE_SLUG ?? "");
    if (env.CAL_USERNAME) params.set("username", env.CAL_USERNAME);
    if (env.CAL_TEAM_SLUG) params.set("teamSlug", env.CAL_TEAM_SLUG);
    if (env.CAL_ORGANIZATION_SLUG) params.set("organizationSlug", env.CAL_ORGANIZATION_SLUG);
  }

  return params;
}

async function getAvailableCalStarts(env: MeetEnv, startIso: string, endIso: string) {
  requireCalConfig(env);
  const params = eventTypeQueryParams(env);
  params.set("start", startIso);
  params.set("end", endIso);
  params.set("timeZone", meetTimeZone);
  params.set("duration", String(meetDurationMinutes));
  params.set("format", "range");

  const response = await fetch(`https://api.cal.com/v2/slots?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${env.CAL_API_KEY}`,
      "cal-api-version": slotsApiVersion
    }
  });

  if (!response.ok) {
    throw new Error(`cal_slots_${response.status}`);
  }

  const body = (await response.json()) as { data?: Record<string, Array<string | { start?: string }>> };
  const starts = new Set<string>();

  for (const daySlots of Object.values(body.data ?? {})) {
    for (const slot of daySlots) {
      const start = typeof slot === "string" ? slot : slot.start;
      if (start) starts.add(new Date(start).toISOString());
    }
  }

  return starts;
}

function buildSlotAvailabilityForDate(dateIso: string, calStarts: Set<string>, todayIso = getTokyoTodayIso()) {
  const selectable = isSelectableMeetDate(dateIso, todayIso);
  return Object.fromEntries(
    meetSlots.map((slot) => {
      const available = selectable && slot.policy === "bookable" && calStarts.has(slotStartUtcIso(dateIso, slot.id));
      return [slot.id, available];
    })
  );
}

export default async function handler(request: VercelRequestLike, response?: VercelResponseLike) {
  try {
    const env = serverEnv();

    if (request.method === "OPTIONS") {
      return sendEmpty(response, 204);
    }

    if (request.method !== "GET") {
      return sendJson(response, 405, { status: "error", error: "method_not_allowed" });
    }

    const url = requestUrl(request);
    const start = url.searchParams.get("start") || new Date().toISOString().slice(0, 10);
    const end = url.searchParams.get("end") || start;
    const calStarts = await getAvailableCalStarts(env, start, end);
    const days = dateRange(start, end).map((date) => ({
      date,
      slots: buildSlotAvailabilityForDate(date, calStarts)
    }));

    return sendJson(response, 200, {
      status: "success",
      days
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    const status = message.startsWith("missing_") ? 503 : 502;

    return sendJson(response, status, {
      status: "error",
      error: message
    });
  }
}

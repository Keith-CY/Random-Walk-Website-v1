const meetTimeZone = "Asia/Tokyo";
const meetLeadDays = 2;
const meetDurationMinutes = 120;
const slotsApiVersion = "2024-09-04";
const bookingsApiVersion = "2026-02-25";

const meetSlots = [
  { id: "morning", start: "10:00", end: "12:00", policy: "blocked" },
  { id: "early-afternoon", start: "14:00", end: "16:00", policy: "bookable" },
  { id: "late-afternoon", start: "16:00", end: "18:00", policy: "bookable" }
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

type MeetSlotId = (typeof meetSlots)[number]["id"];

type MeetEnv = {
  CAL_API_KEY?: string;
  CAL_EVENT_TYPE_ID?: string;
  CAL_EVENT_TYPE_SLUG?: string;
  CAL_USERNAME?: string;
  CAL_TEAM_SLUG?: string;
  CAL_ORGANIZATION_SLUG?: string;
  CAL_MEET_INCLUDE_BOOKING_FIELDS?: string;
  MEET_OFFICE_ADDRESS?: string;
};

type BookingInput = {
  date: string;
  slotId: MeetSlotId;
  name: string;
  email: string;
  phone: string;
  message: string;
  locale: string;
  pageOrigin: string;
};

type HeaderValue = string | string[] | undefined;

type VercelRequestLike = {
  method?: string;
  body?: unknown;
  headers?: Headers | Record<string, HeaderValue>;
  json?: () => Promise<unknown>;
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
    CAL_ORGANIZATION_SLUG: process.env.CAL_ORGANIZATION_SLUG,
    CAL_MEET_INCLUDE_BOOKING_FIELDS: process.env.CAL_MEET_INCLUDE_BOOKING_FIELDS,
    MEET_OFFICE_ADDRESS: process.env.MEET_OFFICE_ADDRESS
  };
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

async function requestBody(request: VercelRequestLike) {
  if (typeof request.json === "function") {
    try {
      return await request.json();
    } catch {
      return null;
    }
  }

  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body) as unknown;
    } catch {
      return null;
    }
  }

  return request.body ?? null;
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

function eventTypeBookingBody(env: MeetEnv) {
  if (env.CAL_EVENT_TYPE_ID) {
    return { eventTypeId: Number(env.CAL_EVENT_TYPE_ID) };
  }

  return {
    eventTypeSlug: env.CAL_EVENT_TYPE_SLUG,
    ...(env.CAL_USERNAME ? { username: env.CAL_USERNAME } : {}),
    ...(env.CAL_TEAM_SLUG ? { teamSlug: env.CAL_TEAM_SLUG } : {}),
    ...(env.CAL_ORGANIZATION_SLUG ? { organizationSlug: env.CAL_ORGANIZATION_SLUG } : {})
  };
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

function validateBookingPayload(body: unknown, todayIso = getTokyoTodayIso()) {
  const payload = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const errors = new Set<string>();
  const date = typeof payload.date === "string" ? payload.date.trim() : "";
  const slotId = typeof payload.slotId === "string" ? payload.slotId.trim() : "";
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const locale = typeof payload.locale === "string" ? payload.locale.trim() : "en";

  if (!isSelectableMeetDate(date, todayIso)) errors.add("date");
  if (slotId !== "early-afternoon" && slotId !== "late-afternoon") errors.add("slotId");
  if (!name) errors.add("name");
  if (!email || !emailPattern.test(email)) errors.add("email");
  if (!message) errors.add("message");

  if (errors.size > 0) {
    return { ok: false as const, errors: [...errors] };
  }

  return {
    ok: true as const,
    data: {
      date,
      slotId: slotId as MeetSlotId,
      name,
      email,
      phone,
      message,
      locale: ["en", "zh", "ja", "ko"].includes(locale) ? locale : "en",
      pageOrigin: typeof payload.pageOrigin === "string" ? payload.pageOrigin.slice(0, 120) : ""
    }
  };
}

function truncate(value: string, maxLength: number) {
  return value.length > maxLength ? value.slice(0, maxLength - 1) : value;
}

async function createCalBooking(env: MeetEnv, booking: BookingInput) {
  requireCalConfig(env);
  const payload = {
    start: slotStartUtcIso(booking.date, booking.slotId),
    attendee: {
      name: booking.name,
      email: booking.email,
      timeZone: meetTimeZone,
      language: booking.locale,
      ...(booking.phone ? { phoneNumber: booking.phone } : {})
    },
    ...eventTypeBookingBody(env),
    metadata: {
      source: "random-walk-meet",
      locale: booking.locale,
      pageOrigin: booking.pageOrigin,
      message: truncate(booking.message, 500),
      phone: truncate(booking.phone, 80)
    },
    ...(env.CAL_MEET_INCLUDE_BOOKING_FIELDS === "false"
      ? {}
      : {
          bookingFieldsResponses: {
            message: booking.message,
            phone: booking.phone,
            office_address: env.MEET_OFFICE_ADDRESS || ""
          }
        })
  };

  const response = await fetch("https://api.cal.com/v2/bookings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.CAL_API_KEY}`,
      "Content-Type": "application/json",
      "cal-api-version": bookingsApiVersion
    },
    body: JSON.stringify(payload)
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`cal_bookings_${response.status}:${JSON.stringify(body).slice(0, 600)}`);
  }

  return body as { data?: { uid?: string; id?: number; start?: string; end?: string; status?: string } };
}

export default async function handler(request: VercelRequestLike, response?: VercelResponseLike) {
  try {
    if (request.method === "OPTIONS") {
      return sendEmpty(response, 204);
    }

    if (request.method !== "POST") {
      return sendJson(response, 405, { status: "error", error: "method_not_allowed" });
    }

    const env = serverEnv();
    const body = await requestBody(request);

    if (!body) {
      return sendJson(response, 400, { status: "error", error: "invalid_json" });
    }

    const validation = validateBookingPayload(body);
    if (!validation.ok) {
      return sendJson(response, 400, { status: "error", errors: validation.errors });
    }

    const calStarts = await getAvailableCalStarts(env, validation.data.date, validation.data.date);
    const requestedStart = slotStartUtcIso(validation.data.date, validation.data.slotId);

    if (!calStarts.has(requestedStart)) {
      return sendJson(response, 409, { status: "error", error: "slot_unavailable" });
    }

    const booking = await createCalBooking(env, validation.data);
    const data = booking.data ?? {};

    return sendJson(response, 200, {
      status: "success",
      booking: {
        uid: data.uid ?? data.id ?? requestedStart,
        start: data.start ?? requestedStart,
        end: data.end ?? null,
        status: data.status ?? "accepted"
      }
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

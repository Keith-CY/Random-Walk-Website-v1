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
  MEET_ALLOWED_ORIGIN?: string;
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

export function corsHeaders(request: Request, env: MeetEnv): Record<string, string> {
  const origin = request.headers.get("Origin");
  const allowedOrigin = env.MEET_ALLOWED_ORIGIN;

  if (!origin || !allowedOrigin || origin !== allowedOrigin) {
    return {};
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    Vary: "Origin"
  };
}

export function jsonResponse(request: Request, env: MeetEnv, body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...corsHeaders(request, env)
    }
  });
}

export function optionsResponse(request: Request, env: MeetEnv) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request, env)
  });
}

function parseIsoDate(dateIso: string) {
  if (!isoDatePattern.test(dateIso)) return null;
  const [year, month, day] = dateIso.split("-").map(Number);
  return { year, month, day };
}

function makeIsoDate(year: number, month: number, day: number) {
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function addDaysIso(dateIso: string, days: number) {
  const date = parseIsoDate(dateIso);
  if (!date) return dateIso;
  const next = new Date(Date.UTC(date.year, date.month - 1, date.day + days, 12));
  return makeIsoDate(next.getUTCFullYear(), next.getUTCMonth() + 1, next.getUTCDate());
}

export function getTokyoTodayIso(now = new Date()) {
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

export function slotStartUtcIso(dateIso: string, slotId: MeetSlotId) {
  const slot = meetSlots.find((item) => item.id === slotId);
  if (!slot) return "";
  return new Date(`${dateIso}T${slot.start}:00+09:00`).toISOString();
}

export function dateRange(startIso: string, endIso: string) {
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

export async function getAvailableCalStarts(env: MeetEnv, startIso: string, endIso: string) {
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

export function buildSlotAvailabilityForDate(dateIso: string, calStarts: Set<string>, todayIso = getTokyoTodayIso()) {
  const selectable = isSelectableMeetDate(dateIso, todayIso);
  return Object.fromEntries(
    meetSlots.map((slot) => {
      const available = selectable && slot.policy === "bookable" && calStarts.has(slotStartUtcIso(dateIso, slot.id));
      return [slot.id, available];
    })
  );
}

export function validateBookingPayload(body: unknown, todayIso = getTokyoTodayIso()) {
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

export async function createCalBooking(env: MeetEnv, booking: BookingInput) {
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
    lengthInMinutes: meetDurationMinutes,
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

export function serverEnv(): MeetEnv {
  return {
    CAL_API_KEY: process.env.CAL_API_KEY,
    CAL_EVENT_TYPE_ID: process.env.CAL_EVENT_TYPE_ID,
    CAL_EVENT_TYPE_SLUG: process.env.CAL_EVENT_TYPE_SLUG,
    CAL_USERNAME: process.env.CAL_USERNAME,
    CAL_TEAM_SLUG: process.env.CAL_TEAM_SLUG,
    CAL_ORGANIZATION_SLUG: process.env.CAL_ORGANIZATION_SLUG,
    CAL_MEET_INCLUDE_BOOKING_FIELDS: process.env.CAL_MEET_INCLUDE_BOOKING_FIELDS,
    MEET_ALLOWED_ORIGIN: process.env.MEET_ALLOWED_ORIGIN,
    MEET_OFFICE_ADDRESS: process.env.MEET_OFFICE_ADDRESS
  };
}

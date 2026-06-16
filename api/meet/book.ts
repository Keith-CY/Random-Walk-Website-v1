import {
  createCalBooking,
  getAvailableCalStarts,
  serverEnv,
  slotStartUtcIso,
  validateBookingPayload
} from "../../server/meet-cal";

type VercelRequestLike = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
};

type VercelResponseLike = {
  status: (statusCode: number) => VercelResponseLike;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
  end: () => void;
};

function sendJson(response: VercelResponseLike, statusCode: number, body: unknown) {
  response.setHeader("Cache-Control", "no-store");
  response.status(statusCode).json(body);
}

function requestBody(request: VercelRequestLike) {
  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body) as unknown;
    } catch {
      return null;
    }
  }

  return request.body ?? null;
}

export default async function handler(request: VercelRequestLike, response: VercelResponseLike) {
  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { status: "error", error: "method_not_allowed" });
    return;
  }

  const env = serverEnv();
  const body = requestBody(request);

  if (!body) {
    sendJson(response, 400, { status: "error", error: "invalid_json" });
    return;
  }

  const validation = validateBookingPayload(body);
  if (!validation.ok) {
    sendJson(response, 400, { status: "error", errors: validation.errors });
    return;
  }

  try {
    const calStarts = await getAvailableCalStarts(env, validation.data.date, validation.data.date);
    const requestedStart = slotStartUtcIso(validation.data.date, validation.data.slotId);

    if (!calStarts.has(requestedStart)) {
      sendJson(response, 409, { status: "error", error: "slot_unavailable" });
      return;
    }

    const booking = await createCalBooking(env, validation.data);
    const data = booking.data ?? {};

    sendJson(response, 200, {
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

    sendJson(response, status, {
      status: "error",
      error: message
    });
  }
}

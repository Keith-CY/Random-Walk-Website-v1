import {
  createCalBooking,
  getAvailableCalStarts,
  serverEnv,
  slotStartUtcIso,
  validateBookingPayload
} from "../../server/meet-cal";

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

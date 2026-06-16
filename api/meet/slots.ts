import {
  buildSlotAvailabilityForDate,
  dateRange,
  getAvailableCalStarts,
  serverEnv
} from "../../server/meet-cal";

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

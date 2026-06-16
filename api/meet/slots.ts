import {
  buildSlotAvailabilityForDate,
  dateRange,
  getAvailableCalStarts,
  serverEnv
} from "../../server/meet-cal";

type VercelRequestLike = {
  method?: string;
  url?: string;
  headers: Record<string, string | string[] | undefined>;
};

type VercelResponseLike = {
  status: (statusCode: number) => VercelResponseLike;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
  end: () => void;
};

function firstHeaderValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

function requestUrl(request: VercelRequestLike) {
  const host = firstHeaderValue(request.headers["x-forwarded-host"]) || firstHeaderValue(request.headers.host) || "random-walk.co.jp";
  const protocol = firstHeaderValue(request.headers["x-forwarded-proto"]) || "https";
  return new URL(request.url || "/", `${protocol}://${host}`);
}

function sendJson(response: VercelResponseLike, statusCode: number, body: unknown) {
  response.setHeader("Cache-Control", "no-store");
  response.status(statusCode).json(body);
}

export default async function handler(request: VercelRequestLike, response: VercelResponseLike) {
  const env = serverEnv();

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, { status: "error", error: "method_not_allowed" });
    return;
  }

  const url = requestUrl(request);
  const start = url.searchParams.get("start") || new Date().toISOString().slice(0, 10);
  const end = url.searchParams.get("end") || start;

  try {
    const calStarts = await getAvailableCalStarts(env, start, end);
    const days = dateRange(start, end).map((date) => ({
      date,
      slots: buildSlotAvailabilityForDate(date, calStarts)
    }));

    sendJson(response, 200, {
      status: "success",
      days
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

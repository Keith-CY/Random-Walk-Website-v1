import {
  buildSlotAvailabilityForDate,
  dateRange,
  getAvailableCalStarts,
  jsonResponse,
  optionsResponse,
  serverEnv
} from "../../server/meet-cal";

async function handleGet(request: Request) {
  const env = serverEnv();
  const url = new URL(request.url);
  const start = url.searchParams.get("start") || new Date().toISOString().slice(0, 10);
  const end = url.searchParams.get("end") || start;

  try {
    const calStarts = await getAvailableCalStarts(env, start, end);
    const days = dateRange(start, end).map((date) => ({
      date,
      slots: buildSlotAvailabilityForDate(date, calStarts)
    }));

    return jsonResponse(request, env, {
      status: "success",
      days
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    const status = message.startsWith("missing_") ? 503 : 502;

    return jsonResponse(
      request,
      env,
      {
        status: "error",
        error: message
      },
      status
    );
  }
}

const slotsFunction = {
  async fetch(request: Request) {
    if (request.method === "OPTIONS") {
      return optionsResponse(request, serverEnv());
    }

    if (request.method !== "GET") {
      return jsonResponse(request, serverEnv(), { status: "error", error: "method_not_allowed" }, 405);
    }

    return handleGet(request);
  }
};

export default slotsFunction;

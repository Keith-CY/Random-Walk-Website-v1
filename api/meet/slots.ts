import {
  buildSlotAvailabilityForDate,
  dateRange,
  getAvailableCalStarts,
  jsonResponse,
  optionsResponse,
  serverEnv
} from "../../server/meet-cal";

export function OPTIONS(request: Request) {
  return optionsResponse(request, serverEnv());
}

export async function GET(request: Request) {
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

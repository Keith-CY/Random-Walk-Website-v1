import {
  buildSlotAvailabilityForDate,
  dateRange,
  getAvailableCalStarts,
  jsonResponse,
  nodeRequestToWeb,
  type NodeRequestLike,
  type NodeResponseLike,
  optionsResponse,
  sendWebResponse,
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

export default async function handler(request: NodeRequestLike, response: NodeResponseLike) {
  const webRequest = nodeRequestToWeb(request);

  if (webRequest.method === "OPTIONS") {
    await sendWebResponse(response, optionsResponse(webRequest, serverEnv()));
    return;
  }

  if (webRequest.method !== "GET") {
    await sendWebResponse(response, jsonResponse(webRequest, serverEnv(), { status: "error", error: "method_not_allowed" }, 405));
    return;
  }

  await sendWebResponse(response, await handleGet(webRequest));
}

import {
  createCalBooking,
  getAvailableCalStarts,
  jsonResponse,
  optionsResponse,
  serverEnv,
  slotStartUtcIso,
  validateBookingPayload
} from "../../server/meet-cal";

async function handlePost(request: Request) {
  const env = serverEnv();
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(request, env, { status: "error", error: "invalid_json" }, 400);
  }

  const validation = validateBookingPayload(body);
  if (!validation.ok) {
    return jsonResponse(request, env, { status: "error", errors: validation.errors }, 400);
  }

  try {
    const calStarts = await getAvailableCalStarts(env, validation.data.date, validation.data.date);
    const requestedStart = slotStartUtcIso(validation.data.date, validation.data.slotId);

    if (!calStarts.has(requestedStart)) {
      return jsonResponse(request, env, { status: "error", error: "slot_unavailable" }, 409);
    }

    const booking = await createCalBooking(env, validation.data);
    const data = booking.data ?? {};

    return jsonResponse(request, env, {
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

const bookFunction = {
  async fetch(request: Request) {
    if (request.method === "OPTIONS") {
      return optionsResponse(request, serverEnv());
    }

    if (request.method !== "POST") {
      return jsonResponse(request, serverEnv(), { status: "error", error: "method_not_allowed" }, 405);
    }

    return handlePost(request);
  }
};

export default bookFunction;

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addDaysIso,
  addMonthsToMonthKey,
  findMeetSlot,
  formatMeetSlot,
  getMonthGrid,
  getNextSelectableMeetDateIso,
  getTokyoTodayIso,
  isSelectableMeetDate,
  meetPageCopy,
  meetSlots,
  meetTimeZone,
  monthKeyFromIso,
  validateMeetRequest,
  type MeetSlotId
} from "@/lib/meet";
import type { Locale } from "@/lib/i18n";

type SlotAvailability = Partial<Record<MeetSlotId, boolean>>;
type AvailabilityByDate = Record<string, SlotAvailability>;

type MeetSchedulerProps = {
  locale: Locale;
  pageOrigin: string;
  apiBase: string;
  allowMock: boolean;
  officeAddress: string;
  mapsUrl: string;
};

type Confirmation = {
  uid: string;
  date: string;
  slotId: MeetSlotId;
  name: string;
  email: string;
};

const localeTags: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR"
};

function firstDayOfMonth(monthKey: string) {
  return `${monthKey}-01`;
}

function lastDayOfMonth(monthKey: string) {
  return addDaysIso(firstDayOfMonth(addMonthsToMonthKey(monthKey, 1)), -1);
}

function normalizeApiBase(apiBase: string) {
  return apiBase.trim().replace(/\/$/, "");
}

function formatDate(dateIso: string, locale: Locale) {
  return new Intl.DateTimeFormat(localeTags[locale], {
    timeZone: meetTimeZone,
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(new Date(`${dateIso}T12:00:00+09:00`));
}

function formatMonth(monthKey: string, locale: Locale) {
  return new Intl.DateTimeFormat(localeTags[locale], {
    timeZone: meetTimeZone,
    month: "long",
    year: "numeric"
  }).format(new Date(`${monthKey}-01T12:00:00+09:00`));
}

function fieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function MeetScheduler({ locale, pageOrigin, apiBase, allowMock, officeAddress, mapsUrl }: MeetSchedulerProps) {
  const copy = meetPageCopy[locale];
  const todayIso = useMemo(() => getTokyoTodayIso(), []);
  const initialDate = useMemo(() => getNextSelectableMeetDateIso(todayIso), [todayIso]);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedSlotId, setSelectedSlotId] = useState<MeetSlotId | null>(null);
  const [visibleMonth, setVisibleMonth] = useState(monthKeyFromIso(initialDate));
  const [availability, setAvailability] = useState<AvailabilityByDate>({});
  const [availabilityStatus, setAvailabilityStatus] = useState<"loading" | "loaded" | "mock" | "error">("loading");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "error">("idle");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const normalizedApiBase = normalizeApiBase(apiBase);
  const monthDays = useMemo(() => getMonthGrid(visibleMonth), [visibleMonth]);
  const errorSet = useMemo(() => new Set(formErrors), [formErrors]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadAvailability() {
      if (!normalizedApiBase) {
        setAvailabilityStatus(allowMock ? "mock" : "error");
        return;
      }

      setAvailabilityStatus("loading");

      try {
        const params = new URLSearchParams({
          start: firstDayOfMonth(visibleMonth),
          end: lastDayOfMonth(visibleMonth),
          locale
        });
        const response = await fetch(`${normalizedApiBase}/slots?${params.toString()}`, {
          headers: { Accept: "application/json" },
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Slot lookup failed: ${response.status}`);
        }

        const body = (await response.json()) as {
          days?: Array<{ date: string; slots: SlotAvailability }>;
        };
        const nextAvailability: AvailabilityByDate = {};

        for (const day of body.days ?? []) {
          nextAvailability[day.date] = day.slots;
        }

        setAvailability(nextAvailability);
        setAvailabilityStatus("loaded");
      } catch {
        if (controller.signal.aborted) return;
        if (allowMock) {
          setAvailability({});
          setAvailabilityStatus("mock");
          return;
        }
        setAvailabilityStatus("error");
      }
    }

    void loadAvailability();

    return () => controller.abort();
  }, [allowMock, locale, normalizedApiBase, visibleMonth]);

  function slotAvailable(slotId: MeetSlotId) {
    const slot = findMeetSlot(slotId);
    if (!isSelectableMeetDate(selectedDate, todayIso) || slot.policy !== "bookable") return false;
    if (availabilityStatus === "loading" || availabilityStatus === "error") return false;
    if (availabilityStatus === "loaded") return availability[selectedDate]?.[slotId] === true;
    const remote = availability[selectedDate]?.[slotId];
    return remote !== false;
  }

  function selectDate(dateIso: string) {
    if (!isSelectableMeetDate(dateIso, todayIso)) return;
    setSelectedDate(dateIso);
    setSelectedSlotId(null);
    setFormErrors([]);
    setSubmitStatus("idle");
  }

  function selectSlot(slotId: MeetSlotId) {
    if (!slotAvailable(slotId)) return;
    setSelectedSlotId(slotId);
    setFormErrors([]);
    setSubmitStatus("idle");
  }

  function fieldErrorProps(field: string) {
    if (!errorSet.has(field)) return {};
    return {
      "aria-invalid": true,
      "aria-describedby": `meet-${field}-error`
    };
  }

  function FieldError({ field }: { field: string }) {
    if (!errorSet.has(field)) return null;
    return (
      <p className="rw-field-error" id={`meet-${field}-error`}>
        {copy.form.fieldError}
      </p>
    );
  }

  async function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedSlotId) {
      setFormErrors(["slotId"]);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      date: selectedDate,
      slotId: selectedSlotId,
      name: fieldValue(formData, "name"),
      email: fieldValue(formData, "email"),
      phone: fieldValue(formData, "phone"),
      message: fieldValue(formData, "message"),
      locale,
      pageOrigin,
      timeZone: meetTimeZone
    };
    const result = validateMeetRequest(payload, todayIso);

    if (!result.ok) {
      setFormErrors(result.errors);
      setSubmitStatus("error");
      return;
    }

    if (!normalizedApiBase && !allowMock) {
      setFormErrors(["form"]);
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("sending");
    setFormErrors([]);

    try {
      if (!normalizedApiBase) {
        throw new Error("No booking endpoint configured.");
      }

      const response = await fetch(`${normalizedApiBase}/book`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Booking failed: ${response.status}`);
      }

      const body = (await response.json()) as { booking?: { uid?: string } };
      setConfirmation({
        uid: body.booking?.uid ?? "confirmed",
        date: result.data.date,
        slotId: result.data.slotId,
        name: result.data.name,
        email: result.data.email
      });
      form.reset();
      setSubmitStatus("idle");
    } catch {
      if (allowMock) {
        setConfirmation({
          uid: `preview-${Date.now().toString(36)}`,
          date: result.data.date,
          slotId: result.data.slotId,
          name: result.data.name,
          email: result.data.email
        });
        form.reset();
        setSubmitStatus("idle");
        return;
      }

      setSubmitStatus("error");
      setFormErrors(["form"]);
    }
  }

  if (confirmation) {
    const slot = findMeetSlot(confirmation.slotId);
    return (
      <div className="rw-meet-card rw-meet-confirmation" role="status" aria-live="polite">
        <p className="rw-eyebrow">{copy.confirmation.reference}: {confirmation.uid}</p>
        <h2 className="rw-heading mt-4">{copy.confirmation.title}</h2>
        <p className="rw-body-large mt-5">{copy.confirmation.body}</p>
        <div className="rw-meet-confirmation-summary mt-8">
          <div>
            <span>{formatDate(confirmation.date, locale)}</span>
            <strong>{formatMeetSlot(slot)}</strong>
          </div>
          <div>
            <span>{confirmation.name}</span>
            <strong>{confirmation.email}</strong>
          </div>
        </div>
        <button
          className="rw-button rw-button-secondary mt-8"
          type="button"
          onClick={() => {
            setConfirmation(null);
            setSelectedSlotId(null);
          }}
        >
          {copy.confirmation.another}
        </button>
      </div>
    );
  }

  return (
    <div className="rw-meet-card">
      <div className="rw-meet-shell">
        <section className="rw-meet-calendar-panel" aria-labelledby="meet-date-title">
          <div className="rw-meet-panel-header">
            <div>
              <p className="rw-eyebrow">{copy.calendar.title}</p>
              <h2 id="meet-date-title">{formatMonth(visibleMonth, locale)}</h2>
            </div>
            <div className="rw-meet-month-controls">
              <button
                type="button"
                aria-label={copy.calendar.previous}
                onClick={() => setVisibleMonth((current) => addMonthsToMonthKey(current, -1))}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-label={copy.calendar.next}
                onClick={() => setVisibleMonth((current) => addMonthsToMonthKey(current, 1))}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="rw-meet-weekdays" aria-hidden="true">
            {copy.calendar.weekdays.map((weekday, index) => (
              <span key={`${weekday}-${index}`}>{weekday}</span>
            ))}
          </div>

          <div className="rw-meet-days">
            {monthDays.map((day, index) => {
              if (!day) return <span key={`blank-${index}`} className="rw-meet-day rw-meet-day-empty" aria-hidden="true" />;

              const selectable = isSelectableMeetDate(day.dateIso, todayIso);
              const selected = day.dateIso === selectedDate;

              return (
                <button
                  key={day.dateIso}
                  className="rw-meet-day"
                  type="button"
                  data-selected={selected ? "true" : undefined}
                  data-unavailable={!selectable ? "true" : undefined}
                  disabled={!selectable}
                  aria-label={`${formatDate(day.dateIso, locale)}${selected ? `, ${copy.calendar.selected}` : ""}`}
                  onClick={() => selectDate(day.dateIso)}
                >
                  <span>{day.day}</span>
                </button>
              );
            })}
          </div>
        </section>

        <aside className="rw-meet-side-panel">
          <section aria-labelledby="meet-time-title">
            <div className="rw-meet-panel-header">
              <div>
                <p className="rw-eyebrow">{copy.slots.title}</p>
                <h2 id="meet-time-title">{formatDate(selectedDate, locale)}</h2>
              </div>
              <span className="rw-meet-sync" data-state={availabilityStatus}>
                {meetTimeZone}
              </span>
            </div>

            <div className="rw-meet-slots" role="list">
              {meetSlots.map((slot) => {
                const selected = selectedSlotId === slot.id;
                const available = slotAvailable(slot.id);
                const status = selected
                  ? copy.slots.status.selected
                  : slot.policy === "blocked"
                    ? copy.slots.status.notOffered
                    : available
                      ? copy.slots.status.available
                      : copy.slots.status.unavailable;

                return (
                  <button
                    key={slot.id}
                    className="rw-meet-slot"
                    type="button"
                    role="listitem"
                    data-selected={selected ? "true" : undefined}
                    disabled={!available}
                    onClick={() => selectSlot(slot.id)}
                  >
                    <span>{formatMeetSlot(slot)}</span>
                    <strong>{status}</strong>
                  </button>
                );
              })}
            </div>
          </section>

          <form className="rw-meet-form" onSubmit={submitRequest} noValidate>
            <div className="rw-meet-form-header">
              <p className="rw-eyebrow">{copy.form.title}</p>
              <p>{selectedSlotId ? formatMeetSlot(findMeetSlot(selectedSlotId)) : copy.slots.status.available}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-2">
                <span>{copy.form.name}</span>
                <input className="rw-field" name="name" placeholder={copy.form.namePlaceholder} required {...fieldErrorProps("name")} />
                <FieldError field="name" />
              </label>
              <label className="grid gap-2">
                <span>{copy.form.email}</span>
                <input className="rw-field" name="email" type="email" placeholder={copy.form.emailPlaceholder} required {...fieldErrorProps("email")} />
                <FieldError field="email" />
              </label>
            </div>

            <label className="grid gap-2">
              <span>{copy.form.phone}</span>
              <input className="rw-field" name="phone" type="tel" placeholder={copy.form.phonePlaceholder} />
            </label>

            <label className="grid gap-2">
              <span>{copy.form.message}</span>
              <textarea className="rw-field min-h-28" name="message" placeholder={copy.form.messagePlaceholder} required {...fieldErrorProps("message")} />
              <FieldError field="message" />
            </label>

            {errorSet.has("slotId") ? <p className="rw-field-error">{copy.form.fieldError}</p> : null}
            {submitStatus === "error" && errorSet.has("form") ? <p className="rw-form-status rw-form-status-error">{copy.form.error}</p> : null}

            <button className="rw-button rw-button-primary" type="submit" disabled={!selectedSlotId || submitStatus === "sending"}>
              {submitStatus === "sending" ? copy.form.submitting : copy.form.submit}
            </button>
          </form>
        </aside>
      </div>

      <div className="rw-meet-address">
        <span>{copy.address.label}</span>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          {officeAddress}
        </a>
        <a className="rw-text-link" href={mapsUrl} target="_blank" rel="noreferrer">
          {copy.address.maps} -&gt;
        </a>
      </div>
    </div>
  );
}

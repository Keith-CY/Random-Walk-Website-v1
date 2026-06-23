import { describe, expect, test } from "bun:test";
import {
  getEarliestMeetDateIso,
  getNextSelectableMeetDateIso,
  isSelectableMeetDate,
  meetPageCopy,
  meetSlotStartUtcIso,
  validateMeetRequest
} from "./meet";

describe("meet scheduling rules", () => {
  test("uses a fixed two-day JST lead time", () => {
    expect(getEarliestMeetDateIso("2026-06-16")).toBe("2026-06-18");
    expect(isSelectableMeetDate("2026-06-17", "2026-06-16")).toBe(false);
    expect(isSelectableMeetDate("2026-06-18", "2026-06-16")).toBe(true);
  });

  test("skips weekends while preserving the two-day minimum", () => {
    expect(isSelectableMeetDate("2026-06-20", "2026-06-16")).toBe(false);
    expect(getNextSelectableMeetDateIso("2026-06-18")).toBe("2026-06-22");
  });

  test("accepts only afternoon visit slots", () => {
    const accepted = validateMeetRequest(
      {
        date: "2026-06-18",
        slotId: "early-afternoon",
        name: "Ada Lovelace",
        email: "ada@example.com",
        phone: "+81 90 0000 0000",
        message: "We would like to visit and discuss a private model workflow.",
        locale: "en"
      },
      "2026-06-16"
    );
    expect(accepted.ok).toBe(true);

    const rejected = validateMeetRequest(
      {
        date: "2026-06-18",
        slotId: "morning",
        name: "Ada Lovelace",
        email: "ada@example.com",
        message: "Morning should look occupied, not bookable.",
        locale: "en"
      },
      "2026-06-16"
    );
    expect(rejected.ok).toBe(false);
    if (!rejected.ok) {
      expect(rejected.errors).toContain("slotId");
    }
  });

  test("labels fixed morning closure as not offered instead of booked", () => {
    expect(meetPageCopy.en.slots.status.notOffered).toBe("Not offered");
    expect(Object.values(meetPageCopy.en.slots.status)).not.toContain("Booked");
  });

  test("labels reserved afternoon visit slots as scheduled", () => {
    expect(meetPageCopy.en.slots.status.scheduled).toBe("Scheduled");
    expect(meetPageCopy.zh.slots.status.scheduled).toBe("已预约");
    expect(meetPageCopy.ja.slots.status.scheduled).toBe("予約済み");
    expect(meetPageCopy.ko.slots.status.scheduled).toBe("예약됨");
  });

  test("converts JST visit starts to UTC for Cal.com", () => {
    expect(meetSlotStartUtcIso("2026-06-18", "early-afternoon")).toBe("2026-06-18T05:00:00.000Z");
    expect(meetSlotStartUtcIso("2026-06-18", "late-afternoon")).toBe("2026-06-18T07:00:00.000Z");
  });
});

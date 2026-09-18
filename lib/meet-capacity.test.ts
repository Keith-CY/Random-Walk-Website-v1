import { describe, expect, test } from "bun:test";
import { getMeetCapacityHoldsForDate, isMeetCapacityHeld, meetCapacityHolds } from "./meet-capacity";

describe("meet capacity holds", () => {
  test("holds exactly 44 slots across October and November 2026", () => {
    expect(meetCapacityHolds).toHaveLength(44);
    expect(new Set(meetCapacityHolds.map(({ date, slotId }) => `${date}:${slotId}`)).size).toBe(44);
    expect(meetCapacityHolds.every(({ date }) => date >= "2026-10-01" && date <= "2026-11-30")).toBe(true);
  });

  test("uses only weekday bookable slots", () => {
    for (const hold of meetCapacityHolds) {
      const weekday = new Date(`${hold.date}T12:00:00+09:00`).getUTCDay();
      expect(weekday).not.toBe(0);
      expect(weekday).not.toBe(6);
      expect(["early-afternoon", "late-afternoon"]).toContain(hold.slotId);
    }
  });

  test("exposes holds without any visitor identity or internal description", () => {
    expect(isMeetCapacityHeld("2026-10-01", "early-afternoon")).toBe(true);
    expect(isMeetCapacityHeld("2026-10-01", "late-afternoon")).toBe(false);
    expect(getMeetCapacityHoldsForDate("2026-10-21")).toEqual({
      "early-afternoon": true,
      "late-afternoon": true
    });
  });
});

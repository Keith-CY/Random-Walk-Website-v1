export type MeetCapacitySlotId = "early-afternoon" | "late-afternoon";

export type MeetCapacityHold = {
  date: string;
  slotId: MeetCapacitySlotId;
};

export const meetCapacityHolds = [
  { date: "2026-10-01", slotId: "early-afternoon" },
  { date: "2026-10-02", slotId: "early-afternoon" },
  { date: "2026-10-16", slotId: "late-afternoon" },
  { date: "2026-10-19", slotId: "early-afternoon" },
  { date: "2026-10-20", slotId: "early-afternoon" },
  { date: "2026-10-21", slotId: "early-afternoon" },
  { date: "2026-10-21", slotId: "late-afternoon" },
  { date: "2026-10-22", slotId: "early-afternoon" },
  { date: "2026-10-23", slotId: "early-afternoon" },
  { date: "2026-10-26", slotId: "early-afternoon" },
  { date: "2026-10-26", slotId: "late-afternoon" },
  { date: "2026-10-27", slotId: "early-afternoon" },
  { date: "2026-10-28", slotId: "early-afternoon" },
  { date: "2026-10-29", slotId: "early-afternoon" },
  { date: "2026-10-29", slotId: "late-afternoon" },
  { date: "2026-10-30", slotId: "early-afternoon" },
  { date: "2026-11-02", slotId: "early-afternoon" },
  { date: "2026-11-03", slotId: "early-afternoon" },
  { date: "2026-11-03", slotId: "late-afternoon" },
  { date: "2026-11-04", slotId: "early-afternoon" },
  { date: "2026-11-05", slotId: "early-afternoon" },
  { date: "2026-11-06", slotId: "early-afternoon" },
  { date: "2026-11-06", slotId: "late-afternoon" },
  { date: "2026-11-09", slotId: "early-afternoon" },
  { date: "2026-11-10", slotId: "early-afternoon" },
  { date: "2026-11-11", slotId: "early-afternoon" },
  { date: "2026-11-11", slotId: "late-afternoon" },
  { date: "2026-11-12", slotId: "early-afternoon" },
  { date: "2026-11-13", slotId: "early-afternoon" },
  { date: "2026-11-16", slotId: "early-afternoon" },
  { date: "2026-11-16", slotId: "late-afternoon" },
  { date: "2026-11-17", slotId: "early-afternoon" },
  { date: "2026-11-18", slotId: "early-afternoon" },
  { date: "2026-11-19", slotId: "early-afternoon" },
  { date: "2026-11-19", slotId: "late-afternoon" },
  { date: "2026-11-20", slotId: "early-afternoon" },
  { date: "2026-11-23", slotId: "early-afternoon" },
  { date: "2026-11-24", slotId: "early-afternoon" },
  { date: "2026-11-24", slotId: "late-afternoon" },
  { date: "2026-11-25", slotId: "early-afternoon" },
  { date: "2026-11-26", slotId: "early-afternoon" },
  { date: "2026-11-27", slotId: "early-afternoon" },
  { date: "2026-11-27", slotId: "late-afternoon" },
  { date: "2026-11-30", slotId: "early-afternoon" }
] as const satisfies readonly MeetCapacityHold[];

const meetCapacityHoldKeys = new Set(meetCapacityHolds.map(({ date, slotId }) => `${date}:${slotId}`));

export function isMeetCapacityHeld(date: string, slotId: string) {
  return meetCapacityHoldKeys.has(`${date}:${slotId}`);
}

export function getMeetCapacityHoldsForDate(date: string) {
  return {
    "early-afternoon": isMeetCapacityHeld(date, "early-afternoon"),
    "late-afternoon": isMeetCapacityHeld(date, "late-afternoon")
  };
}

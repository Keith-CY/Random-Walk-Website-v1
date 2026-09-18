import { describe, expect, test } from "bun:test";
import { buildCalBookingFieldsResponses, calGoogleMeetLocation } from "./cal-booking";

describe("Cal.com booking fields", () => {
  test("always selects Google Meet as the attendee location", () => {
    expect(
      buildCalBookingFieldsResponses(false, {
        message: "Melix project consultation",
        phone: "",
        officeAddress: ""
      })
    ).toEqual({
      location: {
        optionValue: calGoogleMeetLocation
      }
    });
  });

  test("preserves the optional consultation fields", () => {
    expect(
      buildCalBookingFieldsResponses(true, {
        message: "AI and FDE consultation",
        phone: "+81 90 0000 0000",
        officeAddress: "Tokyo"
      })
    ).toEqual({
      location: {
        optionValue: "integrations:google:meet"
      },
      message: "AI and FDE consultation",
      phone: "+81 90 0000 0000",
      office_address: "Tokyo"
    });
  });
});

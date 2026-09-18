export const calGoogleMeetLocation = "integrations:google:meet";

type CalBookingFieldsInput = {
  message: string;
  phone: string;
  officeAddress: string;
};

export function buildCalBookingFieldsResponses(
  includeCustomFields: boolean,
  input: CalBookingFieldsInput
) {
  return {
    location: {
      optionValue: calGoogleMeetLocation
    },
    ...(includeCustomFields
      ? {
          message: input.message,
          phone: input.phone,
          office_address: input.officeAddress
        }
      : {})
  };
}

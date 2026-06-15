# Random Walk Website v1

Fresh SSG rebuild for Random Walk using Next.js App Router, Tailwind CSS, and repository-owned MDX content.

## Local Commands

```sh
bun install
bun test lib/contact-schema.test.ts lib/content.test.ts
bun run lint
bun run build
bun dev
```

The production build uses `output: "export"` and emits a static site under `out/`.

## Environment

- `NEXT_PUBLIC_SITE_URL`: canonical production origin.
- `NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT`: optional contact form endpoint.
- `NEXT_PUBLIC_MEET_API_BASE`: booking API base for the hidden `/meet` page. Defaults to `/api/meet`.
- `NEXT_PUBLIC_MEET_OFFICE_ADDRESS`: public office address text shown on `/meet`.
- `NEXT_PUBLIC_MEET_MAP_URL`: public Google Maps link shown on `/meet`.
- `NEXT_PUBLIC_MEET_ALLOW_MOCK`: set to `true` only for preview environments that should confirm without a booking service.
- `GITHUB_TOKEN`: optional build-time token for refreshing public Melix repository metadata.

The contact form has no file upload field. When Formspree is not configured, it opens a prefilled email draft instead.

## Meeting Page Service

The hidden `/meet` page keeps the Random Walk UI and calls a same-origin booking service. This repository includes Vercel Functions under `api/meet/*` for Cal.com API-only integration, so the Cal.com API key stays server-side.

Required function environment variables:

- `CAL_API_KEY`: Cal.com API key. Never expose this as `NEXT_PUBLIC_*`.
- `CAL_EVENT_TYPE_ID`: preferred Cal.com event type ID for office visits. This is still required after adding `CAL_API_KEY`.
- `CAL_EVENT_TYPE_SLUG` plus `CAL_USERNAME` or `CAL_TEAM_SLUG`: alternative to `CAL_EVENT_TYPE_ID`.
- `CAL_ORGANIZATION_SLUG`: optional, only when the event type belongs to an organization.
- `MEET_OFFICE_ADDRESS`: office address stored with booking metadata.
- `MEET_ALLOWED_ORIGIN`: optional CORS allowlist origin if the API is hosted away from the website domain.

Cal.com event setup:

- Event duration should be 120 minutes.
- Time zone should be fixed to JST.
- Weekends should be unavailable.
- The morning block should remain unavailable in Cal.com. The site still renders `10:00-12:00` as occupied.
- Add booking questions with slugs `message` and `phone`, or set `CAL_MEET_INCLUDE_BOOKING_FIELDS=false` to submit only attendee details and metadata.

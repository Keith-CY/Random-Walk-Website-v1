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
- `GITHUB_TOKEN`: optional build-time token for refreshing public Melix repository metadata.

The contact form has no file upload field. When Formspree is not configured, it opens a prefilled email draft instead.

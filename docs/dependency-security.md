# Dependency Security Notes

Checked before introducing third-party dependencies.

## Policy

- Keep runtime dependencies limited to `next`, `react`, and `react-dom`.
- Avoid UI libraries, icon libraries, animation libraries, form libraries, and MDX runtime dependencies.
- Use SSG via `next.config.ts` `output: "export"` and no server routes.
- Keep content parsing constrained to repository-owned MDX/frontmatter.

## Selected Versions

| Package | Version | Reason |
|---|---:|---|
| `next` | `15.5.16` | Patched 15.x line for the late-2025 RSC RCE and May 2026 RSC DoS advisories; compatible with the local Bun runtime. |
| `react` / `react-dom` | `19.2.6` | Patched React release line for the May 2026 React Server Components DoS advisory. |
| `tailwindcss` / `@tailwindcss/postcss` | `4.1.17` | Tailwind 4 build-time styling with no runtime UI dependency. |

## Sources Checked

- GitHub Advisory Database: `GHSA-9qr9-h5gf-34mp`, React Server Components RCE affecting earlier React/Next combinations; patched Next.js lines include `15.5.7` and React patched lines include `19.2.1`.
- GitHub Advisory Database: `GHSA-rv78-f8rc-xrxh`, React Server Components denial of service fixed in React Server Components packages `19.2.6`.
- GitHub Advisory Database: `GHSA-8h8q-6873-q5fj`, Next.js denial of service fixed in `15.5.16` and `16.2.5`; project uses `15.5.16`.
- Package registry metadata for `tailwindcss` and `@tailwindcss/postcss` `4.1.17`; no runtime dependency is introduced for styling.

## Remaining Practice

Run package audit tooling in CI when available. This project uses Bun locally, but Bun `1.1.8` does not expose an audit command in this environment, so advisory checks were done manually before dependency introduction.

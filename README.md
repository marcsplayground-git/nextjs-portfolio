# Marc Jason Yu portfolio

Next.js and Tailwind source for the existing marcjasonyu.com portfolio. The November 19 refresh keeps the current design and navigation, updates experience and skills, and presents four anonymized delivered projects with short summaries. Architecture illustrations are high-level workflow overviews, not production captures.

## Local development

Use Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run build
npx tsc --noEmit
npm run start -- --hostname 127.0.0.1
```

In another terminal, check the running production build:

```sh
node scripts/check-portfolio.mjs http://127.0.0.1:3000
```

The check verifies the six pages, four project cards, confirmed copy, SVG diagrams, permanent redirect from the old URM detail page, and 404 responses for all 16 retired production screenshot URLs.

## Retired content and deployment

The former URM detail page redirects to `/projects#unified-request-management`. Its screenshots and gallery components were preserved locally under `archives/2026-11-19/` with their original relative paths; archived TypeScript files have `.txt` appended. This directory is ignored by Git and is outside Next.js public assets. Existing Git history and any already-deployed copies were not rewritten or removed.

Contact-link changes, metadata, social previews, new demo builds and public demo repositories are excluded from this refresh. Deployment to the existing Vercel project requires separate approval; pushing the production branch may trigger deployment.

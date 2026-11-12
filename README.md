# xdev.asia

The public website of xDev: who we are, the apps, and the pages that apply to all of them.

| Page | English | Tiếng Việt |
|---|---|---|
| Home | `/` | `/vi/` |
| Brand | `/brand/` | `/vi/brand/` |
| Terms of Use | `/terms/` | `/vi/terms/` |
| Privacy Policy | `/privacy/` | `/vi/privacy/` |
| Support | `/support/` | `/vi/support/` |

English is the default. Each language has its own URL, so a store listing can link to one language.

## Stack

React 19, Vite and [`@xdev-asia/ui`](https://github.com/xdev-asia/xdev-ui) (SiteShell, Prose, Card, Grid, Select).
`npm run build` runs `vite build`, then `scripts/routes.mjs` writes one `index.html` per route and language, so
every URL answers 200 on a static host. No cookies, no analytics, no web fonts from other hosts.

## Edit

- Text: `src/content/en.ts` and `src/content/vi.ts`. Both follow `src/content/types.ts`; keep them in step.
- A new app: add it to `home.apps`, to the Privacy Policy (its own section) and to Support, in both languages.
- Change the terms or the policy: also change the effective date (`UPDATED`) in both files.

## Run

```bash
NODE_AUTH_TOKEN=<token with read:packages> npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
```

## Deploy

`.github/workflows/pages.yml` builds and deploys to GitHub Pages on a push to `main`. `public/CNAME` sets the
domain to `xdev.asia`.

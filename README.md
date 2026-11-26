# xdev.asia

The personal site of Trần Đức Duy (Duy Tran) and xDev: who he is, his personas, the apps, writing, and the pages that apply to every app.

| Page | English | Tiếng Việt |
|---|---|---|
| Home | `/` | `/vi/` |
| Brand | `/brand/` | `/vi/brand/` |
| Terms of Use | `/terms/` | `/vi/terms/` |
| Privacy Policy | `/privacy/` | `/vi/privacy/` |
| Support | `/support/` | `/vi/support/` |
| Delete Say It OK account | `/delete-account/` | `/vi/delete-account/` |
| Hungi (product page) | `/app/hungi-ai/` | `/vi/app/hungi-ai/` |

English is the default. Each language has its own URL, so a store listing can link to one language.

## Stack

React 19 and Vite, in the design system of the tasteskill kit (2.5.1, MIT): its plain CSS and JS are copied
unchanged into `public/assets` (`system.css`, `system.js`, `ui/`, `motion/`, `layout/`, `moments/`, `effects/`,
`backgrounds/`, `icons/`) and loaded as files. Never edit those copies; page CSS lives in `src/site.css`.

`npm run build` runs `vite build`, then `scripts/routes.mjs` renders every route and language with React
(`src/ssr.tsx`) into its own `index.html`, so each URL answers 200 on a static host with the whole page in the
HTML, and adds the kit's scripts after the markup. `npm run dev` renders the route in the browser instead.
No cookies, no analytics; the fonts (Mona Sans, Geist Mono) are served from this site (`public/assets/fonts`).

## Edit

- Text: `src/content/en.ts` and `src/content/vi.ts`. Both follow `src/content/types.ts`; keep them in step.
- A new app: add it to `home.apps` (and its card in `src/pages/Home.tsx`), to the Privacy Policy (its own section) and to Support, in both languages.
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

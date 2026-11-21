// After `vite build`: write one index.html per route and language, prerendered with React, so every URL answers
// 200 on a static host with its whole page in the HTML (readable without script), its own <title>,
// description, share tags and lang, and the tasteskill kit's scripts after the markup.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");

// Load the TypeScript content, routes and the renderer through Vite, so titles and pages have one source.
const vite = await createServer({ root, server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const { en } = await vite.ssrLoadModule("/src/content/en.ts");
const { vi } = await vite.ssrLoadModule("/src/content/vi.ts");
const { PAGES, LANGS, hrefFor } = await vite.ssrLoadModule("/src/routes.ts");
const { KIT_SCRIPTS, pageKind } = await vite.ssrLoadModule("/src/kit.ts");
const { render } = await vite.ssrLoadModule("/src/ssr.tsx");
await vite.close();

const SITE = "https://xdev.asia";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
// React 19 hoists a <link rel="preload" as="image"> for every eager <img> to the front of the markup; on a
// static page they would sit in <body> before the header, so they go (the images load from their tags).
const markup = (lang, name) => render(lang, name).replace(/<link rel="preload" as="image"[^>]*\/>/g, "");
const kit = KIT_SCRIPTS.map((src) => `<script type="module" src="${src}"></script>`).join("\n    ");

function page(lang, name, meta, url) {
  const html = shell
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}" data-page="${pageKind(name)}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, url ? `$1${SITE}${url}$2` : "$1$2")
    .replace("<!--app-html-->", `${markup(lang, name)}\n    ${kit}`);
  // the 404 page has no canonical address
  return url ? html : html.replace(/\s*<link rel="canonical" href="">/, "");
}

const content = { en, vi };
let count = 0;
for (const lang of LANGS) {
  for (const name of PAGES) {
    const url = hrefFor(name, lang);
    const file = join(dist, url, "index.html");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page(lang, name, content[lang].meta[name], url));
    count++;
  }
}
// GitHub Pages serves 404.html, with status 404, for unknown paths.
writeFileSync(join(dist, "404.html"), page("en", null, en.meta.notFound, ""));
console.log(`routes: ${count} pages + 404.html`);

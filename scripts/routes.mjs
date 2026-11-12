// After `vite build`: write one index.html per route and language, so every URL answers 200 on a
// static host, with its own <title>, description and lang. The page content is rendered in the browser.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");

// Load the TypeScript content and routes through Vite, so titles have one source.
const vite = await createServer({ root, server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const { en } = await vite.ssrLoadModule("/src/content/en.ts");
const { vi } = await vite.ssrLoadModule("/src/content/vi.ts");
const { PAGES, LANGS, hrefFor } = await vite.ssrLoadModule("/src/routes.ts");
await vite.close();

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const page = (lang, meta) =>
  shell
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`);

const content = { en, vi };
let count = 0;
for (const lang of LANGS) {
  for (const name of PAGES) {
    const file = join(dist, hrefFor(name, lang), "index.html");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page(lang, content[lang].meta[name]));
    count++;
  }
}
// GitHub Pages serves 404.html, with status 404, for unknown paths.
writeFileSync(join(dist, "404.html"), page("en", en.meta.notFound));
console.log(`routes: ${count} pages + 404.html`);

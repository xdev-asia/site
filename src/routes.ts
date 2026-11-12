export type Lang = "en" | "vi";
export type PageName = "home" | "brand" | "terms" | "privacy" | "support";

export const LANGS: Lang[] = ["en", "vi"];
export const PAGES: PageName[] = ["home", "brand", "terms", "privacy", "support"];

/** English lives at the root ("/terms/"), Vietnamese under "/vi/" ("/vi/terms/"). */
export function hrefFor(page: PageName, lang: Lang): string {
  const base = lang === "en" ? "/" : `/${lang}/`;
  return page === "home" ? base : `${base}${page}/`;
}

/** Pure: "/vi/terms/" -> { lang: "vi", page: "terms" }; an unknown path has page null. */
export function matchRoute(pathname: string): { lang: Lang; page: PageName | null } {
  const parts = pathname.split("/").filter(Boolean);
  const lang: Lang = parts[0] === "vi" ? "vi" : "en";
  if (lang === "vi") parts.shift();
  if (parts.length === 0) return { lang, page: "home" };
  const page = parts.length === 1 ? PAGES.find((p) => p !== "home" && p === parts[0]) : undefined;
  return { lang, page: page ?? null };
}

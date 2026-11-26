export type Lang = "en" | "vi";
export type PageName = "home" | "brand" | "terms" | "privacy" | "support" | "delete-account" | "hungi";

export const LANGS: Lang[] = ["en", "vi"];
export const PAGES: PageName[] = ["home", "brand", "terms", "privacy", "support", "delete-account", "hungi"];

/** The path of a page under its language, when it is not the page's own name: an app's page lives under "app/". */
const PATHS: Partial<Record<PageName, string>> = { hungi: "app/hungi-ai" };
const pathOf = (page: PageName): string => PATHS[page] ?? page;

/** English lives at the root ("/terms/"), Vietnamese under "/vi/" ("/vi/terms/"). */
export function hrefFor(page: PageName, lang: Lang): string {
  const base = lang === "en" ? "/" : `/${lang}/`;
  return page === "home" ? base : `${base}${pathOf(page)}/`;
}

/** Pure: "/vi/terms/" -> { lang: "vi", page: "terms" }; an unknown path has page null. */
export function matchRoute(pathname: string): { lang: Lang; page: PageName | null } {
  const parts = pathname.split("/").filter(Boolean);
  const lang: Lang = parts[0] === "vi" ? "vi" : "en";
  if (lang === "vi") parts.shift();
  if (parts.length === 0) return { lang, page: "home" };
  const path = parts.join("/");
  const page = PAGES.find((p) => p !== "home" && pathOf(p) === path);
  return { lang, page: page ?? null };
}

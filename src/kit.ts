/**
 * The tasteskill kit's scripts, loaded from public/assets as plain files after the page's markup exists
 * (nav, phone sheet, fragments, moments: system.js; hover and entrance: motion.js; the hero's loop: layout.js).
 */
export const KIT_SCRIPTS = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

/** <html data-page>: the page kind, for the page CSS of the home, brand and text pages. */
export function pageKind(page: string | null): "home" | "brand" | "doc" {
  return page === "home" ? "home" : page === "brand" ? "brand" : "doc";
}

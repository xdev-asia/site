import { renderToStaticMarkup } from "react-dom/server";
import { App } from "./App";
import type { Lang, PageName } from "./routes";

/** The markup of one route, for scripts/routes.mjs. */
export function render(lang: Lang, page: PageName | null): string {
  return renderToStaticMarkup(<App lang={lang} page={page} />);
}

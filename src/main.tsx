import "./site.css";
import { KIT_SCRIPTS, pageKind } from "./kit";

/**
 * In a build every route is prerendered (scripts/routes.mjs), so the page is already in the HTML and the kit's
 * scripts are in it too. Under `vite dev` the shell is empty: render the route here, then load the kit.
 */
if (!document.querySelector("body > main")) {
  const [{ createRoot }, { flushSync }, { App }, { matchRoute }] = await Promise.all([
    import("react-dom/client"),
    import("react-dom"),
    import("./App"),
    import("./routes"),
  ]);
  const { lang, page } = matchRoute(window.location.pathname);
  document.documentElement.lang = lang;
  document.documentElement.dataset.page = pageKind(page);
  const host = document.createElement("div");
  host.style.display = "contents";
  document.body.prepend(host);
  flushSync(() => createRoot(host).render(<App lang={lang} page={page} />));
  for (const src of KIT_SCRIPTS) {
    const s = document.createElement("script");
    s.type = "module";
    s.src = src;
    document.body.append(s);
  }
}

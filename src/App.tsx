import { en } from "./content/en";
import { vi } from "./content/vi";
import type { Content } from "./content/types";
import { Frame } from "./Frame";
import { Brand } from "./pages/Brand";
import { DocPage } from "./pages/DocPage";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import type { Lang, PageName } from "./routes";

export const CONTENT: Record<Lang, Content> = { en, vi };

/** One route's markup: the bar, main and footer.closing. scripts/routes.mjs renders it to HTML at build time. */
export function App({ lang, page }: { lang: Lang; page: PageName | null }) {
  const c = CONTENT[lang];
  return (
    <Frame c={c} lang={lang} page={page}>
      {page === "home" ? (
        <Home c={c} />
      ) : page === "brand" ? (
        <Brand c={c} />
      ) : page === null ? (
        <NotFound c={c} lang={lang} />
      ) : (
        <DocPage doc={c[page]} contentsLabel={c.nav.contents} />
      )}
    </Frame>
  );
}

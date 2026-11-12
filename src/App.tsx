import { useEffect } from "react";
import { Button, EmptyState } from "@xdev-asia/ui";
import { en } from "./content/en";
import { vi } from "./content/vi";
import type { Content } from "./content/types";
import { DocPage } from "./pages/DocPage";
import { Home } from "./pages/Home";
import { hrefFor, matchRoute, type Lang } from "./routes";
import { Shell } from "./Shell";

const CONTENT: Record<Lang, Content> = { en, vi };

export function App() {
  const { lang, page } = matchRoute(window.location.pathname);
  const c = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = c.meta[page ?? "notFound"].title;
    // The page renders after the browser's first jump to the hash; jump again.
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, [lang, page, c]);

  return (
    <Shell c={c} lang={lang} page={page}>
      {page === "home" ? (
        <Home c={c} />
      ) : page === null ? (
        <EmptyState
          title={c.notFound.title}
          hint={c.notFound.body}
          actions={<Button href={hrefFor("home", lang)}>{c.notFound.home}</Button>}
        />
      ) : (
        <DocPage doc={c[page]} contentsLabel={c.nav.contents} />
      )}
    </Shell>
  );
}

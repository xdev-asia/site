import { useEffect, type ReactNode } from "react";
import { BrandMark, Select, SiteShell, applyTheme, resolveTheme, systemPrefersDark, watchSystemTheme } from "@xdev-asia/ui";
import type { Content } from "./content/types";
import { hrefFor, type Lang, type PageName } from "./routes";

/** Native names: each language is labelled in itself, whatever the active language. */
const LANG_OPTIONS = [
  { value: "en", label: "English" },
  { value: "vi", label: "Tiếng Việt" },
];

/** Theme follows prefers-color-scheme through data-theme on <html>, using xdev-ui helpers. */
function useSystemTheme(): void {
  useEffect(() => {
    if (!window.matchMedia) return;
    const mm = window.matchMedia.bind(window);
    const paint = (dark: boolean) => applyTheme(document.documentElement, resolveTheme("system", dark));
    paint(systemPrefersDark(mm));
    return watchSystemTheme(mm, paint);
  }, []);
}

interface ShellProps {
  c: Content;
  lang: Lang;
  /** The page shown, or null on the not-found page. */
  page: PageName | null;
  children: ReactNode;
}

/** Frame of every page: brand, section links, language switch and the legal footer. */
export function Shell({ c, lang, page, children }: ShellProps) {
  useSystemTheme();
  const links: { page: PageName; label: string }[] = [
    { page: "terms", label: c.nav.terms },
    { page: "privacy", label: c.nav.privacy },
    { page: "support", label: c.nav.support },
  ];
  return (
    <SiteShell
      size="lg"
      brand={
        <a href={hrefFor("home", lang)}>
          <BrandMark variant="mark" size={24} />
          <span>xDev</span>
        </a>
      }
      actions={
        <>
          <nav className="site-nav" aria-label="xDev">
            {links.map((l) => (
              <a key={l.page} href={hrefFor(l.page, lang)} aria-current={l.page === page ? "page" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>
          <Select
            icon="globe"
            options={LANG_OPTIONS}
            value={lang}
            onChange={(e) => {
              // Each language has its own URL; keep the page and the section.
              window.location.assign(hrefFor(page ?? "home", e.target.value as Lang) + window.location.hash);
            }}
            aria-label={c.nav.lang}
          />
        </>
      }
      links={links.map((l) => ({ href: hrefFor(l.page, lang), label: l.label }))}
      linksLabel={c.nav.legal}
      footer={<span>{c.footer}</span>}
    >
      {children}
    </SiteShell>
  );
}

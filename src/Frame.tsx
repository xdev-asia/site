import type { ReactNode } from "react";
import type { Content } from "./content/types";
import { hrefFor, type Lang, type PageName } from "./routes";

/** The xDev logo v12 (the client's own SVG), the name beside it in the display face. */
const LOGO = "/assets/brand/xdev-mark-tile.svg";
export const MAIL = "mailto:duy@xdev.asia";

/** The drawn arrow of the primary button (motion.md): its last child. */
export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

interface FrameProps {
  c: Content;
  lang: Lang;
  /** The page shown, or null on the not-found page. */
  page: PageName | null;
  children: ReactNode;
}

/**
 * Every page: the fixed bar (nav-centre), main, and footer.closing (close-word, footer-dark).
 * On the home page the nav words go to its sections; elsewhere to the same sections on the home page.
 */
export function Frame({ c, lang, page, children }: FrameProps) {
  const home = hrefFor("home", lang);
  const onHome = page === "home";
  const sec = (id: string) => (onHome ? `#${id}` : `${home}#${id}`);
  const other: Lang = lang === "en" ? "vi" : "en";
  const words: { id: string; label: string }[] = [
    { id: "apps", label: c.nav.apps },
    { id: "work", label: c.nav.work },
    { id: "personas", label: c.nav.personas },
    { id: "writing", label: c.nav.writing },
  ];
  const logo = (lazy: boolean) => (
    <a className="nav__logo" href={onHome ? "#top" : home}>
      <img src={LOGO} alt="" width={24} height={24} loading={lazy ? "lazy" : undefined} />
      xDev
    </a>
  );
  return (
    <>
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">
            {c.nav.skip}
          </a>
          {logo(false)}
          <nav className="nav__links" aria-label={c.nav.main}>
            {words.map((w) => (
              <div key={w.id} className="nav__item">
                <a className="nav__link" href={sec(w.id)}>
                  {w.label}
                </a>
              </div>
            ))}
          </nav>
          <div className="nav__actions">
            <a className="nav__link" href={hrefFor(page ?? "home", other)} hrefLang={other} lang={other}>
              {c.nav.otherLang}
            </a>
            <a className="btn btn--primary" href={MAIL}>
              {c.nav.email}
            </a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label={c.nav.menu}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">{children}</main>

      <footer className="footer closing footer--dark ground-inverse g2m" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--word">
            <div className="section-head--split">
              <div>
                <h2 id="close-h">{c.home.close.title}</h2>
                <p className="t-lead">{c.home.close.line}</p>
              </div>
              <a className="btn btn--primary" href={MAIL}>
                {c.nav.email}
                <Arrow />
              </a>
            </div>
            <p className="close__word" lang="vi" aria-hidden="true">
              Trần Đức Duy
            </p>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                {logo(true)}
                <p className="footer__lede">{c.footer.lede}</p>
              </div>
              <div className="span-2 start-7 footer__col">
                <h3>{c.footer.appsTitle}</h3>
                <ul>
                  <li>
                    <a href={sec("apps")}>Say It OK</a>
                  </li>
                  <li>
                    <a href="https://ui.xdev.asia">xDev UI</a>
                  </li>
                  <li>
                    <a href="https://github.com/tdduydev/ml-nhin-la-hieu">ML nhìn là hiểu</a>
                  </li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>{c.footer.xdevTitle}</h3>
                <ul>
                  <li>
                    <a href={hrefFor("brand", lang)}>{c.nav.brand}</a>
                  </li>
                  <li>
                    <a href={hrefFor("support", lang)}>{c.nav.support}</a>
                  </li>
                  <li>
                    <a href={hrefFor("delete-account", lang)}>{c.nav.deleteAccount}</a>
                  </li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>{c.footer.contactTitle}</h3>
                <ul>
                  <li>
                    <a href="https://github.com/tdduydev">GitHub</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/duydev">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/duydev/">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span>
                © 2026 xDev &nbsp; <a href={hrefFor("privacy", lang)}>{c.nav.privacy}</a> &nbsp;{" "}
                <a href={hrefFor("terms", lang)}>{c.nav.terms}</a>
              </span>
              <span>{c.footer.trademarks}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

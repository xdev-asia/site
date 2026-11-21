import type { Doc } from "../content/types";
import { Blocks } from "../Rich";

/**
 * A long text page (terms, privacy, support, delete account). Google Play and the App Store link here, so it
 * keeps every section in full: one readable column at 62 characters, the contents beside it on a desktop.
 * It is the one page kind that runs longer than two screens (house rule 3 is for the home page's sections).
 */
export function DocPage({ doc, contentsLabel }: { doc: Doc; contentsLabel: string }) {
  return (
    <section className="section doc" aria-labelledby="doc-h">
      <div className="wrap">
        <div className="grid doc__grid">
          <nav className="span-3 doc__toc" aria-label={contentsLabel}>
            <p className="t-label muted">{contentsLabel}</p>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="span-8 start-5 doc__body">
            <h1 id="doc-h">{doc.title}</h1>
            <p className="t-small muted doc__stamp">{doc.stamp}</p>
            <p className="t-lead doc__summary">{doc.summary}</p>
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`}>{s.title}</h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

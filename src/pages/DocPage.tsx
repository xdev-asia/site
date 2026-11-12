import { Prose } from "@xdev-asia/ui";
import type { Doc } from "../content/types";
import { Blocks } from "../Rich";

/** A long text page (terms, privacy, support): contents on the side, numbered sections. */
export function DocPage({ doc, contentsLabel }: { doc: Doc; contentsLabel: string }) {
  return (
    <div className="doc">
      <nav className="doc-toc" aria-label={contentsLabel}>
        <p>{contentsLabel}</p>
        <ol>
          {doc.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      <Prose as="article" className="doc-body">
        <h1>{doc.title}</h1>
        <p className="doc-stamp">{doc.stamp}</p>
        <p className="doc-summary">{doc.summary}</p>
        {doc.sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2>{s.title}</h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}
      </Prose>
    </div>
  );
}

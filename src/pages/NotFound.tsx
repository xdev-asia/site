import type { Content } from "../content/types";
import { hrefFor, type Lang } from "../routes";

export function NotFound({ c, lang }: { c: Content; lang: Lang }) {
  return (
    <section className="section doc doc--short" aria-labelledby="nf-h">
      <div className="wrap">
        <div className="measure stack-4">
          <h1 id="nf-h">{c.notFound.title}</h1>
          <p className="t-lead">{c.notFound.body}</p>
          <p>
            <a className="link" href={hrefFor("home", lang)}>
              {c.notFound.home}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

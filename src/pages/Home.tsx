import type { Content } from "../content/types";
import { Inline } from "../Rich";

/** Personal home: Duy, his personas, what he works on, the apps, writing and contact. */
export function Home({ c }: { c: Content }) {
  const h = c.home;
  return (
    <>
      <section className="me" aria-labelledby="me-name">
        <div className="me-grid" aria-hidden="true" />
        <div className="me-text">
          <p className="me-eyebrow">{h.eyebrow}</p>
          <h1 id="me-name">{h.name}</h1>
          <p className="me-alias">{h.alias}</p>
          <p className="me-role">{h.role}</p>
          <p className="me-lede">
            <Inline text={h.lede} />
          </p>
          <p className="me-ctas">
            {h.ctas.map((a) => (
              <a key={a.href} href={a.href} className={a.primary ? "btn btn-primary" : "btn"}>
                {a.label}
              </a>
            ))}
          </p>
          <dl className="me-facts">
            {h.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="me-portrait">
          <img src={h.portrait.src} alt={h.portrait.alt} width={640} height={800} />
        </figure>
      </section>

      <section className="sec" aria-labelledby="personas">
        <header className="sec-head">
          <h2 id="personas">{h.personasTitle}</h2>
          <p>{h.personasIntro}</p>
        </header>
        <ul className="personas">
          {h.personas.map((p) => (
            <li key={p.name} className="persona" data-tone={p.tone}>
              <img src={p.img} alt="" width={344} height={405} loading="lazy" />
              <div className="persona-text">
                <h3>{p.name}</h3>
                <p className="persona-role">{p.role}</p>
                <p>{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec" aria-labelledby="work">
        <header className="sec-head">
          <h2 id="work">{h.workTitle}</h2>
        </header>
        <ul className="work">
          {h.work.map((w, i) => (
            <li key={w.title}>
              <span className="work-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec" aria-labelledby="apps">
        <header className="sec-head">
          <h2 id="apps">{h.appsTitle}</h2>
        </header>
        <ul className="apps">
          {h.apps.map((app) => (
            <li key={app.name} className="app">
              <div className="app-head">
                {app.icon ? (
                  <img src={app.icon} alt="" width={48} height={48} />
                ) : (
                  <span className="app-glyph" aria-hidden="true">
                    {app.glyph}
                  </span>
                )}
                <div>
                  <h3>{app.name}</h3>
                  <p className="app-platform">{app.platform}</p>
                </div>
              </div>
              <p className="app-body">{app.body}</p>
              <p className="app-links">
                {app.links.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec" aria-labelledby="writing">
        <header className="sec-head">
          <h2 id="writing">{h.writingTitle}</h2>
        </header>
        <ul className="writing">
          {h.writing.map((w) => (
            <li key={w.href}>
              <a href={w.href}>
                <span className="writing-title">{w.title}</span>
                <span className="writing-source">{w.source} ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec contact" aria-labelledby="contact">
        <header className="sec-head">
          <h2 id="contact">{h.contactTitle}</h2>
          <p>{h.contactIntro}</p>
        </header>
        <ul className="contact-list">
          {h.contact.map((x) => (
            <li key={x.href}>
              <a href={x.href}>
                <span>{x.label}</span>
                <strong>{x.value}</strong>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

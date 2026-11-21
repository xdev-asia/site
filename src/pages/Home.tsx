import { Button, Card, Grid, StatTile } from "@xdev-asia/ui";
import type { Content } from "../content/types";
import { Inline } from "../Rich";

/**
 * Personal home in the xDev look (xdev-ui-design): graphite surfaces, 1px hairlines, one blue accent for the
 * main action, Roboto with JetBrains Mono for labels and numbers. Pictures carry the colour; the frame stays quiet.
 */
export function Home({ c }: { c: Content }) {
  const h = c.home;
  return (
    <>
      <section className="me" aria-labelledby="me-name">
        <div className="me-text">
          <p className="me-eyebrow">{h.eyebrow}</p>
          <h1 id="me-name">{h.name}</h1>
          <p className="me-role">
            <span>{h.role}</span>
            <span className="me-alias">{h.alias}</span>
          </p>
          <p className="me-lede">
            <Inline text={h.lede} />
          </p>
          <div className="me-ctas">
            {h.ctas.map((a) => (
              <Button
                key={a.href}
                href={a.href}
                variant={a.primary ? "primary" : "secondary"}
                icon={a.href.startsWith("http") ? "arrow-up-right" : a.primary ? "arrow-right" : undefined}
              >
                {a.label}
              </Button>
            ))}
          </div>
        </div>
        <figure className="me-portrait">
          <img src={h.portrait.src} alt={h.portrait.alt} width={800} height={1000} />
        </figure>
      </section>

      <section className="me-facts" aria-label={h.name}>
        {h.facts.map((f) => (
          <StatTile key={f.label} label={f.label} value={f.value} />
        ))}
      </section>

      <Section id="personas" label="01" title={h.personasTitle} intro={h.personasIntro}>
        <ul className="personas">
          {h.personas.map((p) => (
            <li key={p.name} className="persona">
              <img src={p.img} alt="" width={344} height={405} loading="lazy" />
              <div className="persona-text">
                <h3>{p.name}</h3>
                <p className="persona-role">{p.role}</p>
                <p className="persona-body">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="work" label="02" title={h.workTitle}>
        <ol className="work">
          {h.work.map((w) => (
            <li key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="apps" label="03" title={h.appsTitle}>
        <Grid minItemWidth="13.5rem" gap={4}>
          {h.apps.map((app) => (
            <Card key={app.name} className="app">
              <div className="app-head">
                {app.icon ? (
                  <img src={app.icon} alt="" width={40} height={40} />
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
            </Card>
          ))}
        </Grid>
      </Section>

      <Section id="writing" label="04" title={h.writingTitle}>
        <ul className="rows">
          {h.writing.map((w) => (
            <li key={w.href}>
              <a href={w.href}>
                <span className="row-main">{w.title}</span>
                <span className="row-meta">{w.source}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" label="05" title={h.contactTitle} intro={h.contactIntro}>
        <ul className="rows rows-contact">
          {h.contact.map((x) => (
            <li key={x.href}>
              <a href={x.href}>
                <span className="row-meta">{x.label}</span>
                <span className="row-main">{x.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Section({ id, label, title, intro, children }: { id: string; label: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section className="sec" aria-labelledby={id}>
      <header className="sec-head">
        <p className="sec-label" aria-hidden="true">
          {label}
        </p>
        <h2 id={id}>{title}</h2>
        {intro ? <p className="sec-intro">{intro}</p> : null}
      </header>
      {children}
    </section>
  );
}

import { Card, Grid } from "@xdev-asia/ui";
import type { Content } from "../content/types";
import { Inline } from "../Rich";

export function Home({ c }: { c: Content }) {
  const h = c.home;
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">{h.eyebrow}</p>
        <h1>
          {h.headline}
          <span className="hero-cursor" aria-hidden="true" />
        </h1>
        <p className="hero-lede">{h.lede}</p>
      </section>

      <section className="band" aria-labelledby="about">
        <h2 id="about">{h.aboutTitle}</h2>
        <div className="band-body">
          {h.about.map((p, i) => (
            <p key={i}>
              <Inline text={p} />
            </p>
          ))}
        </div>
      </section>

      <section className="band" aria-labelledby="apps">
        <h2 id="apps">{h.appsTitle}</h2>
        <Grid minItemWidth="300px" gap={4}>
          {h.apps.map((app) => (
            <Card key={app.name} className="app-card">
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
            </Card>
          ))}
        </Grid>
      </section>

      <section className="band" aria-labelledby="principles">
        <h2 id="principles">{h.principlesTitle}</h2>
        <dl className="principles">
          {h.principles.map((p) => (
            <div key={p.title}>
              <dt>{p.title}</dt>
              <dd>{p.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="band" aria-labelledby="contact">
        <h2 id="contact">{h.contactTitle}</h2>
        <div className="band-body">
          {h.contact.map((p, i) => (
            <p key={i}>
              <Inline text={p} />
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

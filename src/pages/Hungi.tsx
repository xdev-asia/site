import type { CSSProperties, ReactNode } from "react";
import type { Content, HungiFeature } from "../content/types";
import { Arrow } from "../Frame";
import { Inline } from "../Rich";
import { hrefFor, type Lang } from "../routes";

/*
  The product page of Hungi, at /app/hungi-ai/. It is a flowing page like the brand page (its sections are as
  tall as their content), in the app's own colours ("Biển xanh": pastel sky ground, ink text, royal blue;
  set for <html data-page="app"> in site.css), because its pictures are the app's daylight scenes.
  The app is not on a store yet: the page has no store button, only the line "coming soon".
*/

/** The pictures (drawn for this page, 3:2) and the mascot poses (the app's own files). */
const DIR = "/assets/hungi/page";

/** The four skills, always in this order, in the app's four skill colours (app/src/skills.ts). */
const SKILL_COLOURS = ["#ff6b5b", "#2f6bff", "#22c79a", "#ffc93c"];

/** A drawn scene in its frame: 768 and 1536 wide, the browser picks by the frame's width. */
function Scene({ name, alt, subject, eager, sizes = "(min-width: 1024px) 50vw, 100vw" }: { name: string; alt: string; subject: string; eager?: boolean; sizes?: string }) {
  return (
    <img
      className="frame__img"
      src={`${DIR}/${name}-1536.webp`}
      srcSet={`${DIR}/${name}-768.webp 768w, ${DIR}/${name}-1536.webp 1536w`}
      sizes={sizes}
      alt={alt}
      width={1536}
      height={1024}
      loading={eager ? undefined : "lazy"}
      data-source="client"
      data-subject={subject}
    />
  );
}

/** The four skill colours as one band, as under a lesson in the app. */
function SkillBand() {
  return (
    <span className="hungi-band" aria-hidden="true">
      {SKILL_COLOURS.map((c) => (
        <i key={c} style={{ background: c }} />
      ))}
    </span>
  );
}

/** One part of the page: the words left, its scene right; stacked below 1024. */
function Feature({ id, f, picture, subject, children }: { id: string; f: HungiFeature; picture: string; subject: string; children?: ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 hungi-words">
            <h2 id={`${id}-h`}>{f.title}</h2>
            <p className="t-lead">{f.body}</p>
            <ul className="checks">
              {f.points.map((p, i) => (
                <li key={i}>
                  <span>
                    <Inline text={p} />
                  </span>
                </li>
              ))}
            </ul>
            {children}
          </div>
          <div className="frame frame--photo span-6 start-7 hungi-scene">
            <Scene name={picture} alt={f.alt} subject={subject} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hungi({ c, lang }: { c: Content; lang: Lang }) {
  const h = c.hungi;
  return (
    <>
      <section className="hero hero--split hungi-hero" data-enter aria-labelledby="hungi-h">
        <div className="wrap">
          <div className="hero-text grid hero__grid">
            <div className="hero__text span-5">
              <p className="hero__kicker hungi-soon">
                <img src="/assets/hungi/icon.png" alt="" width={28} height={28} />
                {h.soon}
              </p>
              <h1 id="hungi-h">{h.name}</h1>
              <p className="hungi-method">
                <SkillBand />
                {h.method}
              </p>
              <p className="hero__lead">{h.lead}</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#skills">
                  {h.seeInside}
                  <Arrow />
                </a>
              </div>
            </div>
            <div className="hero__media span-6 start-7">
              {/* cropped to the hero's height, so it needs more pixels than its width says */}
              <Scene name="hero" alt={h.heroAlt} subject="Hungi listens to a learner by the sea, drawn scene" eager sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-h">
        <div className="wrap">
          <div className="grid grid--top">
            <div className="span-7 hungi-words">
              <h2 id="about-h">{h.intro.title}</h2>
              <p className="t-lead">{h.intro.body}</p>
            </div>
            <img className="span-3 start-10 hungi-mascot" src={`${DIR}/hungi-hello.webp`} alt="" width={600} height={600} loading="lazy" />
          </div>
          <dl className="grid hungi-facts">
            {h.intro.facts.map((f) => (
              <div key={f.title} className="span-4">
                <dt className="t-card">{f.title}</dt>
                <dd>{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="skills-h">{h.skills.title}</h2>
            <p>{h.skills.body}</p>
          </div>
          <div className="frame frame--photo hungi-wide">
            <Scene name="four-skills" alt={h.skills.alt} subject="Hungi says, hears, reads and writes, drawn" sizes="100vw" />
          </div>
          <ol className="grid hungi-skills">
            {h.skills.items.map((s, i) => (
              <li key={s.name} className="span-3" style={{ "--skill": SKILL_COLOURS[i] } as CSSProperties}>
                <h3 className="t-card">{s.name}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="hungi-end">{h.skills.end}</p>
        </div>
      </section>

      <Feature id="call" f={h.call} picture="call" subject="A learner calls Hungi at home, drawn scene" />
      <Feature id="lookup" f={h.lookup} picture="lookup" subject="A learner photographs a menu board, drawn scene" />
      <Feature id="play" f={h.play} picture="play" subject="Hungi eats word tiles from his bowl, drawn" />

      <Feature id="course" f={h.path} picture="roadmap" subject="Seven terraces up to a lighthouse, drawn scene">
        <ol className="hungi-chips hungi-chips--stages" aria-label={h.path.title}>
          {h.path.stages.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <div className="stack-2">
          <h3 className="t-card">{h.path.packsTitle}</h3>
          <ul className="hungi-chips">
            {h.path.packs.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </Feature>

      <section className="section" id="plus" aria-labelledby="plus-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="plus-h">{h.plus.title}</h2>
            <p>{h.plus.body}</p>
          </div>
          <div className="grid hungi-plans">
            {h.plus.plans.map((p) => (
              <article key={p.name} className="card card--plan m-nolift span-3">
                <h3>{p.name}</h3>
                <p className="price">
                  <span className="t-stat">{p.price}</span>
                  {p.per ? <span className="t-small muted">{p.per}</span> : null}
                </p>
                <ul className="checks">
                  {p.lines.map((l) => (
                    <li key={l}>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="hungi-notes">
            {h.plus.notes.map((n, i) => (
              <p key={i} className="t-small">
                <Inline text={n} />
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="soon" aria-labelledby="soon-h">
        <div className="wrap">
          <div className="grid grid--top">
            <div className="span-5 hungi-words">
              <h2 id="soon-h">{h.more.title}</h2>
              <p className="t-lead">{h.more.body}</p>
              <p className="hungi-stores">
                <img className="ic ic-24 ic-ink" src="/assets/icons/apple.svg" alt="App Store" width={24} height={24} loading="lazy" />
                <img className="ic ic-24" src="/assets/icons/android.svg" alt="Google Play" width={24} height={24} loading="lazy" />
                <span>{h.soon}</span>
              </p>
            </div>
            <ul className="rows span-5 start-8 hungi-links">
              <li>
                <a className="link" href={`${hrefFor("privacy", lang)}#sayitok`}>
                  {h.more.privacy}
                </a>
              </li>
              <li>
                <a className="link" href={`${hrefFor("terms", lang)}#sayitok`}>
                  {h.more.terms}
                </a>
              </li>
              <li>
                <a className="link" href={hrefFor("support", lang)}>
                  {h.more.support}
                </a>
              </li>
              <li>
                <a className="link" href={hrefFor("delete-account", lang)}>
                  {h.more.deleteAccount}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

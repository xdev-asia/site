import type { Content } from "../content/types";
import { Arrow, MAIL } from "../Frame";
import { Inline } from "../Rich";

/*
  type: software (site-kind software: a studio selling its own software, around one person)
  deal: hero collage, palette: the client's own colours (start.mjs brand: the xDev icon ground #06080e, xDev
        blue #2f62e6; the dealt green-black-bone clashed with the brand rule "xDev blue is the accent of the
        interface"), type mona (Mona Sans + Geist Mono; host was dealt first but Host Grotesk has no
        Vietnamese glyphs), radius soft, nav-centre, footer-dark, close-word, rhythm dark-band, buttons
        tonal, mark: the client's own logo, ground sky, effect grain-gradient in the hero frame
  moments: counter-rolls (#work, the figures row), line-carries-colour (#personas, on the inverse ground)
*/

/** Real tool icons, in their own colours (icons.mjs). */
function Icon({ id, name, ink }: { id: string; name: string; ink?: boolean }) {
  return <img className={`ic ic-24${ink ? " ic-ink" : ""}`} src={`/assets/icons/${id}.svg`} alt={name} width={24} height={24} />;
}

export function Home({ c }: { c: Content }) {
  const h = c.home;
  const apps = h.apps.items;
  return (
    <>
      <section className="hero hero--collage" data-enter aria-labelledby="hero-h">
        <div className="wrap">
          <div className="hero-text grid hero__grid">
            <div className="hero__text span-5">
              <h1 id="hero-h">{h.title}</h1>
              <p className="hero__lead">{h.lead}</p>
              <div className="btn-row">
                <a className="btn btn--primary" href={MAIL}>
                  {c.nav.email}
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="#apps">
                  {c.nav.seeApps}
                </a>
              </div>
              <p className="hero__proof">{h.proof}</p>
            </div>
            <div className="hero__art span-6 start-7" data-fx="grain-gradient" data-fx-seed="31" role="img" aria-label={h.artLabel}>
              <SayItOkPhone />
              <TestCard />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="apps" aria-labelledby="apps-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="apps-h">
              {h.apps.title} <span className="muted">{h.apps.more}</span>
            </h2>
          </div>
          <div className="grid apps">
            <article className="card card--row span-4 m-nolift">
              <p className="apps__icons">
                <Icon id="apple" name="iOS" ink />
                <Icon id="android" name="Android" />
              </p>
              <h3>{apps.sayitok.title}</h3>
              <p>
                <Inline text={apps.sayitok.body} />
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div className="at-rise fit" style={{ "--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "32px", "--ay-sm": "24px" } as React.CSSProperties} data-ui-loop>
                    <TutorChat />
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row span-4 m-nolift">
              <p className="apps__icons">
                <Icon id="react" name="React" />
              </p>
              <h3>{apps.ui.title}</h3>
              <p>
                <Inline text={apps.ui.body} />
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div className="at-rise fit" style={{ "--fit-max": "340px", "--ax": "max(24px, 50% - 170px)", "--ay": "32px", "--ay-sm": "24px" } as React.CSSProperties}>
                    <Tokens />
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row span-4 m-nolift">
              <p className="apps__icons">
                <Icon id="python" name="Python" />
              </p>
              <h3>{apps.ml.title}</h3>
              <p>
                <Inline text={apps.ml.body} />
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div className="at-rise fit" style={{ "--fit-max": "440px", "--ax": "max(24px, 50% - 220px)", "--ay": "32px", "--ay-sm": "24px" } as React.CSSProperties}>
                    <LogisticFit />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 work__text">
              <h2 id="work-h">{h.work.title}</h2>
              <p className="t-lead">{h.work.body}</p>
              <p>
                <a className="link" href={h.work.link.href}>
                  {h.work.link.label}
                </a>
              </p>
            </div>
            <div className="frame frame--photo frame--split span-6 start-7">
              <img
                className="frame__img"
                src="/assets/duy/portrait.jpg"
                alt={h.work.portraitAlt}
                width={800}
                height={1000}
                loading="lazy"
                data-source="client"
                data-subject="Duy Tran, professional portrait"
              />
            </div>
          </div>
          <div className="grid work__figures" data-moment="counter-rolls">
            {h.work.figures.map((f) => (
              <div key={f.value} className="span-4">
                <p className="t-stat">{f.value}</p>
                <p className="t-small muted">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ground-inverse" id="personas" aria-labelledby="personas-h" data-moment="line-carries-colour" data-moment-opts='{"from": "base"}'>
        <div className="wrap">
          <div className="section-head">
            <h2 id="personas-h">
              {h.personas.title} <span className="muted">{h.personas.more}</span>
            </h2>
          </div>
          <ul className="grid personas">
            {h.personas.items.map((p, i) => (
              <li key={p.name} className="tile tile--portrait span-3">
                <div className="tile__media">
                  <img
                    src={`/assets/duy/persona-${i + 1}.jpg`}
                    alt={p.alt}
                    width={344}
                    height={405}
                    loading="lazy"
                    data-source="client"
                    data-subject={`${p.name}, persona art`}
                  />
                </div>
                <p className="t-card">{p.name}</p>
                <p className="t-small muted">{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="writing" aria-labelledby="writing-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 work__text">
              <h2 id="writing-h">{h.writing.title}</h2>
              <p className="t-lead">{h.writing.body}</p>
              <ul className="rows writing">
                {h.writing.items.map((w) => (
                  <li key={w.href}>
                    <a className="writing__link" href={w.href}>
                      <span className="rows__name">{w.title}</span>
                      <span className="rows__value">{w.source}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="frame frame--photo frame--split span-6 start-7">
              <img
                className="frame__img"
                src="/assets/duy/portrait-casual.jpg"
                alt={h.writing.photoAlt}
                width={800}
                height={1000}
                loading="lazy"
                data-source="client"
                data-subject="Duy Tran, casual portrait"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ the app pictures (live HTML) */

/** Say It OK's lesson screen on a phone: a sentence to repeat, scored word by word. The app's own words are Vietnamese. */
function SayItOkPhone() {
  const words: [string, "ok" | "near" | "miss"][] = [
    ["Could", "ok"],
    ["I", "ok"],
    ["have", "ok"],
    ["a", "ok"],
    ["window", "near"],
    ["seat,", "ok"],
    ["please?", "ok"],
  ];
  return (
    <div className="ly-piece ly-piece--main sio-phone" aria-hidden="true">
        <div className="sio-top">
          <img src="/assets/sayitok/icon.png" alt="" width={28} height={28} />
          <span className="sio-top__name">Say It OK</span>
          <span className="sio-top__chip">Nói theo</span>
        </div>
        <p className="sio-label">Gói chủ đề · Du lịch</p>
        <div className="sio-sentence">
          <p className="sio-sentence__en">
            {words.map(([w, s], i) => (
              <span key={i} className={`sio-w sio-w--${s}`}>
                {w}{" "}
              </span>
            ))}
          </p>
          <p className="sio-sentence__vi">Cho tôi một ghế cạnh cửa sổ được không?</p>
        </div>
        <div className="sio-score">
          <span className="sio-score__num">92</span>
          <span className="sio-score__txt">
            <b>Phát âm tốt</b>
            Nhấn mạnh âm đầu của <i>window</i>
          </span>
        </div>
        <div className="sio-mic">
          <span className="sio-wave">
            {Array.from({ length: 22 }, (_, i) => (
              <i key={i} style={{ "--v": `${[30, 55, 80, 45, 95, 60, 35, 70, 100, 50, 40, 85, 65, 30, 75, 55, 90, 45, 60, 35, 50, 25][i]}%` } as React.CSSProperties} />
            ))}
          </span>
          <span className="sio-mic__btn" />
        </div>
        <div className="sio-next">
          <p className="sio-label">Câu tiếp theo</p>
          <p className="sio-next__row">
            <span>Where is gate twelve?</span>
            <span className="sio-next__state">Đã nói</span>
          </p>
          <p className="sio-next__row">
            <span>How long is the flight?</span>
            <span className="sio-next__state sio-next__state--new">Mới</span>
          </p>
        </div>
    </div>
  );
}

/** The small card over the phone: a proficiency test result, its three steps arriving in turn (layout.js). */
function TestCard() {
  return (
    <div className="ly-piece ly-piece--note sio-card" aria-hidden="true" data-ly-steps="700">
      <div className="sio-card__row">
        <b>Kiểm tra trình độ</b>
        <span className="sio-chip" data-step data-step-at="4">
          B2
        </span>
      </div>
      <div className="sio-card__line" data-step>
        <i>✓</i>
        <span>
          Nghe <b>32 câu</b>
        </span>
      </div>
      <div className="sio-card__line" data-step>
        <i>✓</i>
        <span>
          Nói <b>12 câu</b>, chấm theo CEFR
        </span>
      </div>
      <div className="sio-card__line" data-step>
        <i>✓</i>
        <span>
          Điểm <b>455 / 600</b>
        </span>
      </div>
    </div>
  );
}

/** The AI tutor in Say It OK (chat fragment, rewritten). */
function TutorChat() {
  return (
    <div className="ui ui-panel ui-chat" data-ui="chat">
      <div className="ui-head">
        <span className="ui-agent" aria-hidden="true" />
        <div className="ui-title">Gia sư AI</div>
        <span className="ui-chat__online">Online</span>
        <span className="ui-spacer" />
      </div>
      <div className="ui-chat__body">
        <div className="ui-msg ui-msg--me" data-chat-q>
          <span className="ui-msg__text">Nói “cho tôi ghế cạnh cửa sổ” thế nào?</span>
        </div>
        <div className="ui-msg ui-msg--bot" data-chat-a>
          <span className="ui-agent ui-msg__av" aria-hidden="true" />
          <span className="ui-msg__col">
            <span className="ui-chat__answer">
              Thử câu này: <b>Could I have a window seat, please?</b> Nhấn vào <b>win</b>-dow.
            </span>
            <span className="ui-chat__srcs">
              <span className="ui-chat__src">
                <svg className="ui-icon" viewBox="0 0 16 16">
                  <path d="M4 2.5h5l3 3v8H4z" />
                  <path d="M9 2.5v3h3" />
                </svg>
                Gói chủ đề: Du lịch
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="ui-chat__input">
        <span className="ui-chat__ph">Nhắn cho gia sư</span>
        <span className="ui-chat__send" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/** xDev UI's real colour tokens (dark theme, from @xdev-asia/ui dist/tokens.css). */
function Tokens() {
  const rows: [string, string][] = [
    ["--x-color-accent", "#2f62e6"],
    ["--x-color-signal", "#5bd8ff"],
    ["--x-color-ok", "#4ade9b"],
    ["--x-color-warn", "#f2b544"],
    ["--x-color-danger", "#ff7a7a"],
    ["--x-color-surface", "#141d33"],
  ];
  return (
    <div className="ui ui-panel tok">
      <div className="tok__head">
        <img src="/assets/brand/systems/xdev-ui-icon.svg" alt="" width={20} height={20} />
        <span className="tok__title">tokens.css</span>
        <span className="ui-spacer" />
        <span className="tok__chip">@xdev-asia/ui</span>
      </div>
      <ul className="tok__rows">
        {rows.map(([name, value]) => (
          <li key={name}>
            <span className="tok__sw" style={{ background: value }} />
            <code>{name}</code>
            <span className="tok__val">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** ML nhìn là hiểu, scratch/ep03_logistic_regression.py, lines 66-73 as written (code fragment, rewritten). */
function LogisticFit() {
  return (
    <div className="ui ui-panel ui-code" data-ui="code">
      <div className="ui-code__tabs">
        <span className="ui-code__tab is-on">
          <i className="ui-code__lang">PY</i>ep03_logistic_regression.py
        </span>
        <span className="ui-spacer" />
      </div>
      <pre className="ui-code__pre">
        <code>
          <span className="ui-code__ln" data-n="66">
            {"    "}
            <span className="k">for</span> _ <span className="k">in</span> <span className="f">range</span>(steps):
          </span>
          {"\n"}
          <span className="ui-code__ln" data-n="67">
            {"        "}dw = db = <span className="n">0.0</span>
          </span>
          {"\n"}
          <span className="ui-code__ln" data-n="68">
            {"        "}
            <span className="k">for</span> x, y <span className="k">in</span> rows:
          </span>
          {"\n"}
          <span className="ui-code__ln is-mark" data-n="69">
            {"            "}err = <span className="f">sigmoid</span>(w * x + b) - y
          </span>
          {"\n"}
          <span className="ui-code__ln" data-n="70">
            {"            "}dw += err * x
          </span>
          {"\n"}
          <span className="ui-code__ln" data-n="71">
            {"            "}db += err
          </span>
          {"\n"}
          <span className="ui-code__ln" data-n="72" data-note="Đi một bước xuống dốc.">
            {"        "}w -= lr * dw / n
          </span>
          {"\n"}
          <span className="ui-code__ln" data-n="73">
            {"        "}b -= lr * db / n
          </span>
        </code>
      </pre>
      <div className="ui-code__hint" data-code-hint>
        <span className="ui-dot" />
        <span data-code-text>Sai số nhân với đặc trưng.</span>
      </div>
    </div>
  );
}

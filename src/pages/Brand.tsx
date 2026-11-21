import type { BrandContent, Content } from "../content/types";
import { Inline } from "../Rich";

/** The logo v12 files, copied from xdev-ui `assets/brand`. */
const DIR = "/assets/brand";

const VERSIONS: { key: keyof BrandContent["versions"]; file: string; ground: "dark" | "light"; size: number }[] = [
  { key: "icon", file: "xdev-icon.svg", ground: "dark", size: 96 },
  { key: "blue", file: "xdev-icon-blue.svg", ground: "dark", size: 96 },
  { key: "lit", file: "xdev-mark-lit.svg", ground: "dark", size: 104 },
  { key: "flat", file: "xdev-mark.svg", ground: "light", size: 104 },
  { key: "tile", file: "xdev-mark-tile.svg", ground: "dark", size: 32 },
];

/** Product names are the same in every language. Only systems that are public are listed here. */
const SYSTEMS: { key: keyof BrandContent["systems"]; name: string; file: string }[] = [
  { key: "xdev", name: "xDev", file: "xdev-icon.svg" },
  { key: "ui", name: "xDev UI", file: "systems/xdev-ui-icon.svg" },
];

/** Fixed brand colours: they do not follow the page, so they are literals here. */
const COLOURS: { key: keyof BrandContent["colours"]; paint: string; values: string }[] = [
  { key: "blue", paint: "#2f62e6", values: "#2f62e6 · #2453d6" },
  { key: "orange", paint: "#ff7a3d", values: "#ff7a3d" },
  { key: "you", paint: "linear-gradient(180deg, #b9cfff, #4f84ff 50%, #2f62e6 50%, #1a3db3)", values: "#b9cfff → #4f84ff · #2f62e6 → #1a3db3" },
  { key: "agent", paint: "linear-gradient(180deg, #ffc9a3, #ff8a4f 50%, #ff7a3d 50%, #d94e14)", values: "#ffc9a3 → #ff8a4f · #ff7a3d → #d94e14" },
  { key: "ground", paint: "linear-gradient(180deg, #171d33, #06080e)", values: "#171d33 → #06080e" },
  { key: "core", paint: "linear-gradient(180deg, #ffffff, #ffe2cc)", values: "#ffffff → #ffe2cc" },
];

/** The brand page: the logo files, the system marks, colours, type and rules, in the page's one system. */
export function Brand({ c }: { c: Content }) {
  const b = c.brand;
  return (
    <>
      <section className="section brand-intro" aria-labelledby="brand-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-7 stack-4">
              <h1 id="brand-h">{b.title}</h1>
              <p className="t-lead measure">{b.lede}</p>
            </div>
            <div className="span-4 start-9 brand-stage" data-tone="dark">
              <img src={`${DIR}/xdev-icon.svg`} alt="" width={168} height={168} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="logo">
        <div className="wrap">
          <div className="section-head">
            <h2 id="logo">{b.logoTitle}</h2>
          </div>
          <ul className="grid brand-versions">
            {VERSIONS.map((v) => (
              <li key={v.key} className="card m-nolift brand-version">
                <div className="brand-stage" data-tone={v.ground}>
                  <img src={`${DIR}/${v.file}`} alt="" width={v.size} height={v.size} />
                </div>
                <h3 className="t-card">{b.versions[v.key].name}</h3>
                <p>{b.versions[v.key].body}</p>
                <p>
                  <a className="link" href={`${DIR}/${v.file}`} download>
                    {b.download} · {v.file}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="systems">
        <div className="wrap">
          <div className="section-head">
            <h2 id="systems">{b.systemsTitle}</h2>
            <p>{b.systemsIntro}</p>
          </div>
          <div className="grid">
            {SYSTEMS.map((s) => (
              <article key={s.key} className="card m-nolift span-6 brand-system">
                <img src={`${DIR}/${s.file}`} alt="" width={64} height={64} />
                <div className="stack-2">
                  <h3 className="t-card">{s.name}</h3>
                  <p>{b.systems[s.key].body}</p>
                  <p className="muted">{b.systems[s.key].shape}</p>
                  <p>
                    <a className="link" href={`${DIR}/${s.file}`} download>
                      {b.download}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="colour">
        <div className="wrap">
          <div className="section-head">
            <h2 id="colour">{b.colourTitle}</h2>
          </div>
          <ul className="grid brand-swatches">
            {COLOURS.map((col) => (
              <li key={col.key} className="span-4 brand-swatch">
                <div className="brand-chip" style={{ background: col.paint }} />
                <h3 className="t-card">{b.colours[col.key].name}</h3>
                <code className="mono">{col.values}</code>
                <p>{b.colours[col.key].use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="type">
        <div className="wrap">
          <div className="grid brand-notes">
            <div className="span-4 stack-4">
              <h2 id="type">{b.typeTitle}</h2>
              {b.type.map((p, i) => (
                <p key={i}>
                  <Inline text={p} />
                </p>
              ))}
            </div>
            <div className="span-4 stack-4">
              <h2 id="rules">{b.rulesTitle}</h2>
              <ul className="brand-list">
                {b.rules.map((r, i) => (
                  <li key={i}>
                    <Inline text={r} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="span-4 stack-4">
              <h2 id="files">{b.filesTitle}</h2>
              {b.files.map((p, i) => (
                <p key={i}>
                  <Inline text={p} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

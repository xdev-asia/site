import { Card, Grid } from "@xdev-asia/ui";
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
  { key: "cleaner", name: "Cleaner for xDev", file: "systems/xdev-cleaner-icon.svg" },
  { key: "ui", name: "xDev UI", file: "systems/xdev-ui-icon.svg" },
];

/** Fixed brand colours: they do not follow the theme, so they are literals here. */
const COLOURS: { key: keyof BrandContent["colours"]; paint: string; values: string }[] = [
  { key: "blue", paint: "#2f62e6", values: "#2f62e6 · #2453d6" },
  { key: "orange", paint: "#ff7a3d", values: "#ff7a3d" },
  { key: "you", paint: "linear-gradient(180deg, #b9cfff, #4f84ff 50%, #2f62e6 50%, #1a3db3)", values: "#b9cfff → #4f84ff · #2f62e6 → #1a3db3" },
  { key: "agent", paint: "linear-gradient(180deg, #ffc9a3, #ff8a4f 50%, #ff7a3d 50%, #d94e14)", values: "#ffc9a3 → #ff8a4f · #ff7a3d → #d94e14" },
  { key: "ground", paint: "linear-gradient(180deg, #171d33, #06080e)", values: "#171d33 → #06080e" },
  { key: "core", paint: "linear-gradient(180deg, #ffffff, #ffe2cc)", values: "#ffffff → #ffe2cc" },
];

export function Brand({ c }: { c: Content }) {
  const b = c.brand;
  return (
    <>
      <section className="hero brand-hero">
        <img className="brand-hero-icon" src={`${DIR}/xdev-icon.svg`} alt="" width={168} height={168} />
        <div>
          <p className="hero-eyebrow">{b.eyebrow}</p>
          <h1>{b.title}</h1>
          <p className="hero-lede">{b.lede}</p>
        </div>
      </section>

      <section className="band" aria-labelledby="logo">
        <h2 id="logo">{b.logoTitle}</h2>
        <Grid minItemWidth="220px" gap={4}>
          {VERSIONS.map((v) => (
            <figure key={v.key} className="brand-figure">
              <div className="brand-stage" data-ground={v.ground}>
                <img src={`${DIR}/${v.file}`} alt="" width={v.size} height={v.size} />
              </div>
              <figcaption>
                <strong>{b.versions[v.key].name}</strong>
                <span>{b.versions[v.key].body}</span>
                <a href={`${DIR}/${v.file}`} download>
                  {b.download} · {v.file}
                </a>
              </figcaption>
            </figure>
          ))}
        </Grid>
      </section>

      <section className="band" aria-labelledby="systems">
        <h2 id="systems">{b.systemsTitle}</h2>
        <div>
          <p className="brand-intro">{b.systemsIntro}</p>
          <Grid minItemWidth="300px" gap={4}>
            {SYSTEMS.map((s) => (
              <Card key={s.key} className="app-card brand-system">
                <div className="app-head">
                  <img src={`${DIR}/${s.file}`} alt="" width={64} height={64} />
                  <h3>{s.name}</h3>
                </div>
                <p className="app-body">{b.systems[s.key].body}</p>
                <p className="brand-shape">{b.systems[s.key].shape}</p>
                <p className="app-links">
                  <a href={`${DIR}/${s.file}`} download>
                    {b.download}
                  </a>
                </p>
              </Card>
            ))}
          </Grid>
        </div>
      </section>

      <section className="band" aria-labelledby="colour">
        <h2 id="colour">{b.colourTitle}</h2>
        <ul className="brand-swatches">
          {COLOURS.map((col) => (
            <li key={col.key} className="brand-swatch">
              <div className="brand-chip" style={{ background: col.paint }} />
              <strong>{b.colours[col.key].name}</strong>
              <code>{col.values}</code>
              <span>{b.colours[col.key].use}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band" aria-labelledby="type">
        <h2 id="type">{b.typeTitle}</h2>
        <div className="band-body">
          {b.type.map((p, i) => (
            <p key={i}>
              <Inline text={p} />
            </p>
          ))}
        </div>
      </section>

      <section className="band" aria-labelledby="rules">
        <h2 id="rules">{b.rulesTitle}</h2>
        <div className="band-body">
          <ul>
            {b.rules.map((r, i) => (
              <li key={i}>
                <Inline text={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="files">
        <h2 id="files">{b.filesTitle}</h2>
        <div className="band-body">
          {b.files.map((p, i) => (
            <p key={i}>
              <Inline text={p} />
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

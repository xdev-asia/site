import type { CSSProperties } from 'react';
import CopyButton from '@/components/CopyButton';
import GetDialog from '@/components/GetDialog';
import HeroDemo from '@/components/HeroDemo';
import HowSteps from '@/components/HowSteps';
import Reveal from '@/components/Reveal';
import Showcase from '@/components/Showcase';

const REPO = 'https://github.com/xdev-asia/xdev';
const LATEST = `${REPO}/releases/latest`;
const MCP_CMD = 'claude mcp add xdev -- xdev mcp ./docs';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

function Crop({ src, alt, h, x, y, edge }: { src: string; alt: string; h: number; x: number; y: number; edge: 'top' | 'bottom' }) {
  return (
    <div className={`crop crop-${edge}`} style={{ '--h': `${h}px` } as CSSProperties}>
      <img src={src} alt={alt} width={1280} height={800} style={{ '--x': `${x}px`, '--y': `${y}px` } as CSSProperties} loading="lazy" />
    </div>
  );
}

const BUILDS = [
  { os: 'Windows', rows: [['x64', 'Setup .exe or .msi', 'xdev.exe'], ['ARM64', 'Setup .exe', 'xdev.exe']] },
  { os: 'macOS', rows: [['Apple silicon', '.dmg', 'xdev .tar.gz'], ['Intel', '.dmg', 'xdev .tar.gz']] },
  { os: 'Linux', rows: [['x64', 'AppImage or .deb', 'xdev .tar.gz'], ['ARM64', 'AppImage or .deb', 'xdev .tar.gz']] },
];

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a className="brand" href="#top">
          <img src="/assets/logo.png" alt="" width={28} height={28} />
          xDev
        </a>
        <nav aria-label="Main">
          <a className="link" href="#outputs">Outputs</a>
          <a className="link" href="#features">Features</a>
          <a className="link" href="#how">How it works</a>
          <a className="link" href="#download">Download</a>
          <a className="link" href={REPO}>GitHub</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy wrap">
            <h1 id="hero-title" className="lines">
              <span className="line"><span data-line style={i(0)}>Docs that know</span></span>
              <span className="line"><span data-line style={i(1)}>the code moved.</span></span>
            </h1>
            <p className="hero-sub" data-rise style={i(2)}>
              Your Markdown stays the source of truth. xDev flags each doc a commit left behind, then hands the current ones to your coding agents.
            </p>
            <p data-rise style={i(3)}>
              <a className="button" href="#get">Download xDev</a>
            </p>
          </div>
          <HeroDemo />
        </section>

        <section className="showcase wrap" id="outputs" aria-labelledby="outputs-title">
          <Showcase />
        </section>

        <section className="features wrap" id="features" aria-labelledby="features-title">
          <h2 id="features-title" className="sec-head" data-reveal>What works today</h2>
          <div className="cells">
            <div className="cell text-top" data-reveal style={i(0)}>
              <div className="cell-text">
                <h3>Stale docs, named</h3>
                <p>Each doc lists the code it covers. When a commit touches that code, the doc says so, with the commit.</p>
              </div>
              <Crop src="/assets/app-stale.png" alt="xDev warning that billing.md may be out of date after commit 69ce67c" h={236} x={-340} y={-60} edge="bottom" />
            </div>
            <div className="cell frag-top" data-reveal style={i(1)}>
              <Crop src="/assets/app-search.png" alt="Search for invoice finding runbook.md and billing.md" h={286} x={-44} y={-4} edge="top" />
              <div className="cell-text">
                <h3>Search every doc</h3>
                <p>Full-text search across the folder, with the match shown in place. Ctrl+K from anywhere in the app.</p>
              </div>
            </div>
            <div className="cell text-top" data-reveal style={i(2)}>
              <div className="cell-text">
                <h3>Links both ways</h3>
                <p>Write [[runbook]] and the link works. Every doc shows which other docs point to it.</p>
              </div>
              <Crop src="/assets/app-stale.png" alt="Billing doc listing the two docs that link to it" h={176} x={-340} y={-604} edge="bottom" />
            </div>
            <div className="cell frag-top" data-reveal style={i(0)}>
              <Crop src="/assets/app-changes.png" alt="Pending change to onboarding.md with Approve and Reject" h={256} x={-56} y={-56} edge="top" />
              <div className="cell-text">
                <h3>Review, then commit</h3>
                <p>Edits from you or an agent wait as pending changes against git HEAD until you approve them.</p>
              </div>
            </div>
            <div className="cell text-top" data-reveal style={i(1)}>
              <div className="cell-text">
                <h3>Served over MCP</h3>
                <p>Point Claude Code or any MCP client at the folder. Agents read the docs live instead of a stale copy.</p>
              </div>
              <div className="frag frag-bottom">
                <div className="connect" data-ui>
                  <div className="connect-head">
                    <span>Claude Code</span>
                    <CopyButton text={MCP_CMD} />
                  </div>
                  <pre><code>{MCP_CMD}</code></pre>
                  <div className="connect-head"><span>Any MCP client</span></div>
                  <pre><code>{'{ "mcpServers": { "xdev": {\n    "command": "xdev",\n    "args": ["mcp", "./docs"] } } }'}</code></pre>
                </div>
              </div>
            </div>
            <div className="cell frag-top" data-reveal style={i(2)}>
              <div className="frag frag-top-dock">
                <div className="task" data-ui>
                  <div className="task-row">
                    <strong>Note the VN tax rate in billing.md</strong>
                    <span className="pill ok">Ready for review</span>
                  </div>
                  <p className="task-meta">Claude Code · own git worktree · 2 files</p>
                  <pre><code>
                    <span className="del">- Tax is added per line, at the rate for the shipping country.</span>
                    {'\n'}
                    <span className="add">+ Tax is added per line: 10% for VN, 8% elsewhere.</span>
                  </code></pre>
                  <div className="task-actions">
                    <button className="ui-btn" type="button">Discard</button>
                    <button className="ui-btn primary" type="button">Approve</button>
                  </div>
                </div>
              </div>
              <div className="cell-text">
                <h3>Agents work aside</h3>
                <p>A task runs in its own git worktree. You read the diff and the evidence, then approve or discard it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how wrap" id="how" aria-labelledby="how-title">
          <HowSteps />
        </section>

        <section className="lineup" id="download" aria-labelledby="download-title">
          <div className="wrap">
            <h2 id="download-title" className="block-head" data-reveal>Six builds in every release</h2>
            <table className="rows" data-reveal>
              <caption className="sr-only">Downloads by platform: chip, desktop installer and command-line tool</caption>
              <thead className="sr-only">
                <tr><th scope="col">Chip</th><th scope="col">Desktop app</th><th scope="col">Command line</th><th scope="col">Link</th></tr>
              </thead>
              {BUILDS.map((g) => (
                <tbody key={g.os}>
                  <tr className="group"><th colSpan={4} scope="rowgroup">{g.os}</th></tr>
                  {g.rows.map(([chip, app, cli]) => (
                    <tr key={chip}>
                      <td>{chip}</td>
                      <td>{app}</td>
                      <td>{cli}</td>
                      <td><a className="link" href={LATEST} aria-label={`Download for ${g.os} ${chip}`}>Download</a></td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </section>

        <section className="cta" id="get" aria-labelledby="cta-title">
          <div className="cta-inner wrap grid">
            <div className="cta-copy">
              <h2 id="cta-title" className="closing" data-reveal>Start with one folder.</h2>
              <p data-reveal style={i(1)}>
                Free and open source under Apache-2.0. The installers are not code-signed yet, so Windows or macOS may ask once before the first launch.
              </p>
            </div>
            <GetDialog />
          </div>
        </section>
      </main>

      <footer className="foot wrap">
        <p className="muted">Local-first docs for people and agents</p>
        <p className="foot-links">
          <a className="link" href={REPO}>GitHub</a>
          <a className="link" href={`${REPO}/releases`}>Releases</a>
          <a className="link" href={`${REPO}/tree/main/docs/adr`}>Decisions</a>
        </p>
        <p className="muted foot-end">
          © 2026 xDev · <a className="link" href={`${REPO}/blob/main/LICENSE`}>Apache-2.0</a>
        </p>
      </footer>
      <Reveal />
    </>
  );
}

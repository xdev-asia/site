import type { CSSProperties } from 'react';
import CopyButton from '@/components/CopyButton';
import GetDialog from '@/components/GetDialog';
import HeroDemo from '@/components/HeroDemo';
import HowSteps from '@/components/HowSteps';
import Reveal from '@/components/Reveal';
import Showcase from '@/components/Showcase';

const REPO = 'https://github.com/xdev-asia/xdev-ide';
const LATEST = `${REPO}/releases/latest`;
const MCP_CMD = 'claude mcp add xdev -- xdev mcp ./docs';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

// Agent CLIs xDev IDE can launch in a tab today.
const AGENTS = ['Claude Code', 'Codex', 'Gemini', 'Qwen Code', 'OpenCode', 'Amp', 'Cursor', 'Grok', 'Kiro', 'Kilo Code', 'Cline', 'Antigravity', 'Pi', 'Command Code'];

const BUILDS = [
  { os: 'Windows', rows: [['x64', 'Setup .exe or .msi', 'xdev.exe'], ['ARM64', 'Setup .exe', 'xdev.exe']] },
  { os: 'macOS', rows: [['Apple silicon', '.dmg', 'xdev .tar.gz']] },
  { os: 'Linux', rows: [['x64', 'AppImage or .deb', 'xdev .tar.gz'], ['ARM64', 'AppImage or .deb', 'xdev .tar.gz']] },
];

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a className="brand" href="#top">
          <img src="/assets/logo.png" alt="" width={28} height={28} />
          xDev IDE
        </a>
        <nav aria-label="Main">
          <a className="link" href="#agents">Agents</a>
          <a className="link" href="#how">Review</a>
          <a className="link" href="#features">Features</a>
          <a className="link" href="#download">Download</a>
          <a className="link" href={REPO}>GitHub</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy wrap">
            <h1 id="hero-title" className="lines">
              <span className="line"><span data-line style={i(0)}>Many agents.</span></span>
              <span className="line"><span data-line style={i(1)}>One window.</span></span>
            </h1>
            <p className="hero-sub" data-rise style={i(2)}>
              xDev IDE runs Claude Code, Codex and other coding agents side by side, each in its own git worktree. See who is working, who needs you, and what each one changed.
            </p>
            <p data-rise style={i(3)}>
              <a className="button" href="#get">Download xDev IDE</a>
            </p>
          </div>
          <HeroDemo />
        </section>

        <section className="showcase wrap" id="agents" aria-labelledby="agents-title">
          <Showcase />
        </section>

        <section className="how wrap" id="how" aria-labelledby="how-title">
          <HowSteps />
        </section>

        <section className="features wrap" id="features" aria-labelledby="features-title">
          <h2 id="features-title" className="sec-head" data-reveal>The IDE around the agents</h2>
          <div className="cells">
            <div className="cell text-top" data-reveal style={i(0)}>
              <div className="cell-text">
                <h3>Split editor</h3>
                <p>Open one file in two panes, side by side or stacked. Quick open with Mod+P, search in files, jump with Ctrl+J.</p>
              </div>
              <div className="frag frag-bottom">
                <div className="split" data-ui aria-hidden="true">
                  <div className="split-pane">
                    <span className="split-tab">tax.ts</span>
                    <code><b>12</b> export function taxFor(line) {'{'}</code>
                    <code className="hl"><b>13</b>   const rate = RATES[c]</code>
                    <code><b>14</b>   return line.total * rate</code>
                    <code><b>15</b> {'}'}</code>
                  </div>
                  <div className="split-pane">
                    <span className="split-tab">tax.ts</span>
                    <code><b>40</b> export const RATES = {'{'}</code>
                    <code className="hl"><b>41</b>   VN: 0.1,</code>
                    <code><b>42</b>   SG: 0.09,</code>
                    <code><b>43</b> {'}'}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="cell frag-top" data-reveal style={i(1)}>
              <div className="frag frag-top-dock">
                <div className="attr" data-ui>
                  <p className="attr-head">Changes in this worktree</p>
                  <ul>
                    <li><code>src/billing/refund.ts</code><span className="chip a1">Codex</span><span className="num">+22 −4</span></li>
                    <li><code>src/billing/tax.ts</code><span className="chip a2">Claude Code</span><span className="num">+4 −1</span></li>
                    <li><code>docs/billing.md</code><span className="chip a3">You</span><span className="num">+2 −1</span></li>
                  </ul>
                  <p className="attr-foot"><span>3 versions of refund.ts</span><span className="ui-btn">Restore</span></p>
                </div>
              </div>
              <div className="cell-text">
                <h3>Who wrote which line</h3>
                <p>Each change is tagged with the agent tab that made it, and earlier versions can be restored.</p>
              </div>
            </div>

            <div className="cell text-top" data-reveal style={i(2)}>
              <div className="cell-text">
                <h3>Review with AI</h3>
                <p>Ask a second agent to review the diff. Its notes sit on the lines, next to yours. Image diffs too.</p>
              </div>
              <div className="frag frag-bottom">
                <div className="notes" data-ui>
                  <p className="note-row"><span className="chip a1">AI review</span> refund.ts:58 — a refund over the paid amount is not rejected.</p>
                  <p className="note-row"><span className="chip a3">You</span> tax.ts:13 — use the shipping country.</p>
                  <p className="note-foot"><span className="ui-btn primary">Send 2 notes to Codex</span></p>
                </div>
              </div>
            </div>

            <div className="cell frag-top" data-reveal style={i(0)}>
              <div className="frag frag-top-dock">
                <div className="convo" data-ui>
                  <p className="me">Why did the refund test fail?</p>
                  <p className="tool">Read tests/refund.test.ts</p>
                  <p className="tool">Run pnpm test refund · 1 failed</p>
                  <p className="bot">The test expects the card, the code now sends store credit. I updated the test to match.</p>
                  <p className="tool sub">Sub-agent: check other callers · 2 found</p>
                </div>
              </div>
              <div className="cell-text">
                <h3>Read the whole conversation</h3>
                <p>A chat view of any agent tab, with tool steps and sub-agent runs. Answer its questions from there.</p>
              </div>
            </div>

            <div className="cell text-top" data-reveal style={i(1)}>
              <div className="cell-text">
                <h3>Know what each tab costs</h3>
                <p>CPU and memory for every tab&apos;s process tree, token use per session, and a confirmed Stop.</p>
              </div>
              <div className="frag frag-bottom">
                <table className="res" data-ui>
                  <caption className="sr-only">Processes per tab</caption>
                  <thead><tr><th scope="col">Tab</th><th scope="col">CPU</th><th scope="col">Memory</th><th scope="col"><span className="sr-only">Action</span></th></tr></thead>
                  <tbody>
                    <tr><td>retry-charges</td><td>38%</td><td>612 MB</td><td><span className="ui-btn">Stop</span></td></tr>
                    <tr><td>tax-rate-vn</td><td>4%</td><td>288 MB</td><td><span className="ui-btn">Stop</span></td></tr>
                    <tr><td>pnpm dev</td><td>11%</td><td>540 MB</td><td><span className="ui-btn">Stop</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="cell frag-top" data-reveal style={i(2)}>
              <div className="frag frag-top-dock">
                <div className="connect" data-ui>
                  <div className="connect-head">
                    <span>Claude Code</span>
                    <CopyButton text={MCP_CMD} />
                  </div>
                  <pre><code>{MCP_CMD}</code></pre>
                  <p className="connect-note"><span className="pill warn">Stale</span> billing.md · src/billing changed in 69ce67c</p>
                </div>
              </div>
              <div className="cell-text">
                <h3>Docs your agents can trust</h3>
                <p>xdev mcp serves your Markdown docs to any MCP client, and xdev check flags a doc when the code it covers changed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="crew wrap" aria-labelledby="crew-title">
          <h2 id="crew-title" className="block-head" data-reveal>Works with the agent CLIs you already use</h2>
          <p className="crew-list" data-reveal>
            {AGENTS.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </p>
          <p className="crew-note" data-reveal>
            They run in real terminals with your own accounts. xDev IDE keeps nothing in the cloud: your code, docs and git stay on your machine.
          </p>
        </section>

        <section className="lineup" id="download" aria-labelledby="download-title">
          <div className="wrap">
            <h2 id="download-title" className="block-head" data-reveal>Five builds in every release</h2>
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
              <h2 id="cta-title" className="closing" data-reveal>Start with one repo.</h2>
              <p data-reveal style={i(1)}>
                Free and open source under Apache-2.0. The installers are not code-signed yet, so Windows or macOS may ask once before the first launch. Updates are signed.
              </p>
            </div>
            <GetDialog />
          </div>
        </section>
      </main>

      <footer className="foot wrap">
        <p className="muted">xDev IDE · local-first agentic IDE</p>
        <p className="foot-links">
          <a className="link" href={REPO}>GitHub</a>
          <a className="link" href={`${REPO}/releases`}>Releases</a>
          <a className="link" href={`${REPO}/blob/main/docs/architecture.md`}>Architecture</a>
          <a className="link" href={`${REPO}/tree/main/docs/guide`}>Guides</a>
        </p>
        <p className="muted foot-end">
          © 2026 xDev · <a className="link" href={`${REPO}/blob/main/LICENSE`}>Apache-2.0</a>
        </p>
      </footer>
      <Reveal />
    </>
  );
}

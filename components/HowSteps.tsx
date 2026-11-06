'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { statement: 'Start a task from a branch or an issue.', support: 'Type #142 or a branch name. xDev IDE makes a git worktree in the background and runs your setup script there.' },
  { statement: 'Let agents work. Step in when one asks.', support: 'Each tab shows working, needs you or done. A question raises a notification, so you can leave the window.' },
  { statement: 'Read the diff, then commit or open a PR.', support: 'Leave a note on a line and it goes to the agent tab. The work stays on the task’s own branch until you merge it.' },
];

export default function HowSteps() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // A thin band across the middle of the viewport decides which step is current.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid">
      <div className="how-steps">
        <h2 id="how-title" className="block-head">
          From task to pull request
        </h2>
        {STEPS.map((s, i) => (
          <div
            key={i}
            className={i === active ? 'step is-active' : 'step'}
            data-step={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            <p className="statement">{s.statement}</p>
            <p className="support">{s.support}</p>
          </div>
        ))}
      </div>
      <div className="how-stage">
        <div className="state-card" data-ui data-state={active} aria-live="polite">
          <div className="state s0" aria-hidden={active !== 0}>
            <div className="state-head">
              <strong>New task</strong>
              <span className="pill">shop-api</span>
            </div>
            <div className="form">
              <span className="flabel">From</span>
              <span className="field">#142 Tax rate per country</span>
              <span className="flabel">Branch</span>
              <span className="field mono">xdev/tax-rate-vn</span>
              <span className="flabel">Agent</span>
              <span className="field">Claude Code · work</span>
              <span className="form-foot">
                <span className="ui-btn primary">Create worktree</span>
              </span>
            </div>
          </div>
          <div className="state s1" aria-hidden={active !== 1}>
            <div className="state-head">
              <strong>Agents</strong>
              <span className="pill warn">1 needs you</span>
            </div>
            <ul className="tabs-list">
              <li>
                <span className="dot needs" /> tax-rate-vn <span className="muted">Claude Code</span>
              </li>
              <li>
                <span className="dot working" /> retry-charges <span className="muted">Codex</span>
              </li>
              <li>
                <span className="dot done" /> refund-credit <span className="muted">Gemini</span>
              </li>
            </ul>
            <div className="notice">
              <strong>tax-rate-vn needs you</strong>
              <span>Allow this edit? src/billing/tax.ts</span>
            </div>
          </div>
          <div className="state s2" aria-hidden={active !== 2}>
            <div className="state-head">
              <strong>Review · tax.ts</strong>
              <span className="pill ok">+4 −1</span>
            </div>
            <pre className="diff">
              <code>
                <span className="ln">12</span> export function taxFor(line: Line) {'{'}
                {'\n'}
                <span className="ln">13</span>
                <span className="del">-  return line.total * RATE</span>
                {'\n'}
                <span className="ln">13</span>
                <span className="add">+  const rate = RATES[line.country] ?? 0.08</span>
                {'\n'}
                <span className="ln">14</span>
                <span className="add">+  return line.total * rate</span>
              </code>
            </pre>
            <p className="line-note">
              <span className="who">You, line 13</span> Use the shipping country, not the billing one.
            </p>
            <div className="review-actions">
              <span className="ui-btn">Send note to agent</span>
              <span className="ui-btn primary">Commit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

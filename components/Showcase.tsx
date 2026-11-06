'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

function Mission() {
  return (
    <>
      <div className="sheet-head">
        <strong>Mission Control</strong>
        <span className="pill">3 agents</span>
      </div>
      <ul className="team">
        <li>
          <span className="role">Lead</span>
          <span className="who">Claude Code</span>
          <span className="what">Splits the refund work in two</span>
          <span className="pill ok">Done</span>
        </li>
        <li className="hot">
          <span className="role">Builder</span>
          <span className="who">Codex</span>
          <span className="what">Edits src/billing/refund.ts</span>
          <span className="pill sig">Working</span>
        </li>
        <li>
          <span className="role">Tester</span>
          <span className="who">Gemini</span>
          <span className="what">Waits for @builder</span>
          <span className="pill">Waiting</span>
        </li>
      </ul>
      <div className="mail">
        <p className="from">Lead → Tester</p>
        <p>
          <span className="tok">@tester</span> when builder is done, run the refund tests and send me the failures.
        </p>
      </div>
    </>
  );
}

function Accounts() {
  return (
    <>
      <div className="sheet-head">
        <strong>Accounts</strong>
        <span className="note">This machine</span>
      </div>
      <ul className="acct">
        <li>
          <span className="who">Claude Code · work</span>
          <span className="meter warn" style={{ '--v': '86%' } as React.CSSProperties} aria-label="86% of the 5-hour limit used" />
          <span className="num">86%</span>
        </li>
        <li>
          <span className="who">Claude Code · personal</span>
          <span className="meter" style={{ '--v': '22%' } as React.CSSProperties} aria-label="22% used" />
          <span className="num">22%</span>
        </li>
        <li>
          <span className="who">Codex</span>
          <span className="meter" style={{ '--v': '41%' } as React.CSSProperties} aria-label="41% used" />
          <span className="num">41%</span>
        </li>
      </ul>
      <label className="switch-row">
        <span>Switch account when quota runs low</span>
        <span className="switch on" aria-hidden="true" />
      </label>
      <p className="toast-line">
        <span className="dot working" aria-hidden="true" /> retry-charges moved to <strong>personal</strong> and kept going.
      </p>
    </>
  );
}

function Queue() {
  return (
    <>
      <div className="sheet-head">
        <strong>Prompt queue</strong>
        <span className="note">refund-credit · Gemini</span>
      </div>
      <div className="composer">
        <p>Write the changelog entry for store-credit refunds, then open a draft pull request.</p>
        <div className="composer-foot">
          <span className="chip">Send at 18:30</span>
          <span className="ui-btn primary">Queue</span>
        </div>
      </div>
      <ol className="queue">
        <li>
          <code>17:05</code> Run the full test suite and fix what fails <span className="pill ok">Sent</span>
        </li>
        <li>
          <code>18:30</code> Write the changelog entry for store-credit… <span className="pill">Queued</span>
        </li>
        <li>
          <code>When idle</code> Update docs/billing.md <span className="pill">Queued</span>
        </li>
      </ol>
    </>
  );
}

function Layouts() {
  return (
    <>
      <div className="sheet-head">
        <strong>Layout presets</strong>
        <span className="note">Restored after restart</span>
      </div>
      <div className="presets">
        <span className="preset">
          <span className="mini two" aria-hidden="true">
            <i />
            <i />
          </span>
          Two up
        </span>
        <span className="preset on">
          <span className="mini grid4" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          Grid 2×2
        </span>
        <span className="preset">
          <span className="mini main" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          Main + side
        </span>
      </div>
      <div className="panes" aria-hidden="true">
        {[
          ['Claude Code', 'working'],
          ['Codex', 'needs'],
          ['Gemini', 'done'],
          ['Shell', ''],
        ].map(([n, s]) => (
          <div key={n} className="pane">
            <span>
              {s && <span className={`dot ${s}`} />} {n}
            </span>
            <i />
            <i />
            <i className="short" />
          </div>
        ))}
      </div>
    </>
  );
}

const SHEETS: { id: string; name: string; body: ReactNode }[] = [
  { id: 'mission', name: 'Mission Control', body: <Mission /> },
  { id: 'accounts', name: 'Accounts', body: <Accounts /> },
  { id: 'queue', name: 'Prompt queue', body: <Queue /> },
  { id: 'layouts', name: 'Layouts', body: <Layouts /> },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const sheet = SHEETS[active];

  const select = (i: number) => {
    if (i === active) return;
    setSwapping(true);
    // Swap content while the sheet is faded out, so text never jumps in view.
    window.setTimeout(() => {
      setActive(i);
      setSwapping(false);
    }, 200);
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const n = (i + step + SHEETS.length) % SHEETS.length;
    tabs.current[n]?.focus();
    select(n);
  };

  return (
    <div className="grid">
      <div className="show-names">
        <h2 id="agents-title" className="block-head" data-reveal>
          Run a crew, not a single chat
        </h2>
        <div className="names" role="tablist" aria-label="Agent tools" data-reveal>
          {SHEETS.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === active}
              aria-controls="sheet"
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
      <div className="show-stage">
        <article className={swapping ? 'sheet is-swapping' : 'sheet'} data-ui id="sheet" role="tabpanel" aria-labelledby={`tab-${sheet.id}`}>
          {sheet.body}
        </article>
      </div>
    </div>
  );
}

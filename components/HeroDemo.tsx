'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

type Status = 'needs' | 'working' | 'done';

const LABEL: Record<Status, string> = { needs: 'Needs you', working: 'Working', done: 'Done' };

type Task = { slug: string; agent: string; prompt: string; lines: string[] };

// A sample repo; the steps mirror what the agent tabs show, cut short to fit.
const TASKS: Task[] = [
  {
    slug: 'tax-rate-vn',
    agent: 'Claude Code',
    prompt: 'Add the 10% VN tax rate to billing',
    lines: ['Read src/billing/tax.ts', 'Read docs/billing.md', 'Edit src/billing/tax.ts  +4 −1'],
  },
  {
    slug: 'retry-charges',
    agent: 'Codex',
    prompt: 'Retry failed charges 4 times, not 3',
    lines: ['Search "retry" in src/billing', 'Edit src/billing/retry.ts  +6 −2', 'Run pnpm test retry'],
  },
  {
    slug: 'refund-credit',
    agent: 'Gemini',
    prompt: 'Send refunds to store credit',
    lines: ['Edit src/billing/refund.ts  +22 −4', 'Edit docs/billing.md  +2 −1', 'Run pnpm test refund', '41 passed'],
  },
];

const AFTER_ALLOW = ['Edit applied', 'Run pnpm test billing', '18 passed'];

export default function HeroDemo() {
  const [status, setStatus] = useState<Status[]>(['needs', 'working', 'done']);
  const [sel, setSel] = useState(0);
  const [allowed, setAllowed] = useState(false);
  const rows = useRef<(HTMLButtonElement | null)[]>([]);
  const task = TASKS[sel];
  const st = status[sel];

  useEffect(() => {
    if (!allowed) return;
    // The agent finishes its run a moment after you allow the edit.
    const t = window.setTimeout(() => setStatus((s) => ['done', s[1], s[2]]), 2400);
    return () => window.clearTimeout(t);
  }, [allowed]);

  const allow = () => {
    setAllowed(true);
    setStatus((s) => ['working', s[1], s[2]]);
  };
  const reset = () => {
    setAllowed(false);
    setStatus(['needs', 'working', 'done']);
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const step = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const n = (i + step + TASKS.length) % TASKS.length;
    rows.current[n]?.focus();
    setSel(n);
  };

  const lines = sel === 0 && allowed ? [...task.lines, ...AFTER_ALLOW.slice(0, st === 'done' ? 3 : 1)] : task.lines;

  return (
    <div className="hero-stage">
      <div className="shutter" data-reveal>
        <div className="ws" data-ui aria-label="xDev IDE with three agent tasks">
          <div className="ws-side">
            <p className="ws-cap">Worktrees</p>
            <div role="tablist" aria-orientation="vertical" aria-label="Tasks">
              {TASKS.map((t, i) => (
                <button
                  key={t.slug}
                  ref={(el) => {
                    rows.current[i] = el;
                  }}
                  role="tab"
                  id={`wt-${t.slug}`}
                  aria-selected={i === sel}
                  aria-controls="ws-pane"
                  tabIndex={i === sel ? 0 : -1}
                  className="ws-row"
                  onClick={() => setSel(i)}
                  onKeyDown={(e) => onKey(e, i)}
                >
                  <span className={`dot ${status[i]}`} aria-hidden="true" />
                  <span className="ws-row-text">
                    <strong>{t.slug}</strong>
                    <span>
                      {t.agent} · {LABEL[status[i]]}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="ws-main" id="ws-pane" role="tabpanel" aria-labelledby={`wt-${task.slug}`}>
            <div className="ws-tabs">
              <span className="ws-tab on">
                <span className={`dot ${st}`} aria-hidden="true" />
                {task.agent}
              </span>
              <span className="ws-tab">Shell</span>
              <span className={`pill ${st === 'needs' ? 'warn' : st === 'done' ? 'ok' : ''}`}>{LABEL[st]}</span>
            </div>
            <div className="ws-term" aria-live="polite">
              <code className="ws-prompt">&gt; {task.prompt}</code>
              {lines.map((l) => (
                <code key={l} className={/passed$/.test(l) ? 'ok' : undefined}>
                  {l}
                </code>
              ))}
              {st === 'needs' && (
                <div className="ask">
                  <p>
                    <strong>Allow this edit?</strong> src/billing/tax.ts
                  </p>
                  <div className="ask-actions">
                    <button className="ui-btn" type="button" onClick={() => setSel(1)}>
                      Later
                    </button>
                    <button className="ui-btn primary" type="button" onClick={allow}>
                      Allow
                    </button>
                  </div>
                </div>
              )}
              {st === 'working' && <span className="cursor" aria-hidden="true" />}
              {st === 'done' && (
                <div className="ask done">
                  <p>
                    <strong>Ready for review.</strong> {sel === 2 ? '2 files' : '1 file'} changed in its own worktree.
                  </p>
                  <div className="ask-actions">
                    {sel === 0 && (
                      <button className="ui-btn" type="button" onClick={reset}>
                        Replay
                      </button>
                    )}
                    <a className="ui-btn primary" href="#how">
                      Review changes
                    </a>
                  </div>
                </div>
              )}
            </div>
            <p className="ws-foot">
              <code>xdev/{task.slug}</code>
              <span>../shop-api-{task.slug}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { statement: 'First, say what a doc covers.', support: 'List code paths in its front matter. xDev pins the commit you last checked it against.' },
  { statement: 'Then commit code as you always do.', support: 'When a commit touches those paths, the doc turns stale in the app and in xdev check.' },
  { statement: 'Last, read the doc and re-verify.', support: 'Fix it, or mark it still correct. The pin moves to the newest commit.' },
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
          How it stays true
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
              <strong>billing.md</strong>
              <span className="pill">Front matter</span>
            </div>
            <ol className="code-lines">
              <li>---</li>
              <li>title: Billing</li>
              <li className="mark">covers:</li>
              <li className="mark">&nbsp;&nbsp;- src/billing</li>
              <li className="mark">verified: 3115c64</li>
              <li>---</li>
              <li className="h"># Billing</li>
            </ol>
          </div>
          <div className="state s1" aria-hidden={active !== 1}>
            <div className="state-head">
              <strong>Terminal</strong>
              <span className="pill warn">exit 1</span>
            </div>
            <pre>
              <code>
                <span className="ps">$</span> git commit -am &quot;Tax rate per country&quot;
                {'\n'}[main 69ce67c] Tax rate per country
                {'\n'} 1 file changed, 1 insertion(+), 1 deletion(-)
                {'\n'}
                <span className="ps">$</span> xdev check docs
                {'\n'}stale{'\t'}billing.md{'\t'}1
              </code>
            </pre>
          </div>
          <div className="state s2" aria-hidden={active !== 2}>
            <div className="state-head">
              <strong>billing.md</strong>
              <span className="pill ok">Verified 69ce67c</span>
            </div>
            <ol className="code-lines">
              <li>---</li>
              <li>title: Billing</li>
              <li>covers:</li>
              <li>&nbsp;&nbsp;- src/billing</li>
              <li className="mark">verified: 69ce67c</li>
              <li>---</li>
              <li className="h"># Billing</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

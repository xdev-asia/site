'use client';

import { useState } from 'react';

// Only the first commit comes from the sample repo in the screenshots; the rest keep the demo looping.
const COMMITS = [
  { hash: '69ce67c', msg: 'Tax rate per country' },
  { hash: 'a1d93e0', msg: 'Retry failed charges 4 times' },
  { hash: '5b27f4c', msg: 'Refunds to store credit' },
];

export default function HeroDemo() {
  const [verified, setVerified] = useState('3115c64');
  const [next, setNext] = useState(0);
  const [stale, setStale] = useState(false);
  const commit = COMMITS[next % COMMITS.length];

  const verify = () => {
    setVerified(commit.hash);
    setStale(false);
    setNext((n) => n + 1);
  };

  return (
    <div className="hero-stage">
      <div className="shutter" data-reveal>
        <div className="doc" data-ui aria-label="xDev showing billing.md">
          <div className="doc-head">
            <div>
              <strong>Billing</strong>
              <code>billing.md</code>
            </div>
            <div className="doc-tools">
              <span className="seg">
                <span className="on">Edit</span>
                <span>Preview</span>
              </span>
              <label className="chk">
                <input type="checkbox" checked readOnly tabIndex={-1} /> For agents
              </label>
              <span className={stale ? 'pill warn' : 'pill ok'}>{stale ? 'Stale' : `Verified ${verified}`}</span>
            </div>
          </div>
          {stale && (
            <div className="banner is-new">
              <div>
                <strong>This doc may be out of date.</strong>
                <p>1 new commit touched src/billing since it was verified at {verified}.</p>
                <p className="commit">
                  <code>{commit.hash}</code> {commit.msg} <span className="when">now</span>
                </p>
              </div>
              <button className="ui-btn primary" onClick={verify}>
                Still correct, mark verified
              </button>
            </div>
          )}
          <ol className="code-lines">
            <li>---</li>
            <li>title: Billing</li>
            <li>
              agents: <span className="tok">[agents, claude, cursor]</span>
            </li>
            <li>covers:</li>
            <li>&nbsp;&nbsp;- src/billing</li>
            <li>verified: {verified}</li>
            <li>---</li>
            <li className="h"># Billing</li>
            <li></li>
            <li>Invoices are issued on the 1st of each month, in the customer&apos;s currency.</li>
            <li></li>
            <li>- Tax is added per line, at the rate for the shipping country.</li>
            <li>- A failed charge is retried 3 times over 5 days, then the account is paused.</li>
            <li>- Refunds go back to the original card; see [[runbook]] for manual ones.</li>
          </ol>
        </div>
      </div>

      <div className="term" data-ui aria-label="Terminal">
        <code>
          <span className="ps">~/shop-api $</span> git commit -am &quot;{commit.msg}&quot;
        </code>
        <div id="term-out" aria-live="polite">
          {stale && (
            <>
              <code>
                [main {commit.hash}] {commit.msg}
              </code>
              <code>&nbsp;1 file changed, 1 insertion(+), 1 deletion(-)</code>
              <code>
                <span className="ps">~/shop-api $</span> xdev check docs
              </code>
              <code className="hit">stale&nbsp;&nbsp;billing.md&nbsp;&nbsp;1</code>
            </>
          )}
        </div>
        <p className="term-run">
          <button className="ui-btn" disabled={stale} onClick={() => setStale(true)}>
            Run commit
          </button>
          <span className="cursor" aria-hidden="true"></span>
        </p>
      </div>
    </div>
  );
}

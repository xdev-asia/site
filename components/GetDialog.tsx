'use client';

import { useEffect, useState, type FormEvent } from 'react';

const RELEASES = 'https://github.com/xdev-asia/xdev-ide/releases/latest';
const CHIPS = {
  Windows: ['x64', 'ARM64'],
  macOS: ['Apple silicon'],
  Linux: ['x64', 'ARM64'],
} as const;
type Os = keyof typeof CHIPS;

function detectOs(): Os {
  const p = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform || navigator.userAgent;
  if (/mac/i.test(p)) return 'macOS';
  if (/linux|x11/i.test(p) && !/android/i.test(p)) return 'Linux';
  return 'Windows';
}

export default function GetDialog() {
  const [os, setOs] = useState<Os>('Windows');
  const [chip, setChip] = useState(0);
  const [folder, setFolder] = useState('~/code/shop-api/docs');

  // Detect after mount so the static HTML and the first client render agree.
  useEffect(() => setOs(detectOs()), []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = RELEASES;
  };

  return (
    <form className="dialog" data-ui action={RELEASES} onSubmit={submit} data-reveal style={{ '--i': 2 } as React.CSSProperties}>
      <h3>Get xDev</h3>
      <label htmlFor="folder">Docs folder</label>
      <input id="folder" value={folder} onChange={(e) => setFolder(e.target.value)} autoComplete="off" spellCheck={false} />
      <span className="dlabel" id="chip-label">
        Chip
      </span>
      <div className="segmented" role="radiogroup" aria-labelledby="chip-label">
        {CHIPS[os].map((c, i) => (
          <button key={c} type="button" role="radio" aria-checked={i === (CHIPS[os][chip] ? chip : 0)} onClick={() => setChip(i)}>
            {c}
          </button>
        ))}
      </div>
      <p className="after">
        After install: <code>xdev check {folder.trim() || '.'}</code>
      </p>
      <button className="ui-btn primary big" type="submit">
        Download for {os} {CHIPS[os][chip] ?? CHIPS[os][0]}
      </button>
    </form>
  );
}

'use client';

import { useEffect, useState, type FormEvent } from 'react';

const REPO = 'https://github.com/xdev-asia/xdev-ide';
const URLS = { stable: `${REPO}/releases/latest`, rc: `${REPO}/releases/tag/rc-latest` } as const;
const CHIPS = {
  Windows: ['x64', 'ARM64'],
  macOS: ['Apple silicon'],
  Linux: ['x64', 'ARM64'],
} as const;
type Os = keyof typeof CHIPS;
type Channel = keyof typeof URLS;

function detectOs(): Os {
  const p = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform || navigator.userAgent;
  if (/mac/i.test(p)) return 'macOS';
  if (/linux|x11/i.test(p) && !/android/i.test(p)) return 'Linux';
  return 'Windows';
}

export default function GetDialog() {
  const [os, setOs] = useState<Os>('Windows');
  const [chip, setChip] = useState(0);
  const [channel, setChannel] = useState<Channel>('stable');

  // Detect after mount so the static HTML and the first client render agree.
  useEffect(() => setOs(detectOs()), []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = URLS[channel];
  };

  const chips = CHIPS[os];
  const c = chips[chip] ? chip : 0;

  return (
    <form className="dialog" data-ui action={URLS[channel]} onSubmit={submit} data-reveal style={{ '--i': 2 } as React.CSSProperties}>
      <h3>Get xDev IDE</h3>
      <span className="dlabel" id="os-label">
        System
      </span>
      <div className="segmented three" role="radiogroup" aria-labelledby="os-label">
        {(Object.keys(CHIPS) as Os[]).map((o) => (
          <button key={o} type="button" role="radio" aria-checked={o === os} onClick={() => setOs(o)}>
            {o}
          </button>
        ))}
      </div>
      <span className="dlabel" id="chip-label">
        Chip
      </span>
      <div className="segmented" role="radiogroup" aria-labelledby="chip-label">
        {chips.map((ch, i) => (
          <button key={ch} type="button" role="radio" aria-checked={i === c} onClick={() => setChip(i)}>
            {ch}
          </button>
        ))}
      </div>
      <span className="dlabel" id="channel-label">
        Channel
      </span>
      <div className="segmented" role="radiogroup" aria-labelledby="channel-label">
        <button type="button" role="radio" aria-checked={channel === 'stable'} onClick={() => setChannel('stable')}>
          Stable
        </button>
        <button type="button" role="radio" aria-checked={channel === 'rc'} onClick={() => setChannel('rc')}>
          Release candidate
        </button>
      </div>
      <p className="after">
        {channel === 'rc'
          ? 'Newest features first, and may have bugs. To keep getting them, set Settings, General, Release channel to Release candidate.'
          : 'Updates download in the background and install on the next start.'}
      </p>
      <button className="ui-btn primary big" type="submit">
        Download for {os} {chips[c]}
      </button>
    </form>
  );
}

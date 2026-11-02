'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      window.setTimeout(() => setDone(false), 1500);
    } catch {
      // Clipboard can be blocked (insecure context, denied permission); the command stays selectable.
    }
  };
  return (
    <button className="ui-btn" type="button" onClick={copy} aria-live="polite">
      {done ? 'Copied' : 'Copy'}
    </button>
  );
}

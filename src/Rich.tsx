import type { ReactNode } from "react";
import type { Block } from "./content/types";

const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

/** Inline text with [label](url) links and **bold**. */
export function Inline({ text }: { text: string }): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const external = /^https?:/.test(m[2]!);
      out.push(
        <a key={m.index} href={m[2]} {...(external ? { rel: "noopener" } : {})}>
          {m[1]}
        </a>,
      );
    } else {
      out.push(<strong key={m.index}>{m[3]}</strong>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Blocks({ blocks }: { blocks: Block[] }): ReactNode {
  return blocks.map((b, i) =>
    typeof b === "string" ? (
      <p key={i}>
        <Inline text={b} />
      </p>
    ) : (
      <ul key={i}>
        {b.list.map((item, j) => (
          <li key={j}>
            <Inline text={item} />
          </li>
        ))}
      </ul>
    ),
  );
}

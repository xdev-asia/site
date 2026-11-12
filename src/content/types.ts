/** A paragraph (string) or a bullet list. Text may hold links as [label](url) and **bold**. */
export type Block = string | { list: string[] };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Doc {
  title: string;
  /** Short line under the title: what the page covers and its effective date. */
  stamp: string;
  summary: string;
  sections: Section[];
}

export interface AppEntry {
  name: string;
  icon?: string;
  glyph?: string;
  platform: string;
  body: string;
  links: { label: string; href: string }[];
}

export interface Content {
  meta: Record<"home" | "terms" | "privacy" | "support" | "notFound", { title: string; description: string }>;
  nav: { terms: string; privacy: string; support: string; legal: string; lang: string; contents: string };
  home: {
    eyebrow: string;
    headline: string;
    lede: string;
    aboutTitle: string;
    about: string[];
    appsTitle: string;
    apps: AppEntry[];
    principlesTitle: string;
    principles: { title: string; body: string }[];
    contactTitle: string;
    contact: string[];
  };
  terms: Doc;
  privacy: Doc;
  support: Doc;
  notFound: { title: string; body: string; home: string };
  footer: string;
}

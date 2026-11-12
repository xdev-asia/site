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

/** The brand page: the logo, the marks of the sub-systems, colours and rules. File paths and colour values live in pages/Brand.tsx. */
export interface BrandContent {
  eyebrow: string;
  title: string;
  lede: string;
  logoTitle: string;
  versions: Record<"icon" | "blue" | "lit" | "flat" | "tile", { name: string; body: string }>;
  /** Label of a download link. */
  download: string;
  systemsTitle: string;
  systemsIntro: string;
  /** `body`: what the system is. `shape`: what stands on the agent side of its mark. */
  systems: Record<"xdev" | "cleaner" | "ui", { body: string; shape: string }>;
  colourTitle: string;
  colours: Record<"blue" | "orange" | "you" | "agent" | "ground" | "core", { name: string; use: string }>;
  typeTitle: string;
  type: string[];
  rulesTitle: string;
  rules: string[];
  filesTitle: string;
  files: string[];
}

export interface Content {
  meta: Record<"home" | "brand" | "terms" | "privacy" | "support" | "notFound", { title: string; description: string }>;
  nav: { brand: string; terms: string; privacy: string; support: string; legal: string; lang: string; contents: string };
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
  brand: BrandContent;
  terms: Doc;
  privacy: Doc;
  support: Doc;
  notFound: { title: string; body: string; home: string };
  footer: string;
}

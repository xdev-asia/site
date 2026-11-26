/**
 * A paragraph (string), a bullet list, or a paragraph with a stable anchor id (linked from outside,
 * for example a licence credit). Text may hold links as [label](url) and **bold**.
 */
export type Block = string | { list: string[] } | { id: string; text: string };

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
  systems: Record<"xdev" | "ui", { body: string; shape: string }>;
  colourTitle: string;
  colours: Record<"blue" | "orange" | "you" | "agent" | "ground" | "core", { name: string; use: string }>;
  typeTitle: string;
  type: string[];
  rulesTitle: string;
  rules: string[];
  filesTitle: string;
  files: string[];
}

/** A link with its words. */
export interface Link {
  label: string;
  href: string;
}

/** The personal home page, in the tasteskill plan: hero, apps, work, personas, writing, close. */
export interface HomeContent {
  /** The h1: who, and what he does. */
  title: string;
  /** The line under the h1: the hard fact and what xDev does. */
  lead: string;
  /** The quiet line under the buttons. */
  proof: string;
  /** What the hero's app picture shows, for screen readers. */
  artLabel: string;
  apps: {
    title: string;
    /** The grey second sentence of the heading. */
    more: string;
    /** One card per app: its name, a verb-and-object title and one or two sentences (links allowed). */
    items: Record<"sayitok" | "ui" | "ml", { title: string; body: string; label: string }>;
  };
  work: {
    title: string;
    body: string;
    link: Link;
    portraitAlt: string;
    /** Proof figures from the brief, each with its line (the counter-rolls moment). */
    figures: { value: string; label: string }[];
  };
  personas: {
    title: string;
    more: string;
    items: { name: string; role: string; alt: string }[];
  };
  writing: {
    title: string;
    body: string;
    items: { title: string; source: string; href: string }[];
    photoAlt: string;
  };
  close: { title: string; line: string };
}

/** One part of the Hungi page: a heading, one paragraph, a few short lines, and what its picture shows. */
export interface HungiFeature {
  title: string;
  body: string;
  /** Short lines under the paragraph (links and **bold** allowed). */
  points: string[];
  /** What the picture shows, for screen readers. */
  alt: string;
}

/** The product page of Hungi (pages/Hungi.tsx). Picture files, skill colours and link targets live in the page. */
export interface HungiContent {
  /** The h1: the app's name as on the stores. */
  name: string;
  /** The method in one sentence, under the name. */
  method: string;
  lead: string;
  /** The release state, shown where a store button would stand: the app is not on a store yet. */
  soon: string;
  /** The hero's one button, to the first part of the page. */
  seeInside: string;
  heroAlt: string;
  intro: { title: string; body: string; facts: { title: string; body: string }[] };
  /** Say, hear, read, write: always four, always in this order. */
  skills: { title: string; body: string; alt: string; items: { name: string; body: string }[]; end: string };
  call: HungiFeature;
  lookup: HungiFeature;
  play: HungiFeature;
  /** The course: its stages in order, and the topic packs beside it. */
  path: HungiFeature & { stages: string[]; packsTitle: string; packs: string[] };
  plus: {
    title: string;
    body: string;
    /** The free plan first, then the Plus plans: a name, a price with its period, and one to three lines. */
    plans: { name: string; price: string; per: string; lines: string[] }[];
    notes: string[];
  };
  /** Policy and support links, and the release state once more. */
  more: { title: string; body: string; privacy: string; terms: string; support: string; deleteAccount: string };
}

export interface Content {
  /** `image`: a page's own share picture (1200 x 750, a path on this site); the others share the site's. */
  meta: Record<"home" | "brand" | "terms" | "privacy" | "support" | "delete-account" | "hungi" | "notFound", { title: string; description: string; image?: string }>;
  nav: {
    skip: string;
    menu: string;
    main: string;
    apps: string;
    work: string;
    personas: string;
    writing: string;
    brand: string;
    terms: string;
    privacy: string;
    support: string;
    deleteAccount: string;
    legal: string;
    contents: string;
    /** The link to the other language, written in that language. */
    otherLang: string;
    /** The main action, word for word in the nav, the hero and the close. */
    email: string;
    /** The hero's second action. */
    seeApps: string;
  };
  home: HomeContent;
  brand: BrandContent;
  hungi: HungiContent;
  terms: Doc;
  privacy: Doc;
  support: Doc;
  /** Say It OK (and any app with an account): how to delete the account and its data, with or without the app. */
  "delete-account": Doc;
  notFound: { title: string; body: string; home: string };
  footer: {
    /** One plain line beside the logo. */
    lede: string;
    appsTitle: string;
    xdevTitle: string;
    contactTitle: string;
    /** Product names are trademarks of their owners (the real icons). */
    trademarks: string;
  };
}

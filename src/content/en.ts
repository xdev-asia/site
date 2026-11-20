import type { Content } from "./types";

const UPDATED = "Effective 20 November 2026";

export const en: Content = {
  meta: {
    home: { title: "xDev", description: "xDev builds tools for developers who work with AI coding agents." },
    terms: { title: "Terms of Use · xDev", description: "The terms that apply to every xDev app, website and service." },
    privacy: { title: "Privacy Policy · xDev", description: "What each xDev app, website and service does with your data." },
    support: { title: "Support · xDev", description: "How to get help with an xDev app." },
    brand: { title: "Brand · xDev", description: "The xDev logo, the marks of its systems, colours and rules, with files to download." },
    notFound: { title: "Page not found · xDev", description: "This page does not exist." },
  },
  nav: { brand: "Brand", terms: "Terms", privacy: "Privacy", support: "Support", legal: "Legal", lang: "Language", contents: "On this page" },
  home: {
    eyebrow: "xdev.asia",
    headline: "Tools for people who work with coding agents",
    lede: "xDev builds tools for developers who work with AI coding agents. Your code and your data stay on your machine.",
    aboutTitle: "About",
    about: [
      "xDev is the name behind the apps on this page. We build them in the open where we can: the design system is open source on GitHub.",
      "This site is the one place for what applies to all of them: the [Terms of Use](/terms/), the [Privacy Policy](/privacy/) and [Support](/support/).",
    ],
    appsTitle: "Apps",
    apps: [
      {
        name: "xDev account",
        glyph: "id",
        platform: "Web",
        body: "One sign-in for xDev apps and services, with a page to see and end your sessions.",
        links: [{ label: "id.xdev.asia", href: "https://id.xdev.asia" }],
      },
      {
        name: "xDev UI",
        glyph: "ui",
        platform: "React",
        body: "The design tokens and React components that xDev apps are built with. This site uses them too.",
        links: [
          { label: "ui.xdev.asia", href: "https://ui.xdev.asia" },
          { label: "Source", href: "https://github.com/xdev-asia/xdev-ui" },
        ],
      },
    ],
    principlesTitle: "How we build",
    principles: [
      { title: "Local first", body: "Your code, documents and sessions stay on your machine unless you choose to send them somewhere." },
      { title: "You confirm", body: "An app shows what it is about to do before it changes or removes anything." },
      { title: "No tracking", body: "No advertising and no analytics. Each app's data use is written down in the Privacy Policy." },
    ],
    contactTitle: "Contact",
    contact: [
      "Help with an app: see [Support](/support/).",
      "Questions about your data: [privacy@xdev.asia](mailto:privacy@xdev.asia).",
      "Code and issues: [github.com/xdev-asia](https://github.com/xdev-asia).",
    ],
  },

  terms: {
    title: "Terms of Use",
    stamp: `All xDev apps, websites and services · ${UPDATED}`,
    summary:
      "You may use xDev apps for your own work, at home or at your job. Open-source parts keep their own licences. The apps come as they are, without warranty. Keep a backup before you let any app change or remove files.",
    sections: [
      {
        id: "scope",
        title: "What these terms cover",
        blocks: [
          "These terms are an agreement between you and xDev (\"we\"). They cover every app, website and online service that we publish and that links to this page: the xDev account at id.xdev.asia and this website. Together we call them \"the apps\".",
          "By installing or using an app you accept these terms. If you do not accept them, do not use the apps.",
          "An app may add terms of its own, shown in the app or on its store page. Where those differ from this page, the app's own terms apply to that app.",
        ],
      },
      {
        id: "licence",
        title: "Your licence to use the apps",
        blocks: [
          "We give you a personal, non-exclusive, non-transferable licence to install and use each app on devices you own or control, for personal or business use.",
          "You may not sell, rent or sublicense an app, remove its notices, or present it as your own product. This does not limit what an open-source licence allows you (see the next section).",
        ],
      },
      {
        id: "open-source",
        title: "Open-source software",
        blocks: [
          "Parts of the apps are open source. Their source code is at [github.com/xdev-asia](https://github.com/xdev-asia), and each repository names its licence (for example Apache-2.0 for xDev UI).",
          "For that source code, the open-source licence applies and wins over these terms. These terms still cover the built apps we distribute and our online services.",
        ],
      },
      {
        id: "accounts",
        title: "Accounts",
        blocks: [
          "Most apps work without an account. Some services need an xDev account, which you create by signing in with GitHub, Google or an email link.",
          "Keep your sign-in safe and tell us if you think someone else is using your account. You can delete your account at any time from id.xdev.asia.",
        ],
      },
      {
        id: "paid",
        title: "Paid features",
        blocks: [
          "The apps listed on this site are free today. If we offer a paid plan or purchase, you will see the price and what it includes before you pay, and the terms shown at that point apply to the purchase.",
        ],
      },
      {
        id: "your-data",
        title: "Your files and content",
        blocks: [
          "Your code, files and other content stay yours. We claim no rights over them.",
          "The [Privacy Policy](/privacy/) says what each app reads, stores or sends.",
        ],
      },
      {
        id: "files",
        title: "Apps that change or remove files",
        blocks: [
          "Some apps may act on your files or run commands for you.",
          "You decide what an app does: review what it shows you before you confirm. Keep backups of anything you cannot afford to lose. We are not responsible for data that is lost because of an action you confirmed.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable use",
        blocks: [
          {
            list: [
              "Do not use the apps to break the law or to harm other people.",
              "Do not try to break, overload or get unauthorised access to our online services.",
              "Do not use our services to send spam or malware.",
            ],
          },
          "We may suspend an account that does any of these.",
        ],
      },
      {
        id: "third-party",
        title: "Other companies' tools and services",
        blocks: [
          "The apps can work with tools and services from other companies, such as coding agents, GitHub or Docker. Your use of those is covered by their own terms, and we are not responsible for them.",
        ],
      },
      {
        id: "warranty",
        title: "No warranty",
        blocks: [
          "The apps are provided \"as is\" and \"as available\", without warranty of any kind, whether express or implied, including fitness for a particular purpose and non-infringement. Preview versions may have faults and may change without notice.",
          "Some laws do not allow these exclusions. Where that is the case, they apply only as far as the law allows.",
        ],
      },
      {
        id: "liability",
        title: "Limit of liability",
        blocks: [
          "As far as the law allows, xDev is not liable for indirect, incidental or consequential damages, or for loss of data, profits or business, that come from using or not being able to use the apps.",
          "Our total liability for any claim about an app is limited to the amount you paid us for that app in the 12 months before the claim.",
        ],
      },
      {
        id: "changes",
        title: "Changes",
        blocks: [
          "We may change, add or stop an app or a feature. We may also change these terms. We post the new version on this page with a new effective date. If you keep using the apps after that date, you accept the new terms.",
        ],
      },
      {
        id: "ending",
        title: "Ending these terms",
        blocks: [
          "You can stop at any time by removing the apps and deleting your account. Your licence ends if you break these terms. The sections on warranty and liability continue to apply after the terms end.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [
          "Questions about these terms: [privacy@xdev.asia](mailto:privacy@xdev.asia), or open an issue at [github.com/xdev-asia](https://github.com/xdev-asia).",
          "These terms are written in English and Vietnamese. If the two versions differ, the English version applies.",
        ],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    stamp: `All xDev apps, websites and services · ${UPDATED}`,
    summary:
      "Our apps work on your device and we do not see your files. We have no advertising and no analytics, and we do not sell data. The only personal data we store is what an xDev account needs to sign you in.",
    sections: [
      {
        id: "scope",
        title: "Who we are and what this covers",
        blocks: [
          "This policy is from xDev (\"we\"). It covers every app, website and online service that we publish and that links to this page. Each has its own section below, because each handles different data.",
          "Before we release a new app, we add its section here.",
        ],
      },
      {
        id: "all-apps",
        title: "What is true for every app",
        blocks: [
          {
            list: [
              "No advertising and no advertising identifiers.",
              "No analytics or tracking code, ours or anyone else's.",
              "We do not sell or rent personal data.",
              "Your files and code are processed on your device. We do not receive them.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "xDev account (id.xdev.asia)",
        blocks: [
          "If you create an xDev account, we store:",
          {
            list: [
              "your name, email address and avatar URL;",
              "your account ids at GitHub or Google, if you sign in with them;",
              "your sessions: IP address, browser user agent, and the device name for desktop sessions.",
            ],
          },
          "We use this to sign you in and to show you your sessions. Sessions are deleted when they expire or when you sign out. Everything is deleted when you delete your account.",
          "The service runs on Cloudflare, which processes this data for us as our hosting provider. The account site uses a cookie to keep you signed in, and remembers your language choice in your browser.",
        ],
      },
      {
        id: "websites",
        title: "This website",
        blocks: [
          "xdev.asia sets no cookies and runs no analytics. It is hosted on GitHub Pages; like any web host, GitHub receives your IP address when your browser loads a page, under [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).",
        ],
      },
      {
        id: "support-data",
        title: "When you contact us",
        blocks: [
          "If you email us, we keep your message and address for as long as we need to answer and follow up. If you open an issue on GitHub, it is public and GitHub's privacy statement applies.",
        ],
      },
      {
        id: "rights",
        title: "Your choices and rights",
        blocks: [
          "You can see, change or delete your xDev account at id.xdev.asia. You can also ask us for a copy of the data we hold about you, or ask us to correct or delete it, by writing to [privacy@xdev.asia](mailto:privacy@xdev.asia).",
        ],
      },
      {
        id: "children",
        title: "Children",
        blocks: ["The apps are tools for software developers. They are not directed at children, and we do not knowingly collect data from children."],
      },
      {
        id: "changes",
        title: "Changes and contact",
        blocks: [
          "We post any change to this policy on this page with a new effective date.",
          "Questions about your data: [privacy@xdev.asia](mailto:privacy@xdev.asia).",
          "This policy is written in English and Vietnamese. If the two versions differ, the English version applies.",
        ],
      },
    ],
  },

  support: {
    title: "Support",
    stamp: "Help with xDev apps",
    summary: "The fastest way to reach us is a GitHub issue in the app's repository. Tell us your system version and the app version.",
    sections: [
      {
        id: "contact",
        title: "Get help",
        blocks: [
          {
            list: [
              "xDev UI: [open an issue](https://github.com/xdev-asia/xdev-ui/issues)",
              "Your account or your data: [privacy@xdev.asia](mailto:privacy@xdev.asia)",
            ],
          },
          "Please include your operating system version and the app version (in the app's About window).",
        ],
      },
      {
        id: "legal",
        title: "Terms and privacy",
        blocks: ["The [Terms of Use](/terms/) and the [Privacy Policy](/privacy/) apply to every xDev app."],
      },
    ],
  },

  notFound: { title: "Page not found", body: "There is nothing at this address.", home: "Go to the home page" },
  brand: {
    eyebrow: "xdev.asia / brand",
    title: "Brand",
    lede: "The xDev logo is two folded blades that cross into an x. The blue blade is you. The orange blade is the agent. Where they meet, the mark lights up.",
    logoTitle: "Logo",
    versions: {
      icon: { name: "Icon", body: "The main form: a dark ground, blades lit from above, a bright core. Use it from 48 px up." },
      blue: { name: "Blue icon", body: "A second form, for the parent brand only, where a dark icon does not fit." },
      lit: { name: "Lit mark", body: "The mark without a ground, for dark surfaces." },
      flat: { name: "Flat mark", body: "For light surfaces, print and one colour. Your blade takes the text colour." },
      tile: { name: "Small tile", body: "Flat, for 16 to 32 px: favicons and small avatars." },
    },
    download: "Download SVG",
    systemsTitle: "Systems",
    systemsIntro: "Every xDev system keeps your blade in the same place. Only the agent side changes. No system has a colour of its own.",
    systems: {
      xdev: { body: "The parent mark: xDev as a whole, and every app that has no mark of its own.", shape: "The orange blade: the agent crosses your line." },
      ui: { body: "Design tokens and React components shared by every xDev interface.", shape: "Four squares in four tones, like a row of tokens." },
    },
    colourTitle: "Colour",
    colours: {
      blue: { name: "xDev blue", use: "Your blade in the flat mark, and the accent of the interface." },
      orange: { name: "Agent orange", use: "The agent side of every mark. Used nowhere else." },
      you: { name: "Your blade, lit", use: "Light at the top, darker below the fold." },
      agent: { name: "Agent blade, lit", use: "The same fold, in orange." },
      ground: { name: "Icon ground", use: "Dark, with a blue glow on your side and an orange glow on the agent's side." },
      core: { name: "Core", use: "Where the blades overlap. The brightest point of the mark." },
    },
    typeTitle: "Type",
    type: [
      "The name is set in **Be Vietnam Pro 800**. The name of a system follows in weight 500, one step lighter in colour: **xDev** UI.",
    ],
    rulesTitle: "Rules",
    rules: [
      "Keep clear space around the mark of at least the width of one blade.",
      "Do not recolour the agent side. It is always #ff7a3d.",
      "Do not swap the blades. You are on the left.",
      "Do not show an agent shape without your blade.",
      "Do not stretch or rotate the icon, or add other effects to it.",
    ],
    filesTitle: "Files",
    files: [
      "Each picture on this page links to its SVG file. Use these files; do not redraw the mark.",
      "The full set, with the app icons for iOS and Android, is in the design system: [xdev-ui/assets/brand](https://github.com/xdev-asia/xdev-ui/tree/main/assets/brand).",
    ],
  },
  footer: "© 2026 xDev",
};

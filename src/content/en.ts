import type { Content } from "./types";

const UPDATED = "Effective 12 November 2026";

export const en: Content = {
  meta: {
    home: { title: "xDev", description: "xDev builds a workspace for AI coding agents and the developer tools around it." },
    terms: { title: "Terms of Use · xDev", description: "The terms that apply to every xDev app, website and service." },
    privacy: { title: "Privacy Policy · xDev", description: "What each xDev app, website and service does with your data." },
    support: { title: "Support · xDev", description: "How to get help with an xDev app." },
    notFound: { title: "Page not found · xDev", description: "This page does not exist." },
  },
  nav: { terms: "Terms", privacy: "Privacy", support: "Support", legal: "Legal", lang: "Language", contents: "On this page" },
  home: {
    eyebrow: "xdev.asia",
    headline: "Tools for people who work with coding agents",
    lede: "xDev builds a workspace for running and steering AI coding agents, and the small developer tools around it. Your code and your data stay on your machine.",
    aboutTitle: "About",
    about: [
      "xDev is the name behind the apps on this page. We build them in the open where we can: the core of xDev, the design system and Cleaner for xDev are open source on GitHub.",
      "This site is the one place for what applies to all of them: the [Terms of Use](/terms/), the [Privacy Policy](/privacy/) and [Support](/support/).",
    ],
    appsTitle: "Apps",
    apps: [
      {
        name: "xDev",
        icon: "/assets/xdev.png",
        platform: "macOS · early preview",
        body: "A workspace for running and steering AI coding agents from a computer and a phone. Projects and terminals live on your computer.",
        links: [{ label: "Source", href: "https://github.com/xdev-asia/xdev" }],
      },
      {
        name: "Cleaner for xDev",
        icon: "/assets/cleaner.png",
        platform: "macOS",
        body: "Shows where your disk space goes and cleans up developer caches safely. Items go to the Trash, after you confirm.",
        links: [
          { label: "Support", href: "/support/#cleaner" },
          { label: "Source", href: "https://github.com/xdev-asia/cleaner-for-xdev" },
        ],
      },
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
          "These terms are an agreement between you and xDev (\"we\"). They cover every app, website and online service that we publish and that links to this page: xDev, Cleaner for xDev, the xDev account at id.xdev.asia, and this website. Together we call them \"the apps\".",
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
          "Parts of the apps are open source. Their source code is at [github.com/xdev-asia](https://github.com/xdev-asia), and each repository names its licence (for example Apache-2.0 for xDev and xDev UI, MIT for Cleaner for xDev).",
          "For that source code, the open-source licence applies and wins over these terms. These terms still cover the built apps we distribute and our online services.",
        ],
      },
      {
        id: "app-stores",
        title: "Apps from the App Store",
        blocks: [
          "If you get an app from Apple's App Store, Apple's Licensed Application End User License Agreement (the standard EULA) also applies to that app. You can read it at [apple.com/legal/internet-services/itunes/dev/stdeula](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).",
          {
            list: [
              "These terms are between you and xDev, not Apple. xDev, not Apple, is responsible for the app and its content.",
              "Apple has no duty to provide maintenance or support for the app.",
              "Apple handles payments and refunds for purchases made through the App Store, under its own terms.",
              "Apple and its subsidiaries are third-party beneficiaries of these terms for the App Store edition and may enforce them.",
            ],
          },
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
          "Some apps act on your files or run commands for you. Cleaner for xDev moves items to the Trash; xDev runs the agents and commands you start.",
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
        id: "cleaner",
        title: "Cleaner for xDev",
        blocks: [
          "Cleaner for xDev does not collect, store or share any personal data. This applies to the Mac App Store edition and to the edition downloaded from GitHub.",
          "**What the app reads.** The names, sizes and dates of files in the folders you scan, to show where your disk space goes. To find duplicate files it reads file contents and compares their checksums on your Mac. For Disk Health it reads the drive's health data. None of this leaves your Mac, and the app keeps no record of it after you quit.",
          "**Network.** The app makes no network connections. It has no accounts and no crash reporting of its own.",
          "**Apple Intelligence.** When you ask the app to explain an item or summarise a scan, it sends names, paths and sizes, never file contents, to Apple's on-device language model. The model runs on your Mac and the app sends nothing to Apple or to us.",
          "**Crash reports from Apple.** If you share analytics with app developers in System Settings, Apple may send us anonymous crash reports. Apple's privacy policy covers that data.",
        ],
      },
      {
        id: "xdev",
        title: "xDev",
        blocks: [
          "xDev keeps your projects, terminal sessions and settings on your computer. We do not receive them.",
          "When you pair a phone with your computer, the two devices talk to each other over an encrypted link.",
          "The coding agents and command-line tools you run inside xDev are made by other companies and may send data to their makers. Their own privacy policies cover that.",
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
              "Cleaner for xDev: [open an issue](https://github.com/xdev-asia/cleaner-for-xdev/issues)",
              "xDev: [open an issue](https://github.com/xdev-asia/xdev/issues)",
              "xDev UI: [open an issue](https://github.com/xdev-asia/xdev-ui/issues)",
              "Your account or your data: [privacy@xdev.asia](mailto:privacy@xdev.asia)",
            ],
          },
          "Please include your operating system version and the app version (in the app's About window).",
        ],
      },
      {
        id: "cleaner",
        title: "Cleaner for xDev: frequent questions",
        blocks: [
          "**Why does the App Store edition ask me to choose a folder?** It runs in the App Sandbox, so it can only read folders you pick. Choose your Home folder to scan everything in it.",
          "**Is anything deleted?** No. Cleaning moves items to the Trash. You can put them back until you empty the Trash.",
          "**What do Safe and Review mean?** Safe items are caches and build outputs that tools rebuild on their own. Review items may hold work, so the app never selects them for you.",
          "**Where does the AI run?** Explanations and summaries use Apple Intelligence on your Mac. Nothing is sent anywhere. The app works without it.",
          "**Where is the edition with every feature?** The [direct download](https://github.com/xdev-asia/cleaner-for-xdev/releases) on GitHub is signed and notarized, and can also run each tool's own clean-up command.",
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
  footer: "© 2026 xDev",
};

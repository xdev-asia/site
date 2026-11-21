import type { Content } from "./types";

const UPDATED = "Effective 21 November 2026";

export const en: Content = {
  meta: {
    home: { title: "Duy Tran · xDev", description: "Duy Tran (Trần Đức Duy): Solution Architect with 10+ years building software products, making AI tools and the Say It OK app through xDev." },
    terms: { title: "Terms of Use · xDev", description: "The terms that apply to every xDev app, website and service." },
    privacy: { title: "Privacy Policy · xDev", description: "What each xDev app, website and service does with your data." },
    support: { title: "Support · xDev", description: "How to get help with an xDev app." },
    "delete-account": { title: "Delete your Say It OK account · xDev", description: "How to delete your Say It OK account and learning data, with or without the app." },
    brand: { title: "Brand · xDev", description: "The xDev logo, the marks of its systems, colours and rules, with files to download." },
    notFound: { title: "Page not found · xDev", description: "This page does not exist." },
  },
  nav: { brand: "Brand", terms: "Terms", privacy: "Privacy", support: "Support", legal: "Legal", lang: "Language", contents: "On this page" },
  home: {
    eyebrow: "xdev.asia",
    name: "Duy Tran",
    alias: "Trần Đức Duy · Joiny",
    role: "Solution Architect · Product builder",
    lede: "I design healthcare and insurance platforms: the architecture, integrations and infrastructure behind them. Through **xDev**, I build AI tools and share practical notes on software engineering.",
    portrait: { src: "/assets/duy/portrait.jpg", alt: "Portrait of Duy Tran" },
    ctas: [
      { label: "See the apps", href: "#apps", primary: true },
      { label: "Contact", href: "#contact" },
      { label: "GitHub", href: "https://github.com/tdduydev" },
    ],
    facts: [
      { value: "10+ years", label: "building software products" },
      { value: "Healthcare · Insurance", label: "main domains" },
      { value: "Applied AI", label: "current focus" },
    ],
    personasTitle: "Four roles, one person",
    personasIntro: "Depending on the day, I am the one setting direction, drawing the architecture, building the AI or polishing the interface.",
    personas: [
      { name: "Duy Tran", role: "Cyber CEO", body: "Leading the vision and strategy to build simple, powerful solutions for everyone.", img: "/assets/duy/persona-1.jpg", tone: "cyan" },
      { name: "Code Duy", role: "System Architect", body: "Architecting robust systems and turning ideas into reliable technology.", img: "/assets/duy/persona-2.jpg", tone: "teal" },
      { name: "Neo Tran", role: "AI Engineer", body: "Building intelligent, efficient and delightful features users love.", img: "/assets/duy/persona-3.jpg", tone: "violet" },
      { name: "Pixel Duy", role: "Cyber Designer", body: "Crafting intuitive experiences and beautiful designs that connect.", img: "/assets/duy/persona-4.jpg", tone: "pink" },
    ],
    workTitle: "What I work on",
    work: [
      { title: "System architecture", body: "Service boundaries, APIs, data flows and integration across business systems, especially in healthcare and insurance." },
      { title: "Applied AI", body: "Applications that connect language models with an organisation's knowledge and workflows, with AI placed where it helps." },
      { title: "Platform engineering", body: "Containerised infrastructure, delivery pipelines, observability and identity (Keycloak)." },
      { title: "Teaching", body: "Học cùng Duy and ML nhìn là hiểu: programming, AI and DevOps explained simply, with code that runs." },
    ],
    appsTitle: "Apps",
    apps: [
      {
        name: "Say It OK",
        icon: "/assets/sayitok/icon.png",
        platform: "iOS · Android",
        body: "English speaking practice for Vietnamese learners, from zero to C2: repeat-after-me lessons, an AI tutor, topic packs, memory tips and a daily reminder.",
        links: [
          { label: "Privacy", href: "/privacy/#sayitok" },
          { label: "Delete account", href: "/delete-account/" },
        ],
      },
      {
        name: "xDev UI",
        glyph: "ui",
        platform: "React",
        body: "The design tokens and React components behind xDev apps. This site uses them too.",
        links: [
          { label: "ui.xdev.asia", href: "https://ui.xdev.asia" },
          { label: "Source", href: "https://github.com/xdev-asia/xdev-ui" },
        ],
      },
      {
        name: "ML nhìn là hiểu",
        glyph: "ml",
        platform: "Python",
        body: "Thirteen machine-learning algorithms written from scratch in plain Python, with scikit-learn comparisons. Runnable code for the video series.",
        links: [{ label: "Source", href: "https://github.com/tdduydev/ml-nhin-la-hieu" }],
      },
    ],
    writingTitle: "Writing",
    writing: [
      { title: "Who is responsible for what AI produces? (Vietnamese)", source: "chungta.vn", href: "https://chungta.vn/goc-nhin/ai-se-chiu-trach-nhiem-cho-ket-qua-tu-ai-1141602.html" },
      { title: "Học cùng Duy: notes on programming, AI and architecture", source: "Facebook", href: "https://www.facebook.com/duydev/" },
    ],
    contactTitle: "Contact",
    contactIntro: "Partnerships, architecture advice or feedback on the apps: send me a note.",
    contact: [
      { label: "Email", value: "duy@xdev.asia", href: "mailto:duy@xdev.asia" },
      { label: "GitHub", value: "tdduydev", href: "https://github.com/tdduydev" },
      { label: "LinkedIn", value: "duydev", href: "https://www.linkedin.com/in/duydev" },
      { label: "Facebook", value: "Học cùng Duy", href: "https://www.facebook.com/duydev/" },
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
          "These terms are an agreement between you and xDev (\"we\"). They cover every app, website and online service that we publish and that links to this page: the xDev account, the Say It OK app and this website. Together we call them \"the apps\".",
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
          "Keep your sign-in safe and tell us if you think someone else is using your account. You can delete your account at any time in the app or by writing to us.",
        ],
      },
      {
        id: "paid",
        title: "Paid features",
        blocks: [
          "The apps listed on this site are free, except the Say It OK Plus plan described below. If we offer another paid plan or purchase, you will see the price and what it includes before you pay, and the terms shown at that point apply to the purchase.",
        ],
      },
      {
        id: "sayitok",
        title: "Say It OK",
        blocks: [
          "All Say It OK lessons, the dictionary, reviews and the placement test are free. The free iPhone version shows ads and limits AI tutor and AI advisor use per day.",
          "**Say It OK Plus** is an auto-renewing subscription: monthly, yearly, or a yearly Family plan (shared through Apple Family Sharing).",
          {
            list: [
              "Payment is charged to your Apple ID when you confirm the purchase. The plan renews unless auto-renew is turned off at least 24 hours before the end of the current period; your account is charged for the next period within the 24 hours before the current one ends.",
              "The yearly plan may include a 7-day free trial for your first subscription. If you do not cancel before the trial ends, the plan becomes paid. Any unused trial ends when you buy another plan.",
              "Manage or cancel in iPhone Settings → your name → Subscriptions, or in the app under Profile → Plan. Refunds are handled by Apple under App Store policy.",
              "Apple's standard licence ([EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)) also applies to the iPhone version.",
            ],
          },
          "Answers from the AI tutor and advisor can be wrong. Say It OK is a practice tool, not a replacement for a teacher or an official certificate.",
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
          "Questions about these terms: [duy@xdev.asia](mailto:duy@xdev.asia), or open an issue at [github.com/xdev-asia](https://github.com/xdev-asia).",
          "These terms are written in English and Vietnamese. If the two versions differ, the English version applies.",
        ],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    stamp: `All xDev apps, websites and services · ${UPDATED}`,
    summary:
      "We do not sell data. Our developer tools work on your device, with no advertising and no analytics. Say It OK stores your account and learning progress on our server, and its iPhone version has ads and Firebase analytics; the Say It OK section below lists each one.",
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
              "We do not sell or rent personal data.",
              "No advertising, advertising identifiers or analytics, except in the iPhone version of Say It OK (see its section).",
              "Your files and code are processed on your device. We do not receive them.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "xDev account",
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
        id: "sayitok",
        title: "Say It OK (iOS, Android)",
        blocks: [
          "Say It OK stores on our server:",
          {
            list: [
              "**Account:** your xDev user ID, and the email and display name that Apple or Google give us when you sign in.",
              "**Learning:** how you want to be addressed, your goal, test results, lesson progress, vocabulary, points and badges.",
              "**AI conversations:** the text of what you said (after speech recognition) and the replies, so the tutor and advisor keep the context.",
              "**Subscription (iPhone):** the Apple transaction ID, plan and expiry date. We never receive card numbers or payment details.",
            ],
          },
          "**Voice.** On iPhone, speech is recognised on the device by Apple's engine. On Android, the app uses the phone's built-in speech recognition service (usually Google's), which handles the audio under its provider's policy. The app never sends voice recordings to our server, only the recognised text when it needs scoring or an AI reply.",
          "**AI.** When it can, the AI runs on your device. When a stronger model is needed, the text of your question goes through xDev's AI server to a language model provider to write the reply.",
          "**Analytics and ads (iPhone only).** Firebase (Google) collects anonymous usage statistics and crash reports; we send only an internal user ID, never your email or name. Google AdMob shows ads in the free version; personalised ads are used only if you allow tracking in the iOS prompt, which you can turn off in Settings → Privacy & Security → Tracking. Plus members see no ads. The Android version has no ads and sends no analytics today.",
          "The Say It OK service runs on our own server, reached through Cloudflare. Data is shared only with the providers named here, as far as needed to run the app.",
          "**Deleting your data.** In the app: Profile → Delete account. Without the app: see [Delete your Say It OK account](/delete-account/). All the data above is removed from our server when the account is deleted.",
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
          "You can see, change or delete your xDev account in the app. You can also ask us for a copy of the data we hold about you, or ask us to correct or delete it, by writing to [duy@xdev.asia](mailto:duy@xdev.asia).",
        ],
      },
      {
        id: "children",
        title: "Children",
        blocks: ["Our apps are for adults: developer tools and Say It OK. They are not directed at children, and we do not knowingly collect data from children under 13."],
      },
      {
        id: "changes",
        title: "Changes and contact",
        blocks: [
          "We post any change to this policy on this page with a new effective date.",
          "Questions about your data: [duy@xdev.asia](mailto:duy@xdev.asia).",
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
              "Say It OK: [duy@xdev.asia](mailto:duy@xdev.asia). To delete your account, see [Delete your Say It OK account](/delete-account/).",
              "xDev UI: [open an issue](https://github.com/xdev-asia/xdev-ui/issues)",
              "Your account or your data: [duy@xdev.asia](mailto:duy@xdev.asia)",
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

  "delete-account": {
    title: "Delete your Say It OK account",
    stamp: `Say It OK by xDev · ${UPDATED}`,
    summary: "You can delete your Say It OK account and all your learning data at any time, in the app or by email.",
    sections: [
      {
        id: "in-app",
        title: "Option 1: in the app",
        blocks: [{ list: ["Open Say It OK and sign in.", "Go to **Profile → Delete account** and confirm. The account and its data are deleted at once."] }],
      },
      {
        id: "by-email",
        title: "Option 2: without the app",
        blocks: [
          "Email [duy@xdev.asia](mailto:duy@xdev.asia?subject=Delete%20my%20Say%20It%20OK%20account) with the subject \"Delete my Say It OK account\", from the email address you sign in with (Apple or Google). We confirm and delete it within 30 days.",
        ],
      },
      {
        id: "what",
        title: "What is deleted",
        blocks: [
          {
            list: [
              "Account: user ID, email, display name.",
              "Learning: form of address, goal, test results, progress, vocabulary, points, badges, AI conversations.",
              "Subscription: transaction ID, plan, expiry date.",
            ],
          },
          "We keep no copy after deletion, except the server's automatic backups, which are overwritten within 14 days.",
        ],
      },
      {
        id: "subscription",
        title: "Your subscription",
        blocks: ["Deleting the account does not cancel a Say It OK Plus subscription on the App Store. Cancel it in iPhone Settings → your name → Subscriptions."],
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

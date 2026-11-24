import type { Content } from "./types";

const UPDATED = "Effective 25 November 2026";

export const en: Content = {
  meta: {
    home: { title: "Duy Tran: solution architect and app builder", description: "Duy Tran designs healthcare and insurance platforms and, through xDev, builds AI tools such as Hungi, a language learning assistant." },
    terms: { title: "Terms of Use · xDev", description: "The terms that apply to every xDev app, website and service." },
    privacy: { title: "Privacy Policy · xDev", description: "What each xDev app, website and service does with your data." },
    support: { title: "Support · xDev", description: "How to get help with an xDev app." },
    "delete-account": { title: "Delete your Hungi account · xDev", description: "How to delete your Hungi account and learning data, with or without the app." },
    brand: { title: "Brand · xDev", description: "The xDev logo, the marks of its systems, colours and rules, with files to download." },
    notFound: { title: "Page not found · xDev", description: "This page does not exist." },
  },
  nav: {
    skip: "Skip to content",
    menu: "Menu",
    main: "Main",
    apps: "Apps",
    work: "Platforms",
    personas: "Personas",
    writing: "Writing",
    brand: "Brand",
    terms: "Terms",
    privacy: "Privacy",
    support: "Support",
    deleteAccount: "Delete account",
    legal: "Legal",
    contents: "On this page",
    otherLang: "Tiếng Việt",
    email: "Email Duy",
    seeApps: "See the apps",
  },
  home: {
    title: "Duy Tran, solution architect and app builder",
    lead: "10+ years building software products. I design healthcare and insurance platforms, and through xDev I build AI tools and apps and teach.",
    proof: "Building Hungi, a language learning assistant for iOS and Android.",
    artLabel: "Hungi on a phone: Hungi the puppy hears a sentence, scores it 92 and colours each word, with a proficiency test result of 455 out of 600, level B2.",
    apps: {
      title: "Apps from xDev.",
      more: "For learners and for developers.",
      items: {
        sayitok: {
          label: "Hungi",
          title: "Hungi teaches you to speak, listen, read and write",
          body: "A language learning assistant for Vietnamese learners: Hungi the puppy hears each sentence you say and scores it at once. Every lesson goes speak, listen, read, write. English from zero to C2, and the first Japanese lessons. Not in the stores yet.",
        },
        ui: {
          label: "xDev UI",
          title: "xDev UI styles xDev apps",
          body: "Design tokens and React components for xDev apps. Docs at [ui.xdev.asia](https://ui.xdev.asia), source on [GitHub](https://github.com/xdev-asia/xdev-ui).",
        },
        ml: {
          label: "ML nhìn là hiểu",
          title: "ML nhìn là hiểu teaches AI",
          body: "Machine learning through algorithms written from scratch in Python. The code is on [GitHub](https://github.com/tdduydev/ml-nhin-la-hieu).",
        },
      },
    },
    work: {
      title: "Healthcare and insurance platforms",
      body: "As a solution architect I design these platforms end to end: the architecture, the integrations between systems and the infrastructure they run on.",
      link: { label: "Read my profile on LinkedIn", href: "https://www.linkedin.com/in/duydev" },
      portraitAlt: "Duy Tran in a dark blazer, arms crossed, smiling",
      figures: [
        { value: "10+", label: "years building software products" },
        { value: "13", label: "machine-learning algorithms written from scratch" },
        { value: "600", label: "points at the top of the Hungi test, on CEFR" },
      ],
    },
    personas: {
      title: "Four personas from my own art.",
      more: "The roles I switch between: leading, architecture, AI and design.",
      items: [
        { name: "Duy Tran", role: "Cyber CEO", alt: "Duy Tran as the Cyber CEO, in round sunglasses before a neon city" },
        { name: "Code Duy", role: "System Architect", alt: "Code Duy, the System Architect, in a hoodie before green code" },
        { name: "Neo Tran", role: "AI Engineer", alt: "Neo Tran, the AI Engineer, in clear glasses before a network diagram" },
        { name: "Pixel Duy", role: "Cyber Designer", alt: "Pixel Duy, the Cyber Designer, in a beanie and headphones" },
      ],
    },
    writing: {
      title: "Writing on software and AI",
      body: "My articles are in Vietnamese. I also teach as Học cùng Duy on Facebook.",
      items: [
        { title: "Who is responsible for what AI produces?", source: "chungta.vn, in Vietnamese", href: "https://chungta.vn/goc-nhin/ai-se-chiu-trach-nhiem-cho-ket-qua-tu-ai-1141602.html" },
        { title: "Học cùng Duy", source: "Facebook", href: "https://www.facebook.com/duydev/" },
      ],
      photoAlt: "Duy Tran in a dark hoodie, arms crossed, smiling",
    },
    close: {
      title: "Partnerships, architecture advice and app feedback",
      line: "Write in English or Vietnamese to duy@xdev.asia.",
    },
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
          "These terms are an agreement between you and xDev (\"we\"). They cover every app, website and online service that we publish and that links to this page: the xDev account, the Hungi app and this website. Together we call them \"the apps\".",
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
          "The apps listed on this site are free, except the Hungi Plus plan described below. If we offer another paid plan or purchase, you will see the price and what it includes before you pay, and the terms shown at that point apply to the purchase.",
        ],
      },
      {
        id: "sayitok",
        title: "Hungi",
        blocks: [
          "Hungi is xDev's language learning app. The app teaches English today; Japanese has its first lessons.",
          "All Hungi lessons, the dictionary, reviews and the placement test are free. The free version shows ads (iPhone and Android) and limits AI tutor, AI advisor and server translation use per day.",
          "**Hungi Plus** is an auto-renewing subscription: monthly, yearly, or a yearly Family plan (shared through Apple Family Sharing).",
          {
            list: [
              "Payment is charged to your Apple ID when you confirm the purchase. The plan renews unless auto-renew is turned off at least 24 hours before the end of the current period; your account is charged for the next period within the 24 hours before the current one ends.",
              "The yearly plan may include a 7-day free trial for your first subscription. If you do not cancel before the trial ends, the plan becomes paid. Any unused trial ends when you buy another plan.",
              "Manage or cancel in iPhone Settings → your name → Subscriptions, or in the app under Tôi → Cài đặt → Gói học (Me → Settings → Plan). Refunds are handled by Apple under App Store policy.",
              "Apple's standard licence ([EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)) also applies to the iPhone version.",
            ],
          },
          "**Content made with AI.** Some content in Hungi is written or graded with AI: example sentences, dictionary entries outside the app's own word list, the replies of the AI tutor and advisor, and the scoring of your speaking and writing. It can be wrong or incomplete. Hungi is a practice aid, not professional advice, and it does not replace a teacher.",
          "**Level results are estimates.** The CEFR level from the entry test and the 0–600 score from the proficiency test (\"Kiểm tra trình độ\") are estimates to guide your practice. They are not an official certificate and do not replace an exam such as IELTS, TOEIC or Cambridge.",
          {
            id: "sayitok-sources",
            text: "**Dictionary checks.** Dictionary entries written by AI are checked automatically against open data sources:",
          },
          {
            list: [
              "parts of speech against [Open English WordNet](https://github.com/globalwordnet/english-wordnet), licensed CC BY 4.0;",
              "US pronunciation against the [CMU Pronouncing Dictionary](https://github.com/cmusphinx/cmudict), under a BSD-style licence.",
            ],
          },
          "An entry that fails the check can still be shown, and it is queued for a person to review. Vietnamese meanings are reviewed by people over time.",
          "**Accepting these terms.** You accept these terms and the [Privacy Policy](/privacy/) when you tick the box while creating your account in the app. If you keep using the app after these terms change, you accept the new version from the effective date shown at the top of this page.",
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
      "We do not sell data. Our developer tools work on your device, with no advertising and no analytics. Hungi stores your account and learning progress on our server, uses Firebase statistics and crash reports (you can turn them off in the app), and its free version has ads; the Hungi section below lists each one.",
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
              "No advertising, advertising identifiers or analytics, except in Hungi (see its section).",
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
        title: "Hungi (iOS, Android)",
        blocks: [
          "Hungi stores on our server:",
          {
            list: [
              "**Account:** your xDev user ID, and the email and display name that Apple or Google give us when you sign in.",
              "**Learning:** how you want to be addressed, your goal, the language you are learning, test results, lesson progress, vocabulary, points and badges.",
              "**AI conversations:** the text of what you said (after speech recognition) and the replies, so the tutor and advisor keep the context.",
              "**AI use:** how many AI calls each feature made, how long they took and their token counts, tied to your account to apply the daily limits. This record holds no question or answer text.",
              "**Subscription (iPhone):** the Apple transaction ID, plan and expiry date. We never receive card numbers or payment details.",
            ],
          },
          "The app stores when you accepted the terms and which version.",
          "**Voice.** On iPhone, speech is recognised by Apple's engine: on the device when it supports that language, otherwise through Apple's servers under Apple's policy. On Android, the app uses the phone's built-in speech recognition service (usually Google's), which handles the audio under its provider's policy. The app never sends voice recordings to our server, only the recognised text when it needs scoring or an AI reply.",
          "**Camera, photos and translation.** \"Chụp chữ để học\" reads text in a photo on the phone itself (Apple Vision or Google ML Kit). Photos are not stored and never sent to our server; the app asks for the camera only when you tap to take a picture. Translation uses the phone's own translator (Apple Translation or ML Kit) when it is available, and that works offline. When the phone cannot translate, the text to translate (never voice or photos) goes through xDev's AI server to a language model provider; a short sentence (up to 160 characters) and its translation are kept for reuse, not tied to your account.",
          "**AI.** When it can, the AI runs on your device. When a stronger model is needed, the text of your question goes through xDev's AI server to a language model provider to write the reply.",
          "**Learning your habits.** The app learns on the phone when you usually study and how long your finished lessons are, to pick the reminder time and the minutes it suggests. Only aggregate numbers (lessons per hour and weekday, whether reminders were followed, total minutes) are stored encrypted on the phone and synced to our server so your devices share them; no lesson content, voice or per-session timestamps are sent. This is on by default; turning off Tôi → Cài đặt → Học theo thói quen của tôi deletes this data on the phone and on the server.",
          "**Statistics and crash reports (iOS, Android).** Firebase (Google) collects anonymous usage statistics (action names such as lesson started or finished, with a few numbers, and first-run choices such as the language you picked or where you heard of the app) and crash reports when the app fails; we send only an internal user ID, never your email, name, voice or answers. This is on by default; turn it off any time in the app: Tôi → Cài đặt → Gửi báo lỗi và thống kê.",
          "**Ads (free version, iPhone and Android).** Google AdMob shows ads in the free version. On iPhone, personalised ads are used only if you allow tracking in the iOS prompt, which you can turn off in Settings → Privacy & Security → Tracking. On Android the app always asks for non-personalised ads; AdMob still receives the device's advertising ID, an approximate location from the IP address and device information to show ads, cap their frequency and prevent fraud, under Google's policy. Plus members see no ads.",
          "The Hungi service runs on our own server, reached through Cloudflare. Data is shared only with the providers named here, as far as needed to run the app.",
          "**Deleting your data.** In the app: Tôi → Cài đặt → Xoá tài khoản (Me → Settings → Delete account). Without the app: see [Delete your Hungi account](/delete-account/). All the data above is removed from our server when the account is deleted.",
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
        blocks: ["Our apps are for adults: developer tools and Hungi. They are not directed at children, and we do not knowingly collect data from children under 13."],
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
              "Hungi: [duy@xdev.asia](mailto:duy@xdev.asia). To delete your account, see [Delete your Hungi account](/delete-account/).",
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
    title: "Delete your Hungi account",
    stamp: `Hungi by xDev · ${UPDATED}`,
    summary: "You can delete your Hungi account and all your learning data at any time, in the app or by email.",
    sections: [
      {
        id: "in-app",
        title: "Option 1: in the app",
        blocks: [{ list: ["Open Hungi and sign in.", "Go to **Tôi → Cài đặt → Xoá tài khoản (Me → Settings → Delete account)** and confirm. The account and its data are deleted at once."] }],
      },
      {
        id: "by-email",
        title: "Option 2: without the app",
        blocks: [
          "Email [duy@xdev.asia](mailto:duy@xdev.asia?subject=Delete%20my%20Hungi%20account) with the subject \"Delete my Hungi account\", from the email address you sign in with (Apple or Google). We confirm and delete it within 30 days.",
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
        blocks: ["Deleting the account does not cancel a Hungi Plus subscription on the App Store. Cancel it in iPhone Settings → your name → Subscriptions."],
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
  footer: {
    lede: "AI tools, apps and teaching by Duy Tran.",
    appsTitle: "Apps",
    xdevTitle: "xDev",
    contactTitle: "Contact",
    trademarks: "Product names and logos are trademarks of their owners.",
  },
};

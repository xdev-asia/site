import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, JetBrains_Mono } from 'next/font/google'; // taste-skill-ignore: mono for code only
import './globals.css';

const sans = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});
const mono = JetBrains_Mono({ // taste-skill-ignore: mono for code only
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-code',
  display: 'swap',
});

const title = 'xDev — local-first agentic IDE';
const description =
  'xDev is a local-first agentic IDE. Run Claude Code, Codex and other coding agents side by side, each in its own git worktree, review every diff, and hand them your docs over MCP.';

export const metadata: Metadata = {
  metadataBase: new URL('https://xdev.asia'),
  title,
  description,
  applicationName: 'xDev',
  alternates: { canonical: '/' },
  icons: { icon: '/assets/logo.png', apple: '/assets/logo.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'xDev',
    title,
    description,
    images: [{ url: '/assets/app-stale.png', width: 2560, height: 1600, alt: 'xDev flagging billing.md as out of date after a commit' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/assets/app-stale.png'] },
};

export const viewport: Viewport = { themeColor: '#1a4fd6' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'xDev',
  url: 'https://xdev.asia',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Windows, macOS, Linux',
  description,
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  downloadUrl: 'https://github.com/xdev-asia/xdev-ide/releases/latest',
  codeRepository: 'https://github.com/xdev-asia/xdev-ide',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline script adds the js class before paint, so React sees a different class list.
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Motion styles key off .js so the page stays fully visible when scripts are off. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

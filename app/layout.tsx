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

const title = 'xDev IDE — many coding agents, one window';
const description =
  'xDev IDE is a local-first agentic IDE. Run Claude Code, Codex and other coding agents side by side, each in its own git worktree. See who needs you, review each diff, and commit from one window.';

export const metadata: Metadata = {
  metadataBase: new URL('https://xdev.asia'),
  title,
  description,
  applicationName: 'xDev IDE',
  alternates: { canonical: '/' },
  icons: { icon: '/assets/logo.png', apple: '/assets/logo.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'xDev IDE',
    title,
    description,
    images: [{ url: '/assets/og.png', width: 1200, height: 630, alt: 'xDev IDE with three agent tasks, one waiting for approval' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/assets/og.png'] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f4f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0d' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'xDev IDE',
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

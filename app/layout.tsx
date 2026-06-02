import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/api/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur z-50">
          <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              {siteConfig.name}
            </Link>
            <ul className="flex items-center gap-6 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 mt-16">
          <div className="max-w-5xl mx-auto px-6 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between gap-4">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p>
              Built with{' '}
              <a
                href="https://nextjs.org"
                className="underline hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

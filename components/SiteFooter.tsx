import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Wordmark + tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span
                aria-hidden="true"
                className="inline-block w-5 h-5 rounded-sm bg-primary"
              />
              <span className="font-display text-base font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              A clean, modern starter for personal and small-business
              websites. Real URLs, content as code, Vercel-ready.
            </p>
          </div>

          {/* Site nav */}
          <div>
            <h4 className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Site
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/tylerdotai/nextjs-website-template"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {siteConfig.name}. Released under the MIT License.
          </p>
          <p className="font-mono">
            Built with Next.js · TypeScript · Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
}

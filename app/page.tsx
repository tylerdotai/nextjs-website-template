import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileCode2, Globe, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero — asymmetric, oversized serif */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow mb-6 block">v1.3.0 · A reference template</span>
            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.02]">
              A website
              <br />
              you actually
              <br />
              <span className="italic text-primary">own.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md">
              Next.js 16, Tailwind v4, and MDX in a single repo.
              Real URLs for every page, content lives next to your code,
              and Vercel deploys on every push.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                See the architecture
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="https://github.com/tylerdotai/nextjs-website-template"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                View on GitHub
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Big-numbered feature list — editorial, not card-grid */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {[
              {
                n: '01',
                title: 'Real URLs',
                body: 'Every file in app/ is a route. /services, /about, /blog/post-slug — all real, all indexable, all linked from a real nav.',
                icon: Globe,
              },
              {
                n: '02',
                title: 'Content as code',
                body: 'Pages and posts are MDX files in your repo. Edit, commit, push. No dashboard, no API keys, no SaaS to babysit.',
                icon: FileCode2,
              },
              {
                n: '03',
                title: 'Works with AI tools',
                body: 'Next.js conventions are well-known to LLMs. Claude Code and friends can edit a single component without re-reading the whole site.',
                icon: Sparkles,
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.n}
                  className="bg-surface p-6 sm:p-8 lg:p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">
                      {f.n}
                    </span>
                    <Icon
                      className="w-5 h-5 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight mb-3">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {f.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* The "URL problem" callout — proof this is solved */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow-mark mb-4 block">The URL problem</span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
              You&apos;re on <code className="font-mono text-2xl sm:text-3xl text-primary bg-primary-container px-2 py-0.5 rounded">/services</code>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              This page is served from <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">app/services/page.tsx</code> — that&apos;s
              the whole point of the App Router. Files are URLs.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Open the services page
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="surface-tinted font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground">app/services/page.tsx</span>
              </div>
              <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed">
                <code>
{`import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'What we do.',
};

export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      <p>Three things we do well.</p>
    </div>
  );
}`}
                </code>
              </pre>
              <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                <span className="text-primary">→</span> Visit{' '}
                <code className="text-foreground">/services</code> to see it live.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack callout */}
      <section className="border-t border-border bg-surface-variant">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <span className="eyebrow mb-3 block">Stack</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight">
                Boring on purpose.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                Every dependency is widely used, well-documented, and
                maintained. No clever tricks. No abandoned packages.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {[
                ['Framework', 'Next.js 16'],
                ['Language', 'TypeScript 6'],
                ['Styling', 'Tailwind v4'],
                ['Content', 'MDX'],
                ['Icons', 'Lucide'],
                ['Deploy', 'Vercel'],
                ['Tests', 'Vitest'],
                ['CI', 'GitHub Actions'],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-2">
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="font-medium mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { Code, Layers, Gauge } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'What we do and how we do it.',
};

const services = [
  {
    icon: Code,
    n: '01',
    title: 'Web Development',
    body: 'Production Next.js applications with TypeScript, Tailwind, and modern deployment workflows. Real URLs, real SEO, real performance.',
  },
  {
    icon: Layers,
    n: '02',
    title: 'Design Systems',
    body: 'Reusable component libraries built on Radix and shadcn/ui. Themable, accessible, and documented so your team can move fast without breaking things.',
  },
  {
    icon: Gauge,
    n: '03',
    title: 'Performance & SEO',
    body: 'Core Web Vitals tuning, structured data, sitemap and robots config, and analytics you can actually act on.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
        <span className="eyebrow mb-6 block">Services</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] max-w-3xl">
          Three things we do well.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Pick one or all three. They compound. Each service ships as a real
          project, not a slide deck.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="space-y-px bg-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="bg-surface p-6 sm:p-8 lg:p-10 grid sm:grid-cols-12 gap-4 sm:gap-8 items-start transition-colors hover:bg-surface-variant"
              >
                <div className="sm:col-span-2 flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    {service.n}
                  </span>
                  <Icon
                    className="w-5 h-5 text-primary sm:hidden"
                    aria-hidden="true"
                  />
                </div>
                <div className="sm:col-span-10 lg:col-span-9 flex items-start gap-4">
                  <Icon
                    className="w-5 h-5 text-primary hidden sm:block mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {service.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface-variant">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-sm text-foreground/80 leading-relaxed">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary mr-2">
              Note
            </span>
            You&apos;re on <code className="font-mono text-foreground bg-surface px-1.5 py-0.5 rounded border border-border">/services</code>.
            This page lives at{' '}
            <code className="font-mono text-foreground bg-surface px-1.5 py-0.5 rounded border border-border">
              app/services/page.tsx
            </code>
            . That&apos;s the whole point of Next.js App Router — files are URLs.
          </p>
        </div>
      </section>
    </>
  );
}

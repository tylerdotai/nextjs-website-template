import type { Metadata } from 'next';
import { Code, Palette, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'What we do and how we do it.',
};

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Production Next.js applications with TypeScript, Tailwind, and modern deployment workflows. Real URLs, real SEO, real performance.',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description:
      'Reusable component libraries built on shadcn/ui or Radix. Themable, accessible, and documented so your team can move fast without breaking things.',
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    description:
      'Core Web Vitals tuning, structured data, sitemap and robots config, and analytics you can actually act on.',
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-12 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Three things we do well. Pick one or all three — they compound.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <Icon className="w-8 h-8 mb-4 text-accent" />
              <h2 className="font-semibold text-lg mb-2">{service.title}</h2>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </article>
          );
        })}
      </div>

      <aside className="mt-16 p-6 border border-border rounded-lg bg-muted">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Notice this URL:</strong> you&apos;re on <code className="bg-background px-1.5 py-0.5 rounded">/services</code>.
          This page lives at <code className="bg-background px-1.5 py-0.5 rounded">app/services/page.tsx</code>.
          That&apos;s the whole point of Next.js App Router — files = URLs.
        </p>
      </aside>
    </div>
  );
}

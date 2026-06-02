import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who we are and what we believe.',
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
      <span className="eyebrow mb-6 block">About</span>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05]">
        We build websites that don&apos;t fall apart.
      </h1>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          Real routing, real content workflows, real performance. No more
          editing a single <code className="font-mono text-base bg-muted px-1.5 py-0.5 rounded">index.html</code> and dragging a folder onto Netlify.
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight pt-6">
          How we got here
        </h2>
        <p>
          Most personal and small-business sites are stuck in 2014: one HTML
          file, maybe some jQuery, deployed by FTP. It works, until you want
          a second page. Or a blog. Or a contact form. Or for Google to find
          you.
        </p>
        <p>
          This template is the answer. Next.js gives you real URLs and real
          performance for free. MDX gives you real content authoring. Vercel
          gives you push-to-deploy.
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight pt-6">
          What this template includes
        </h2>
        <ul className="space-y-2 pl-0 list-none">
          {[
            'Next.js 15 App Router with TypeScript',
            'Tailwind CSS v4 for styling',
            'MDX support for blog posts and content pages',
            'Real route structure — /services, /about, /blog/[slug]',
            'Vercel-ready out of the box',
            'Working contact form via Resend',
            'OG image generator, sitemap, robots.txt',
            'Vitest + GitHub Actions CI',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

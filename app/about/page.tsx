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

      <div className="prose mt-12">
        <p>
          Real routing, real content workflows, real performance. No more
          editing a single <code>index.html</code> and dragging a folder
          onto Netlify.
        </p>

        <h2>How we got here</h2>
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

        <h2>What this template includes</h2>
        <ul>
          <li>Next.js 16 App Router with TypeScript</li>
          <li>Tailwind CSS v4 for styling</li>
          <li>MDX support for blog posts and content pages</li>
          <li>Real route structure — <code>/services</code>, <code>/about</code>, <code>/blog/[slug]</code></li>
          <li>Vercel-ready out of the box</li>
          <li>Working contact form via Resend</li>
          <li>OG image generator, sitemap, robots.txt</li>
          <li>Vitest + GitHub Actions CI</li>
        </ul>
      </div>
    </article>
  );
}

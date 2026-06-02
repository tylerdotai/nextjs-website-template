import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who we are and what we believe.',
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-neutral dark:prose-invert">
      <h1>About</h1>
      <p>
        We build websites that don&apos;t fall apart. Real routing, real content
        workflows, real performance. No more editing HTML files and FTPing them
        to Netlify.
      </p>
      <h2>How we got here</h2>
      <p>
        Most personal and small-business sites are stuck in 2014: a single
        <code>index.html</code>, maybe some jQuery, deployed by dragging a
        folder onto Netlify. It works, until you want a second page. Or a
        blog. Or a contact form. Or for Google to find you.
      </p>
      <p>
        This template is the answer. Next.js gives you real URLs and real
        performance for free. MDX gives you real content authoring. Vercel
        gives you push-to-deploy.
      </p>
      <h2>What this template includes</h2>
      <ul>
        <li>Next.js 15 App Router with TypeScript</li>
        <li>Tailwind CSS v4 for styling</li>
        <li>MDX support for blog posts and content pages</li>
        <li>Real route structure — <code>/services</code>, <code>/about</code>, <code>/blog/[slug]</code></li>
        <li>Vercel-ready out of the box</li>
      </ul>
    </article>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <section className="space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          A website you actually own.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Next.js 15 + Tailwind v4 + MDX. Real URLs for every page, content
          lives in your repo, deploys to Vercel on push.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            See our services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md font-medium hover:bg-muted transition-colors"
          >
            Read the blog
          </Link>
        </div>
      </section>

      <section className="mt-24 grid sm:grid-cols-3 gap-6">
        {[
          { title: 'Real URLs', body: 'Every page is a route. /services, /about, /blog/post-slug — all real, all indexable.' },
          { title: 'Content as code', body: 'Pages and blog posts are MDX files in your repo. Edit, commit, push, live.' },
          { title: 'Zero CMS', body: 'No Sanity, no Contentful, no dashboard to babysit. Your content lives where your code does.' },
        ].map((f) => (
          <div key={f.title} className="border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

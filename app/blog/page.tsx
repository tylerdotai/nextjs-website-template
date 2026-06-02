import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on web development, design, and shipping.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
        <span className="eyebrow mb-6 block">Journal</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05]">
          Notes from the build.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}. Add a new
          MDX file to{' '}
          <code className="font-mono text-base bg-muted px-1.5 py-0.5 rounded">
            content/
          </code>{' '}
          and it shows up here.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <ul className="border-t border-border">
          {posts.map((post, i) => (
            <li key={post.slug} className="border-b border-border">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid sm:grid-cols-12 gap-3 sm:gap-8 py-6 sm:py-8 -mx-2 px-2 rounded-md transition-colors hover:bg-surface"
              >
                <div className="sm:col-span-2 flex sm:flex-col gap-3 sm:gap-2 text-sm">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <time
                    dateTime={post.date}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {post.date}
                  </time>
                </div>
                <div className="sm:col-span-10">
                  <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  )}
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read post
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

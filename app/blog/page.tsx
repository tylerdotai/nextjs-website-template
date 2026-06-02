import type { Metadata } from 'next';
import { getAllPosts, type PostMeta } from '@/lib/mdx';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on web development, design, and shipping.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-12 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Blog</h1>
        <p className="text-xl text-muted-foreground">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}. Add a new
          MDX file to <code className="bg-muted px-1.5 py-0.5 rounded text-base">content/</code> and it shows up here.
        </p>
      </header>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-border pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {post.date} · {post.readingTime}
              </p>
              {post.excerpt && (
                <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

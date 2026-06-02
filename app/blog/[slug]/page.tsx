import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx';
import { Callout, CodeBlock, YouTubeEmbed } from '@/components/mdx';

const mdxComponents = {
  Callout,
  CodeBlock,
  YouTubeEmbed,
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-16 sm:pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 sm:mb-12 group"
      >
        <ArrowLeft
          className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        All posts
      </Link>

      <header className="mb-10 sm:mb-14 pb-8 sm:pb-10 border-b border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <time dateTime={post.date} className="font-mono">
            {post.date}
          </time>
          <span aria-hidden="true">·</span>
          <span className="font-mono">{post.readingTime}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.025em] leading-[1.1]">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-headings:leading-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-[0.9em] prose-code:font-normal prose-pre:bg-transparent prose-pre:p-0">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}

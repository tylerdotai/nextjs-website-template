import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
      <span className="eyebrow mb-6 block">404</span>
      <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.05]">
        Page not found.
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist, or it moved.
        Check the URL, or head back to the home page.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to home
        </Link>
        <Link href="/blog" className="btn-secondary">
          <Search className="w-4 h-4" aria-hidden="true" />
          Browse the blog
        </Link>
      </div>
    </section>
  );
}

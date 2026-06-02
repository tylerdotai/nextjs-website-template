'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label={`${siteConfig.name} home`}
        >
          <span
            aria-hidden="true"
            className="inline-block w-6 h-6 rounded-sm bg-primary group-hover:bg-primary/80 transition-colors"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/tylerdotai/nextjs-website-template"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-foreground hover:bg-muted transition-colors touch-manipulation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu — full-width sheet that drops down */}
      <div
        id="mobile-menu"
        className={`md:hidden border-b border-border bg-background transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <ul className="px-4 py-4 space-y-1">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium touch-manipulation ${
                    active
                      ? 'bg-primary-container text-on-primary-container'
                      : 'text-foreground hover:bg-muted active:bg-muted'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="pt-3 mt-3 border-t border-border">
            <a
              href="https://github.com/tylerdotai/nextjs-website-template"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted touch-manipulation"
            >
              GitHub
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

# Next.js Website Template

**A clean, production-ready Next.js 16 starter for personal and small-business websites.** Real URLs for every page, content as MDX, an editorial design system out of the box, and zero CMS to babysit. Push to deploy on Vercel.

This is the answer to the three things every "I edit a single `index.html` and drag it to Netlify" site gets stuck on:

- **No real URLs** — every file in `app/` is a route. `app/services/page.tsx` literally maps to `/services`.
- **No good way to edit content** — pages and blog posts are MDX files in the repo. Edit, commit, push, live.
- **Context limits with AI coding tools** — Next.js's file conventions are well-known to LLMs, so Claude Code and friends can edit a single component without re-reading the entire site.

Designed for people who want a polished, modern personal or small-business site without rebuilding the same boilerplate from scratch.

<p align="center">
  <img src="images/logo.png" alt="Next.js Website Template logo" width="120"/>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/tylerdotai/nextjs-website-template)](https://github.com/tylerdotai/nextjs-website-template/stargazers)

## Live Demo

- **Live site:** [https://nextjs-website-template-sooty.vercel.app/](https://nextjs-website-template-sooty.vercel.app/)
- Repository: `https://github.com/tylerdotai/nextjs-website-template`
- One-click deploy: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/tylerdotai/nextjs-website-template)

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.x |
| Language | TypeScript | 6.x |
| Linter | ESLint (flat config) | 10.x |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, `@theme`) | 4.x |
| Content | MDX (via `next-mdx-remote` + `@next/mdx`) | 6.x |
| Frontmatter | `gray-matter` | 4.x |
| Icons | `lucide-react` | 1.x |
| Tests | Vitest + Testing Library | 4.x / 16.x |
| Package manager | Bun (npm/pnpm/yarn also work) | — |
| Deploy | Vercel (one-click, push-to-deploy) | — |
| SEO | Built-in `sitemap.ts` + `robots.ts` | — |

## Features

### For Site Owners

- **Real URLs out of the box** — `/`, `/services`, `/about`, `/blog`, `/blog/<slug>`, `/contact`, `/terms`, `/privacy`, `/changelog`
- **Content as code** — drop a new `.mdx` file in `content/` and it appears at `/blog/<slug>` automatically
- **Editorial design system baked in** — warm cream/charcoal palette, terracotta accent, Fraunces serif display + Inter body, hairline borders instead of shadows, mobile-first responsive nav with hamburger sheet
- **Dark mode** — Tailwind v4 + `prefers-color-scheme`, no flash on load, no toggle needed
- **SEO built in** — auto-generated `sitemap.xml`, `robots.txt`, OpenGraph metadata + per-page `<title>` and `<description>`, dynamic OG image generator at `/api/og`
- **Single source of truth** — site name, nav, URL, and contact email all in `lib/config.ts`
- **Working contact form** — client-validated form posts to `/api/contact`, wired to Resend with a dev-mode fallback when keys are absent
- **Vercel-ready** — zero config, one-click deploy, push-to-deploy on every commit

### For Developers

- **Type-safe routing** — full TypeScript, no untyped props
- **Static generation by default** — 15 of 17 routes prerender as static HTML; the contact form and OG-image route stay dynamic on purpose
- **Server components by default** — fast initial loads, minimal client JS
- **MDX with custom components** — `<Callout>`, `<CodeBlock>`, `<YouTubeEmbed>` available inside any blog post; import your own React components directly
- **Tailwind v4** — `@theme` tokens + `@import "tailwindcss"`, no `tailwind.config.js` boilerplate, design tokens on `:root` cascade
- **Clean separation** — `app/` for routes, `content/` for posts, `components/` for shared UI, `lib/` for utilities
- **Tested** — Vitest + Testing Library with sample tests for the header, the callout component, and the changelog parser
- **CI on every PR** — GitHub Actions runs lint, typecheck, test, and build against Bun

## Project Structure

```text
nextjs-website-template/
├── app/                              # Every file here is a route
│   ├── page.tsx                      # → /
│   ├── services/page.tsx             # → /services
│   ├── about/page.tsx                # → /about
│   ├── blog/
│   │   ├── page.tsx                  # → /blog  (index of all posts)
│   │   └── [slug]/page.tsx           # → /blog/<slug>  (renders MDX)
│   ├── contact/page.tsx              # → /contact
│   ├── changelog/page.tsx            # → /changelog  (renders CHANGELOG.md)
│   ├── terms/page.tsx                # → /terms
│   ├── privacy/page.tsx              # → /privacy
│   ├── not-found.tsx                 # 404 page
│   ├── api/
│   │   ├── contact/route.ts          # POST → Resend email
│   │   └── og/route.tsx              # GET → dynamic OG image
│   ├── layout.tsx                    # Shared shell: header, footer, fonts, metadata
│   ├── globals.css                   # Tailwind v4 entry, @theme tokens, .prose styles
│   ├── sitemap.ts                    # Auto-generated sitemap.xml
│   └── robots.ts                     # Auto-generated robots.txt
│
├── components/                       # Shared React components
│   ├── SiteHeader.tsx                # Desktop nav + mobile hamburger sheet
│   ├── SiteHeader.test.tsx
│   ├── SiteFooter.tsx
│   ├── ContactForm.tsx               # Client component, validated form
│   └── mdx/
│       ├── index.ts                  # Re-exports for MDX components
│       ├── Callout.tsx               # 5 variants (info/warn/danger/tip/success)
│       ├── Callout.test.tsx
│       ├── CodeBlock.tsx             # Filename header + copy-to-clipboard
│       └── YouTubeEmbed.tsx          # Privacy-enhanced embed
│
├── content/                          # Blog posts as MDX files
│   ├── why-nextjs.mdx
│   ├── mdx-content-layer.mdx
│   └── mdx-components-demo.mdx
│
├── lib/                              # Shared utilities
│   ├── config.ts                     # Site name, nav, URL, contact — edit this
│   ├── mdx.ts                        # MDX file loading + frontmatter parsing
│   ├── changelog.ts                  # Parses CHANGELOG.md at build time
│   ├── changelog.test.ts
│   └── utils.ts                      # cn() helper for Tailwind class merging
│
├── public/                           # Static assets served as-is
├── images/                           # README assets (logo, screenshot)
│
├── .github/workflows/ci.yml          # Lint, typecheck, test, build on every PR
├── .env.example                      # RESEND_API_KEY, CONTACT_TO_EMAIL, etc.
├── eslint.config.mjs                 # Flat config (ESLint 10)
├── postcss.config.mjs                # @tailwindcss/postcss
├── next.config.mjs                   # MDX wiring + image remotePatterns
├── tsconfig.json
├── vitest.config.ts
├── vitest.setup.ts
├── bun.lock
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ (Next.js 16 supports Node 20.x and 22.x)
- Bun 1.0+ (recommended), or npm/pnpm/yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/tylerdotai/nextjs-website-template.git
cd nextjs-website-template

# Install dependencies (Bun recommended)
bun install

# Start the dev server
bun run dev

# Open http://localhost:3000
```

With npm / pnpm / yarn:

```bash
npm install && npm run dev
pnpm install && pnpm dev
yarn && yarn dev
```

### First-time setup

1. Edit `lib/config.ts` — change `name`, `description`, `url`, and the `nav` array.
2. Replace the example MDX posts in `content/` with your own (or delete them).
3. Update the home page copy in `app/page.tsx`.
4. Add your real pages to `app/<page-name>/page.tsx` and to `siteConfig.nav` in `lib/config.ts`.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Click **Deploy**.

Every push to `main` auto-deploys. Every PR gets a preview URL. Zero config needed.

### Other hosts

Any host that supports Next.js works: Netlify, Cloudflare Pages, Render, Fly.io, or a self-hosted Node server (`bun run build && bun run start`).

## Usage

### Adding a new page

1. Create a folder + file: `app/pricing/page.tsx`
2. Export a default React component with a `Metadata` export
3. Add the route to `lib/config.ts` → `siteConfig.nav`

```tsx
// app/pricing/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing.',
};

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold">Pricing</h1>
      <p className="mt-4 text-muted-foreground">Three plans. No surprises.</p>
    </div>
  );
}
```

Hit `/pricing` and it's live.

### Adding a blog post

1. Create `content/my-new-post.mdx`
2. Add frontmatter + markdown content:

```mdx
---
title: "My new post"
date: "2026-06-01"
excerpt: "A one-sentence description for the index page."
---

# Hello

Your markdown content here. Import React components when you need them:

import { Callout } from '@/components/Callout';

<Callout type="info">
  This renders as a React component inside your markdown.
</Callout>
```

3. Push. The post appears at `/blog/my-new-post` and in the index at `/blog`.

### Customizing the design

- **Colors and theme tokens** — edit `:root` (light) and the `@media (prefers-color-scheme: dark) { :root { ... } }` block in `app/globals.css`. The `@theme` block below re-exports those as Tailwind utility classes (e.g. `bg-primary`, `text-foreground`).
- **Site name and nav** — edit `lib/config.ts`
- **Layout shell (header, footer)** — edit `components/SiteHeader.tsx` and `components/SiteFooter.tsx`
- **Fonts** — wired in `app/layout.tsx` via `next/font/google` (Inter for body, Fraunces for display, JetBrains Mono for code)

## Current Limitations

- **No CMS** — content lives in the repo. Great for solo devs and small teams; painful for non-technical editors.
- **No analytics** — add [Vercel Analytics](https://vercel.com/analytics), [Plausible](https://plausible.io), or [Fathom](https://usefathom.com) when you need them.
- **No auth, no database, no API beyond the contact form** — this is a static-first template. Add these only when you have a concrete use case.
- **No images/avatars in the example** — `images/logo.png` and `images/screenshot.png` are placeholder slots. Replace with real assets.
- **Dark mode follows system preference** — there's no manual toggle yet (roadmap).
- **English only** — no i18n wired up yet (roadmap).

## Roadmap

- [x] Add a `changelog` page generated from a `CHANGELOG.md` file
- [x] Add an `og-image.png` generator using `@vercel/og`
- [x] Add a working contact form example using Next.js Route Handlers + Resend
- [x] Add MDX components library: `<Callout>`, `<CodeBlock>`, `<YouTubeEmbed>`
- [x] Add Vitest setup with a sample component test
- [x] Add a GitHub Actions workflow for lint + typecheck + build on PR
- [ ] Add i18n with `next-intl`
- [ ] Add a dark mode toggle (currently follows system preference only)
- [ ] Add full-text search across blog posts

## License

Distributed under the MIT License. See `LICENSE` for details.

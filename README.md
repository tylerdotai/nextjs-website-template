# Next.js Website Template

A clean, production-ready Next.js 15 + Tailwind v4 + MDX starter for personal and small-business websites. Real URLs for every page, content as code, Vercel-ready.

<p align="center">
  <img src="images/logo.png" alt="Next.js Website Template logo" width="120"/>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/tylerdotai/nextjs-website-template)](https://github.com/tylerdotai/nextjs-website-template/stargazers)

## Live Demo

- Repository: `https://github.com/tylerdotai/nextjs-website-template`
- One-click deploy: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/tylerdotai/nextjs-website-template)

## About

This template is the answer to the three things every "I edit a single `index.html` and drag it to Netlify" site gets stuck on:

1. **No real URLs** — every file in `app/` is a route. `app/services/page.tsx` literally maps to `/services`.
2. **No good way to edit content** — pages and blog posts are MDX files in the repo. Edit, commit, push, live. No CMS to babysit.
3. **Context limits with AI coding tools** — Next.js's file conventions are well-known to LLMs, so Claude Code and friends can edit a single component without re-reading the entire site.

It is designed for people who want a polished, modern personal or small-business site without rebuilding the same boilerplate from scratch.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Content | MDX (via `next-mdx-remote` + `@next/mdx`) |
| Frontmatter | `gray-matter` |
| Icons | `lucide-react` |
| Package manager | Bun (npm/pnpm/yarn also work) |
| Deploy | Vercel (one-click, push-to-deploy) |
| SEO | Built-in `sitemap.ts` + `robots.ts` |

## Features

### For Site Owners

- **Real URLs out of the box** — `/`, `/services`, `/about`, `/blog`, `/blog/<slug>`, `/contact`
- **Content as code** — drop a new `.mdx` file in `/content/` and it appears at `/blog/<slug>`
- **SEO built in** — auto-generated `sitemap.xml`, `robots.txt`, OpenGraph metadata, per-page `<title>` and `<description>`
- **Dark mode** — Tailwind v4 + `prefers-color-scheme`, no flash on load
- **Single source of truth** — site name, nav, and URL all in `lib/config.ts`
- **Vercel-ready** — zero config, one-click deploy, push-to-deploy on every commit

### For Developers

- **Type-safe routing** — full TypeScript, no untyped props
- **Static generation** — every page prerenders as static HTML (12/12 routes at build time)
- **Server components by default** — fast initial loads, minimal client JS
- **MDX with components** — import React components inside markdown when you need them
- **Tailwind v4** — `@theme` tokens, `@import "tailwindcss"`, no `tailwind.config.js` boilerplate
- **Clean separation** — `app/` for routes, `content/` for posts, `lib/` for utilities

## Project Structure

```text
app/                                 Every file here is a route
├── page.tsx                         → /
├── services/page.tsx                → /services  (demo: shows the URL mapping)
├── about/page.tsx                   → /about
├── blog/
│   ├── page.tsx                     → /blog  (index of all posts)
│   └── [slug]/page.tsx              → /blog/<slug>  (renders MDX)
├── contact/page.tsx                 → /contact
├── layout.tsx                       Shared shell: header, nav, footer
├── sitemap.ts                       Auto-generated sitemap.xml
├── robots.ts                        Auto-generated robots.txt
└── globals.css                      Tailwind v4 entry + @theme tokens

content/                             Blog posts as MDX files
├── why-nextjs.mdx
└── mdx-content-layer.mdx

lib/
├── config.ts                        Site name, nav, URL — edit this
├── mdx.ts                           MDX file loading + frontmatter parsing
└── utils.ts                         cn() helper for Tailwind class merging

public/                              Static assets served as-is
images/                              README assets (logo, screenshots)
```

## Getting Started

### Prerequisites

- Node.js 20+ (or Bun 1.0+)
- A terminal

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

- **Colors and theme tokens** — edit `@theme` in `app/globals.css`
- **Site name and nav** — edit `lib/config.ts`
- **Layout shell (header, footer)** — edit `app/layout.tsx`
- **Fonts** — drop in `next/font` in `app/layout.tsx` (one line, free Google Fonts)

## Current Limitations

- **No CMS** — content lives in the repo. Great for solo devs and small teams; painful for non-technical editors.
- **No contact form backend** — `app/contact/page.tsx` has a real form UI but doesn't submit anywhere. Wire it to [Resend](https://resend.com), [Formspree](https://formspree.io), or a Next.js API route.
- **No analytics** — add [Vercel Analytics](https://vercel.com/analytics), [Plausible](https://plausible.io), or [Fathom](https://usefathom.com) when you need them.
- **No auth, no database, no API** — this is a static-first template. Add these only when you have a concrete use case.
- **No images/avatars in the example** — `images/logo.png` and `images/screenshot.png` are placeholder slots. Replace with real assets.

## Roadmap

- [ ] Add a `changelog` page generated from a `CHANGELOG.md` file
- [ ] Add an `og-image.png` generator using `@vercel/og`
- [ ] Add a working contact form example using Next.js Route Handlers + Resend
- [ ] Add MDX components library: `<Callout>`, `<CodeBlock>`, `<YouTubeEmbed>`
- [ ] Add Vitest setup with a sample component test
- [ ] Add a GitHub Actions workflow for lint + typecheck + build on PR

## License

Distributed under the MIT License. See `LICENSE` for details.

# Next.js Website Template

A clean, modern starter for personal and small-business websites. Built to solve the three things every "I edit a single `index.html` and drag it to Netlify" site gets stuck on:

1. **Real URLs for every page** — `/services`, `/about`, `/blog/post-slug`. Every file in `app/` is a route.
2. **Content you can edit without a CMS** — pages and blog posts are MDX files in the repo. Edit, commit, push, live.
3. **No more context-limit hell with Claude Code** — Next.js's file conventions are well-known to LLMs, so AI tools work *with* the structure instead of drowning in one giant HTML file.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **MDX** for content (blog posts + content pages)
- **Lucide React** for icons
- **Vercel** for deploy (one-click, push-to-deploy)

## Quick start

```bash
# Use bun (recommended), npm, pnpm, or yarn
bun install
bun run dev

# Open http://localhost:3000
```

## Project structure

```
.
├── app/                      # Every file here is a route
│   ├── page.tsx              # → /
│   ├── services/page.tsx     # → /services
│   ├── about/page.tsx        # → /about
│   ├── blog/
│   │   ├── page.tsx          # → /blog (lists all posts)
│   │   └── [slug]/page.tsx   # → /blog/<slug> (renders MDX)
│   ├── contact/page.tsx      # → /contact
│   ├── layout.tsx            # Shared shell (header, footer)
│   ├── sitemap.ts            # Auto-generated sitemap.xml
│   └── robots.ts             # Auto-generated robots.txt
├── content/                  # Blog posts live here as .mdx files
│   ├── why-nextjs.mdx
│   └── mdx-content-layer.mdx
├── lib/
│   ├── config.ts             # Site name, nav, URL — edit this
│   ├── mdx.ts                # MDX file loading utilities
│   └── utils.ts              # cn() helper for Tailwind class merging
└── public/                   # Static assets
```

## Adding a new page

1. Create a folder + file: `app/pricing/page.tsx`
2. Export a default React component
3. Add a `Metadata` export for SEO
4. Add the route to `lib/config.ts` → `siteConfig.nav`

That's it. Hit `/pricing` and it's live.

## Adding a blog post

1. Create `content/my-new-post.mdx`
2. Add frontmatter:

```mdx
---
title: "My new post"
date: "2026-06-01"
excerpt: "A one-sentence description for the index page."
---

# Hello

Your markdown content here. Import React components if you need them.
```

3. Push. The post appears at `/blog/my-new-post` and in the index at `/blog`.

## Configuration

Edit `lib/config.ts`:

```ts
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your meta description for SEO.',
  url: 'https://yoursite.com',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    // ... add your pages
  ],
};
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Click Deploy. Done.

Every push to `main` auto-deploys. Preview deploys on every PR.

## What's intentionally NOT included

This template stays minimal on purpose. Add what you need:

- **Database / API** — when you need one, add it. Supabase, Postgres, whatever.
- **Auth** — only when you have users to manage.
- **Email** — wire the contact form to [Resend](https://resend.com) when you need to.
- **Analytics** — Plausible, Fathom, or Vercel Analytics.

If you're adding one of these for the first time, do it in a branch, get it working, then merge. Don't pre-build infrastructure you don't need.

## License

MIT. Use it, fork it, ship your site.

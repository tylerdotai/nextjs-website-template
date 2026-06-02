# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Internationalization (i18n) with `next-intl`
- Dark mode toggle (currently follows system preference only)
- Search across blog posts

## [1.1.0] - 2026-06-02

### Changed
- `next-mdx-remote` bumped from `^5.0.0` to `^6.0.0` (security advisory; v6 introduces `blockJS` and `blockDangerousJS` defaults that strip JS expressions and dangerous JS from compiled MDX). Drop-in API change — no source edits required.

### Added
- `/changelog` page that parses `CHANGELOG.md` at build time (Keep a Changelog format)
- `/api/og` OG image generator using `next/og` — title, description, and category as query params
- Default OpenGraph + Twitter Card metadata on every page pointing at `/api/og`
- Working contact form wired to Resend via `/api/contact` route handler
  - Client-side validation, loading states, success and error UI
  - `.env.example` documents `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
  - Graceful dev-mode fallback when keys are missing
- MDX component library: `<Callout>` (5 variants), `<CodeBlock>` (filename + copy-to-clipboard), `<YouTubeEmbed>` (privacy-enhanced)
  - Wired into `MDXRemote` in `app/blog/[slug]/page.tsx`
  - New demo post: `content/mdx-components-demo.mdx`
- Vitest setup with jsdom and React Testing Library
  - `bun run test` and `bun run test:watch` scripts
  - Sample tests: `components/mdx/Callout.test.tsx`, `lib/changelog.test.ts`
- GitHub Actions CI workflow (`.github/workflows/ci.yml`)
  - Runs lint, typecheck, test, and build on every push and PR to `main`
  - Uses Bun with frozen lockfile
- Changelog page added to `siteConfig.nav` and `sitemap.ts`

### Changed
- `app/contact/page.tsx` — extracted form into a client component with state management
- `app/layout.tsx` — added `openGraph.images` and `twitter` metadata blocks
- `next.config.mjs` — already had `outputFileTracingRoot`; no change

## [1.0.0] - 2026-06-01

### Added
- Initial release
- Next.js 15 App Router + TypeScript + Tailwind CSS v4
- MDX content layer via `next-mdx-remote` and `@next/mdx`
- Example routes: `/`, `/services`, `/about`, `/blog`, `/blog/[slug]`, `/contact`
- Auto-generated `sitemap.xml` and `robots.txt`
- Per-page `Metadata` exports for SEO
- Dark mode via `prefers-color-scheme`
- Two example MDX blog posts
- `lib/config.ts` for single-source-of-truth site config
- `lib/mdx.ts` for content loading and frontmatter parsing
- `lib/utils.ts` with `cn()` Tailwind class helper
- Vercel-ready configuration (one-click deploy, push-to-deploy)
- README following the [Best README Template](https://github.com/tylerdotai/Best-README-Template) structure

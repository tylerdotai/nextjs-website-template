# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Internationalization (i18n) with `next-intl`
- Dark mode toggle (currently follows system preference only)
- Search across blog posts

## [1.3.0] - 2026-06-02

### Changed
- **Bumped dependency stack to current (May/June 2026) versions**
  - `next` 15.5.19 → 16.2.7
  - `react` 19.0.0 → 19.0.0 (already current; verified)
  - `typescript` 5.9.3 → 6.0.3
  - `eslint` 9.39.4 → 10.4.1
  - `eslint-config-next` → 16.2.7 (matches Next)
  - `lucide-react` 0.468.0 → 1.17.0
  - `next-mdx-remote` 6.x and `@tailwindcss/postcss` 4.x already current
  - `@types/node` 22.19.19 → 25.9.1
- **Tooling migrations required by the new stack**
  - `next lint` was removed in Next 16. `lint` script now invokes `eslint .` directly.
  - Migrated `.eslintrc.json` → `eslint.config.mjs` (ESLint 10 requires flat config).
  - Temporary minimal ESLint config: uses `@next/eslint-plugin-next` directly + `typescript-eslint`, with `eslint-plugin-react` disabled because v7.37.x has an upstream `contextOrFilename.getFilename` incompat with ESLint 10. Will be re-enabled once Next.js bumps the react-plugin dep.
- **Tailwind v4 dev server fix**
  - Restored `postcss.config.mjs` with `@tailwindcss/postcss` plugin. Without it, Tailwind v4's `@apply` and `@layer components` were not being processed in Turbopack dev mode (only in production builds). Dev and prod now match.
- **Design token layout in `globals.css`**
  - Colors are now declared on `:root` (light) and `@media (prefers-color-scheme: dark) { :root { ... } }` (dark) so the media query is honored by Turbopack's CSS pipeline.
  - A separate `@theme` block re-exports those CSS custom properties as Tailwind utility tokens (`bg-primary`, `text-foreground`, etc.), so the Tailwind v4 utility-class generation still works.
  - Previously the dark overrides were inside `@theme { ... }` nested in the media query, which was being hoisted out — making dark values the default in light mode.

### Fixed
- Dev server now matches the build: utility classes, `@layer components`, and the prose typography are all processed correctly. No more unstyled pages on `bun run dev`.
- `prefers-color-scheme: light` and `prefers-color-scheme: dark` both render the correct palette end-to-end.
- Hero copy on the home page no longer says "Next.js 15" — now reflects the current stack.

## [1.2.0] - 2026-06-02

### Added
- **New design system** — warm, editorial palette replacing the previous indigo/magenta defaults
  - Primary: terracotta `#b03a2e` (no more AI-template blue)
  - Background: warm cream `#faf7f2`; dark mode is warm charcoal `#1a1614`
  - Display font: **Fraunces** (serif with character); body: Inter
  - No gradients, no glow blobs, no blur — visual interest from type scale, whitespace, asymmetric grids
- New `SiteHeader` component with:
  - Mobile hamburger menu (slide-down sheet, body-scroll lock, Escape to close, route-change close)
  - Active-route underline indicator on desktop nav
  - Sticky header with backdrop blur
- New `SiteFooter` with 4-column grid (wordmark, site nav, legal nav, GitHub)
- `/terms` page and `/privacy` page (legal copy)
- Custom `app/not-found.tsx` (404) with branded message and back-navigation
- New utility classes in `globals.css`: `.eyebrow`, `.eyebrow-mark`, `.chip`, `.input-m3`, `.btn-primary`, `.btn-secondary`, `.surface-card`, `.surface-tinted`
- `<SiteHeader>` test suite — 4 tests covering wordmark, hamburger toggle, ARIA states, body-scroll lock
- Blog renamed in nav: "Blog" → "Journal" (more editorial)
- OG image generator (`/api/og`) repainted to match the new palette and serif display face

### Changed
- All page layouts redesigned for editorial feel: oversized serif H1, eyebrow labels, monospace metadata, hairline borders instead of shadows
- All pages mobile-optimized: responsive padding (`px-4 sm:px-6 lg:px-8`), stacked grids on small screens, larger touch targets (44px+ on interactive elements), `touch-manipulation` on mobile menu items
- `contact` form moved to a dedicated client component using new `.input-m3` styling
- `prose` styles in blog posts updated to use Fraunces for headings and the warm palette
- `siteConfig` adds a `legal` array for footer/legal nav
- `viewport` export added to `app/layout.tsx` with theme-color and proper `width`/`initialScale`
- Sitemap extended with `/terms` and `/privacy`

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
- Next.js 16 App Router + TypeScript + Tailwind CSS v4
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

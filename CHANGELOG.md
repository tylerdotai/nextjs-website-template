# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- `changelog` page generated from this file
- `og-image.png` generator using `@vercel/og`
- Working contact form example with Resend
- MDX components library: `<Callout>`, `<CodeBlock>`, `<YouTubeEmbed>`
- Vitest setup with sample component test
- GitHub Actions workflow for CI

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

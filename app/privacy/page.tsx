import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How this site handles your data.',
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
      <span className="eyebrow mb-6 block">Legal</span>
      <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.03em] leading-[1.05]">
        Privacy Policy
      </h1>
      <p className="mt-4 font-mono text-sm text-muted-foreground">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <div className="mt-12 space-y-6 text-foreground/85 leading-relaxed">
        <p>
          This page explains what data {siteConfig.name} collects, why, and
          what we do with it. The short version: as little as possible, and
          nothing we don&apos;t need.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          1. Data we collect
        </h2>
        <p>
          By default, this template collects nothing about you. There are no
          tracking scripts, no analytics, no third-party cookies, and no
          fingerprinting.
        </p>
        <p>
          If you deploy this template and add analytics (Plausible, Fathom,
          Vercel Analytics, etc.) or a contact form backend (Resend, etc.),
          those services will collect data according to their own privacy
          policies. This template does not configure them for you.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          2. Contact form
        </h2>
        <p>
          If you submit the contact form, your name, email, and message
          are sent to the email address configured in{' '}
          <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
            CONTACT_TO_EMAIL
          </code>{' '}
          via Resend. We retain messages only as long as needed to respond.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          3. Hosting &amp; logs
        </h2>
        <p>
          When deployed to Vercel, the hosting provider receives standard
          HTTP request logs (IP address, user agent, request path) for
          security and operational purposes. See{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Vercel&apos;s privacy policy
          </a>
          .
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          4. Your rights
        </h2>
        <p>
          You can request access to or deletion of any personal data we
          hold about you by contacting us via the{' '}
          <a href="/contact" className="text-primary hover:underline">
            contact form
          </a>
          .
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          5. Changes
        </h2>
        <p>
          We may update this policy. Changes will be posted on this page
          with an updated &quot;Last updated&quot; date.
        </p>
      </div>
    </article>
  );
}

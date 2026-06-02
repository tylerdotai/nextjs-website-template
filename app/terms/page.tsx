import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of use for this site.',
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
      <span className="eyebrow mb-6 block">Legal</span>
      <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.03em] leading-[1.05]">
        Terms of Service
      </h1>
      <p className="mt-4 font-mono text-sm text-muted-foreground">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <div className="mt-12 space-y-6 text-foreground/85 leading-relaxed">
        <p>
          These Terms of Service govern your use of {siteConfig.name}. By
          using this site, you agree to these terms in full. If you
          disagree with any part, please don&apos;t use the site.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          1. Use of the site
        </h2>
        <p>
          This template is provided as a starting point for building your
          own website. You may use, modify, and distribute the code under
          the terms of the MIT License (see the LICENSE file). Content on
          this demo site is illustrative and may be changed or removed at
          any time.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          2. No warranty
        </h2>
        <p>
          The site is provided &quot;as is&quot; and &quot;as available&quot;,
          without warranty of any kind, express or implied. We do not
          guarantee that the site will be uninterrupted, secure, or free
          of defects.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          3. Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, the authors and
          contributors of this project are not liable for any indirect,
          incidental, special, consequential, or punitive damages arising
          from your use of the site.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          4. Changes
        </h2>
        <p>
          We may update these terms from time to time. Continued use of the
          site after changes constitutes acceptance of the new terms.
        </p>

        <h2 className="font-display text-2xl font-medium tracking-tight pt-4">
          5. Contact
        </h2>
        <p>
          Questions about these terms? Use the{' '}
          <a href="/contact" className="text-primary hover:underline">
            contact form
          </a>
          .
        </p>
      </div>
    </article>
  );
}

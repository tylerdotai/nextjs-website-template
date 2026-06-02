import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
};

export default function ContactPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-10 sm:pb-12">
        <span className="eyebrow mb-6 block">Contact</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05]">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Drop a message. We answer everything within one business day.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <ContactForm />

        <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
          Form posts to{' '}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">
            /api/contact
          </code>
          , which forwards to Resend. Set{' '}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">
            RESEND_API_KEY
          </code>
          ,{' '}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">
            CONTACT_TO_EMAIL
          </code>
          , and{' '}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">
            CONTACT_FROM_EMAIL
          </code>{' '}
          in <code className="font-mono bg-muted px-1 py-0.5 rounded">.env.local</code>.
          See <code className="font-mono bg-muted px-1 py-0.5 rounded">.env.example</code>.
        </p>
      </section>
    </>
  );
}

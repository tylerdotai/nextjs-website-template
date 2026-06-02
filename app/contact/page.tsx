import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <header className="mb-8 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Contact</h1>
        <p className="text-xl text-muted-foreground">
          Drop us a line. We answer everything within one business day.
        </p>
      </header>

      <ContactForm />

      <p className="text-xs text-muted-foreground mt-4">
        Form submits to <code className="bg-muted px-1 py-0.5 rounded">/api/contact</code>,
        which forwards to Resend. Set <code className="bg-muted px-1 py-0.5 rounded">RESEND_API_KEY</code>,
        <code className="bg-muted px-1 py-0.5 rounded"> CONTACT_TO_EMAIL</code>, and
        <code className="bg-muted px-1 py-0.5 rounded"> CONTACT_FROM_EMAIL</code> in your
        <code className="bg-muted px-1 py-0.5 rounded"> .env.local</code> file. See
        <code className="bg-muted px-1 py-0.5 rounded"> .env.example</code>.
      </p>
    </div>
  );
}

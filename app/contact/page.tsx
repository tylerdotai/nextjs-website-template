import type { Metadata } from 'next';

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

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          className="bg-foreground text-background px-5 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Send message
        </button>
        <p className="text-xs text-muted-foreground">
          Wire this form up to Resend, Formspree, or your own API route.
          It currently doesn&apos;t submit anywhere — that&apos;s the one thing left
          to you.
        </p>
      </form>
    </div>
  );
}

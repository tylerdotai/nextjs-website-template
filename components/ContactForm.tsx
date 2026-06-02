'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-success/30 bg-success/10 rounded-md p-5 flex gap-3">
        <CheckCircle2
          className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">Message sent</h3>
          <p className="text-sm text-muted-foreground mt-1">
            We&apos;ll get back to you within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-sm font-semibold text-primary hover:underline mt-2"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={200}
          disabled={status === 'submitting'}
          className="input-m3 disabled:opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === 'submitting'}
          className="input-m3 disabled:opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={5000}
          disabled={status === 'submitting'}
          className="input-m3 resize-y disabled:opacity-50"
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="border border-error/30 bg-error/10 rounded-md p-3 flex gap-2 text-sm">
          <AlertCircle
            className="w-4 h-4 text-error flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <span className="text-foreground/90">{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  );
}

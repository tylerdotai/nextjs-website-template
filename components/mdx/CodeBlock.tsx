'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function CodeBlock({
  filename,
  language = 'tsx',
  code,
  children,
}: {
  filename?: string;
  language?: string;
  code?: string;
  children?: string;
}) {
  const [copied, setCopied] = useState(false);
  const content = (code ?? children ?? '').trim();

  async function copy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="my-6 not-prose border border-border rounded-lg overflow-hidden bg-zinc-950 text-zinc-100">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 text-xs">
          <div className="flex items-center gap-2">
            {filename && <span className="font-mono font-medium">{filename}</span>}
            {filename && language && <span className="text-zinc-500">·</span>}
            {language && <span className="text-zinc-500 uppercase">{language}</span>}
          </div>
          <button
            type="button"
            onClick={copy}
            className="flex items-center gap-1 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code>{content}</code>
      </pre>
    </div>
  );
}

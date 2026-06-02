import type { Metadata } from 'next';
import { getChangelog } from '@/lib/changelog';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Release notes and roadmap for this project.',
};

const SECTION_LABELS: Record<string, { label: string; color: string }> = {
  added: { label: 'Added', color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' },
  changed: { label: 'Changed', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400' },
  deprecated: { label: 'Deprecated', color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400' },
  removed: { label: 'Removed', color: 'bg-red-500/10 text-red-700 dark:text-red-400' },
  fixed: { label: 'Fixed', color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400' },
  security: { label: 'Security', color: 'bg-rose-500/10 text-rose-700 dark:text-rose-400' },
  planned: { label: 'Planned', color: 'bg-slate-500/10 text-slate-700 dark:text-slate-400' },
  other: { label: 'Other', color: 'bg-slate-500/10 text-slate-700 dark:text-slate-400' },
};

export default function ChangelogPage() {
  const releases = getChangelog();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-12 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Changelog</h1>
        <p className="text-xl text-muted-foreground">
          {releases.length} {releases.length === 1 ? 'release' : 'releases'}. Generated
          from <code className="bg-muted px-1.5 py-0.5 rounded text-base">CHANGELOG.md</code> at build time.
        </p>
      </header>

      <div className="space-y-12">
        {releases.map((release) => (
          <section key={release.version}>
            <header className="mb-4 flex items-baseline gap-3 border-b border-border pb-2">
              <h2 className="text-2xl font-semibold">{release.version}</h2>
              {release.date ? (
                <time className="text-sm text-muted-foreground" dateTime={release.date}>
                  {release.date}
                </time>
              ) : (
                <span className="text-sm text-muted-foreground italic">unreleased</span>
              )}
              {!release.released && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400">
                  upcoming
                </span>
              )}
            </header>

            {release.sections.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">No entries.</p>
            ) : (
              <div className="space-y-6">
                {release.sections.map((section, idx) => {
                  const meta = SECTION_LABELS[section.type] ?? SECTION_LABELS.other;
                  return (
                    <div key={idx}>
                      <h3
                        className={`inline-block text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${meta.color}`}
                      >
                        {meta.label}
                      </h3>
                      <ul className="mt-2 space-y-1.5 list-disc list-inside text-muted-foreground">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
        <p>
          See <a
            href={`https://github.com/${siteConfig.url.replace('https://', '')}`}
            className="underline hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >the source repo</a> for the canonical changelog file.
        </p>
      </footer>
    </div>
  );
}

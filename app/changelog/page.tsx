import type { Metadata } from 'next';
import { getChangelog } from '@/lib/changelog';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Release notes and roadmap for this project.',
};

const SECTION_LABELS: Record<string, { label: string; cls: string }> = {
  added: { label: 'Added', cls: 'bg-success/15 text-success' },
  changed: { label: 'Changed', cls: 'bg-info/15 text-info' },
  deprecated: { label: 'Deprecated', cls: 'bg-warning/15 text-warning' },
  removed: { label: 'Removed', cls: 'bg-error/15 text-error' },
  fixed: { label: 'Fixed', cls: 'bg-primary-container text-primary' },
  security: { label: 'Security', cls: 'bg-error/15 text-error' },
  planned: { label: 'Planned', cls: 'bg-muted text-muted-foreground' },
  other: { label: 'Other', cls: 'bg-muted text-muted-foreground' },
};

export default function ChangelogPage() {
  const releases = getChangelog();

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-10 sm:pb-12">
        <span className="eyebrow mb-6 block">Changelog</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05]">
          What shipped.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
          {releases.length} {releases.length === 1 ? 'release' : 'releases'}.
          Generated from{' '}
          <code className="font-mono text-base bg-muted px-1.5 py-0.5 rounded">
            CHANGELOG.md
          </code>{' '}
          at build time.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 space-y-16">
        {releases.map((release) => (
          <article key={release.version}>
            <header className="flex items-baseline gap-3 flex-wrap mb-6 pb-3 border-b border-border">
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
                {release.version}
              </h2>
              {release.date ? (
                <time
                  className="font-mono text-sm text-muted-foreground"
                  dateTime={release.date}
                >
                  {release.date}
                </time>
              ) : (
                <span className="font-mono text-sm text-muted-foreground italic">
                  unreleased
                </span>
              )}
              {!release.released && (
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm bg-warning/15 text-warning">
                  upcoming
                </span>
              )}
            </header>

            {release.sections.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">No entries.</p>
            ) : (
              <div className="space-y-8">
                {release.sections.map((section, idx) => {
                  const meta = SECTION_LABELS[section.type] ?? SECTION_LABELS.other;
                  return (
                    <div key={idx}>
                      <span
                        className={`inline-block font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm mb-3 ${meta.cls}`}
                      >
                        {meta.label}
                      </span>
                      <ul className="space-y-2 pl-0 list-none">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3 leading-relaxed">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"
                            />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </article>
        ))}
      </section>
    </>
  );
}

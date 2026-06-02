import { describe, it, expect } from 'vitest';
import { getChangelog } from '@/lib/changelog';

describe('getChangelog', () => {
  it('parses releases with sections and items', () => {
    const releases = getChangelog();
    expect(releases.length).toBeGreaterThan(0);

    const v1 = releases.find((r) => r.version === '1.0.0');
    expect(v1).toBeDefined();
    expect(v1?.date).toBe('2026-06-01');
    expect(v1?.released).toBe(true);

    const addedSection = v1?.sections.find((s) => s.type === 'added');
    expect(addedSection).toBeDefined();
    expect(addedSection?.items.length).toBeGreaterThan(0);
  });

  it('marks Unreleased section as not released', () => {
    const releases = getChangelog();
    const unreleased = releases.find((r) => r.version === 'Unreleased');
    expect(unreleased).toBeDefined();
    expect(unreleased?.released).toBe(false);
    expect(unreleased?.date).toBeNull();
  });
});

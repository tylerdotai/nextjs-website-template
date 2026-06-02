import fs from 'node:fs';
import path from 'node:path';

export type ChangelogSection = {
  type: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security' | 'planned' | 'other';
  items: string[];
};

export type ChangelogRelease = {
  version: string;
  date: string | null;
  released: boolean;
  sections: ChangelogSection[];
};

const SECTION_HEADINGS: Record<string, ChangelogSection['type']> = {
  added: 'added',
  changed: 'changed',
  deprecated: 'deprecated',
  removed: 'removed',
  fixed: 'fixed',
  security: 'security',
};

function stripMarkdown(input: string): string {
  return input
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\((.+?)\)/g, '$1')
    .trim();
}

export function getChangelog(): ChangelogRelease[] {
  const filePath = path.join(process.cwd(), 'CHANGELOG.md');
  if (!fs.existsSync(filePath)) return [];

  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split('\n');

  const releases: ChangelogRelease[] = [];
  let current: ChangelogRelease | null = null;
  let currentSection: ChangelogSection | null = null;

  for (const line of lines) {
    const versionMatch = line.match(/^##\s+\[(.+?)\](?:\s+-\s+(\d{4}-\d{2}-\d{2}))?$|^##\s+(\S+?)(?:\s+-\s+(\d{4}-\d{2}-\d{2}))?$/);
    if (versionMatch) {
      if (current) releases.push(current);
      const version = (versionMatch[1] ?? versionMatch[3] ?? '').trim();
      const date = versionMatch[2] ?? versionMatch[4] ?? null;
      current = {
        version,
        date,
        released: date !== null,
        sections: [],
      };
      currentSection = null;
      continue;
    }

    if (!current) continue;

    const sectionMatch = line.match(/^###\s+(.+)$/);
    if (sectionMatch) {
      const heading = sectionMatch[1].trim().toLowerCase();
      const type = SECTION_HEADINGS[heading] ?? (heading === 'planned' ? 'planned' : 'other');
      currentSection = { type, items: [] };
      current.sections.push(currentSection);
      continue;
    }

    const itemMatch = line.match(/^[-*]\s+(.+)$/);
    if (itemMatch && currentSection) {
      currentSection.items.push(stripMarkdown(itemMatch[1]));
    }
  }

  if (current) releases.push(current);
  return releases;
}

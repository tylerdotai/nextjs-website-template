import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') ?? siteConfig.name;
  const description =
    searchParams.get('description') ?? siteConfig.description;
  const category = searchParams.get('category') ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#faf7f2',
          color: '#1f1a16',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              background: '#b03a2e',
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: '#6b6258',
              fontFamily: 'Georgia, serif',
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {category && (
            <div
              style={{
                fontSize: 22,
                color: '#b03a2e',
                textTransform: 'uppercase',
                letterSpacing: 4,
                fontWeight: 600,
                fontFamily: 'ui-monospace, monospace',
              }}
            >
              {category}
            </div>
          )}
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              maxWidth: '90%',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.025em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#6b6258',
              maxWidth: '85%',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#968b7e',
            fontFamily: 'ui-monospace, monospace',
          }}
        >
          <div>{siteConfig.url.replace('https://', '')}</div>
          <div style={{ display: 'flex', gap: 12 }}>
            <span>Next.js</span>
            <span>·</span>
            <span>MDX</span>
            <span>·</span>
            <span>Tailwind v4</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

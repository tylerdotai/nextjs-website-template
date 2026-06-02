import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') ?? siteConfig.name;
  const description = searchParams.get('description') ?? siteConfig.description;
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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          color: '#f5f5f5',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: '#2563eb',
            }}
          />
          <div style={{ fontSize: 28, color: '#9ca3af' }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {category && (
            <div
              style={{
                fontSize: 24,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: 4,
                fontWeight: 600,
              }}
            >
              {category}
            </div>
          )}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: '90%',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#9ca3af',
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
            fontSize: 24,
            color: '#6b7280',
          }}
        >
          <div>{siteConfig.url.replace('https://', '')}</div>
          <div style={{ display: 'flex', gap: 12 }}>
            <span>Next.js</span>
            <span>·</span>
            <span>TypeScript</span>
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

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KLEERO — AI savings for restaurants in WhatsApp';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EDE2 100%)',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="60" height="60" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M657.249 747.474L611.14 626.532C601.216 600.495 577.034 582.831 549.503 581.057L547.059 747.474H369.14L371.202 613.694C371.612 586.922 352.998 559.476 327.305 559.476C293.471 559.476 261 527.067 261 488.763V347.004H429.612V488.763C429.612 517.573 446.81 542.348 471.492 553.433L543.56 347H710.038L636.224 558.462H714.783C745.435 558.462 772.621 578.167 782.151 607.302L828 747.474H657.249Z"
              fill="#143A2C"
            />
          </svg>
          <div style={{ fontSize: 36, color: '#143A2C', fontWeight: 500, letterSpacing: '-0.02em' }}>
            kleero
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 82,
              color: '#143A2C',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Save $5,000+ a year
          </div>
          <div
            style={{
              fontSize: 82,
              color: '#143A2C',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginTop: 6,
            }}
          >
            on supplier costs.
          </div>
          <div
            style={{
              fontSize: 60,
              color: '#D26A3C',
              fontStyle: 'italic',
              fontWeight: 400,
              marginTop: 24,
              letterSpacing: '-0.02em',
            }}
          >
            Right inside WhatsApp.
          </div>
        </div>

        {/* Bottom: meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#5A6259',
            fontSize: 22,
            fontFamily: 'system-ui',
            letterSpacing: '0.12em',
          }}
        >
          <div style={{ width: 40, height: 1.5, background: '#143A2C', opacity: 0.4 }} />
          <div>AI ASSISTANT FOR RESTAURANTS · KLEERO.CO</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

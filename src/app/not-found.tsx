'use client';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#FAF7F2',
          color: '#143A2C',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div>
          <div style={{ fontSize: '4rem', fontWeight: 500, marginBottom: '0.5rem' }}>
            404
          </div>
          <p style={{ marginBottom: '1.5rem', color: '#5A6259' }}>
            Page not found
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#D26A3C',
              color: '#FAF7F2',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            ← Back home
          </a>
        </div>
      </body>
    </html>
  );
}

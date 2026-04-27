type Variant = 'menu' | 'receipt' | 'waste';
type Size = 'sm' | 'md';
type Lang = 'en' | 'es';

type Props = {
  variant: Variant;
  size?: Size;
  lang?: Lang;
};

const SYSTEM_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';

const COPY: Record<Lang, Record<Variant, any>> = {
  en: {
    menu: {
      greetingPre: 'Hi! KLEERO is set up for ',
      greetingBold: 'your food truck',
      greetingPost: '.',
      prompt: 'What do you want to do?',
      options: [
        ['1', '💰', 'Find supplier savings'],
        ['2', '🗑', 'Cut food waste'],
        ['3', '🎪', 'Prep for events'],
        ['4', '📊', 'Sample weekly report'],
      ],
      time: '9:42',
    },
    receipt: {
      photoLabel: 'Receipt',
      analyzing: '🔍 Analyzing items in Houston…',
      recognizedTitle: 'Receipt recognized',
      store: 'Ipsum Café',
      items: ['Cappuccino', 'Croissant'],
      footer: 'Found 3 cheaper options nearby ↓',
      timeUser: '9:43',
      timeBot1: '9:43',
      timeBot2: '9:44',
    },
    waste: {
      title: 'EXAMPLE — Mexican kitchen',
      subtitle: 'Spoilage risk forecast',
      tiers: [
        { color: 'red', label: 'High risk', items: 'Cilantro, Avocado' },
        { color: 'amber', label: 'Medium', items: 'Carnitas, Sour cream' },
        { color: 'green', label: 'Low risk', items: 'Tortillas, Rice' },
      ],
      savings: '💰 Estimated savings ~$200-400/month',
      time: '9:45',
    },
  },
  es: {
    menu: {
      greetingPre: '¡Hola! KLEERO está listo para ',
      greetingBold: 'tu food truck',
      greetingPost: '.',
      prompt: '¿Qué quieres hacer?',
      options: [
        ['1', '💰', 'Encontrar ahorros'],
        ['2', '🗑', 'Reducir mermas'],
        ['3', '🎪', 'Preparar eventos'],
        ['4', '📊', 'Reporte semanal'],
      ],
      time: '9:42',
    },
    receipt: {
      photoLabel: 'Recibo',
      analyzing: '🔍 Analizando productos en Houston…',
      recognizedTitle: 'Recibo reconocido',
      store: 'Ipsum Café',
      items: ['Cappuccino', 'Croissant'],
      footer: '3 alternativas más baratas cerca ↓',
      timeUser: '9:43',
      timeBot1: '9:43',
      timeBot2: '9:44',
    },
    waste: {
      title: 'EJEMPLO — Cocina Mexicana',
      subtitle: 'Análisis de mermas',
      tiers: [
        { color: 'red', label: 'Alto riesgo', items: 'Cilantro, Aguacate' },
        { color: 'amber', label: 'Riesgo medio', items: 'Carnitas, Crema' },
        { color: 'green', label: 'Bajo riesgo', items: 'Tortillas, Arroz' },
      ],
      savings: '💰 Ahorro estimado ~$200-400/mes',
      time: '9:45',
    },
  },
};

const colorClass: Record<string, string> = {
  red: 'bg-red-500',
  amber: 'bg-amber-400',
  green: 'bg-green-500',
};

function DoubleTick({ size: s }: { size: number }) {
  return (
    <svg width={s} height={s * 0.75} viewBox="0 0 16 12" fill="none" aria-hidden>
      <path d="M0.5 6 L4 10 L9 2" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 6 L9 10 L14 2" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusIcons({ scale }: { scale: number }) {
  const w = 11 * scale;
  const h = 8 * scale;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3 * scale }}>
      <svg width={w} height={h} viewBox="0 0 11 8" fill="#000" aria-hidden>
        <rect x="0" y="6" width="1.5" height="2" rx="0.3" />
        <rect x="2.5" y="4" width="1.5" height="4" rx="0.3" />
        <rect x="5" y="2" width="1.5" height="6" rx="0.3" />
        <rect x="7.5" y="0" width="1.5" height="8" rx="0.3" />
      </svg>
      <svg width={w} height={h} viewBox="0 0 11 8" fill="none" stroke="#000" strokeWidth="0.9" strokeLinecap="round" aria-hidden>
        <path d="M0.8 3.2 Q5.5 -1, 10.2 3.2" />
        <path d="M2.4 4.8 Q5.5 1.6, 8.6 4.8" />
        <circle cx="5.5" cy="6.4" r="0.7" fill="#000" />
      </svg>
      <svg width={20 * scale} height={9 * scale} viewBox="0 0 20 9" fill="none" aria-hidden>
        <rect x="0.5" y="0.5" width="16" height="8" rx="2" stroke="#000" strokeWidth="0.7" fill="none" />
        <rect x="17.2" y="3" width="1.4" height="3" rx="0.3" fill="#000" />
        <rect x="2" y="2" width="13" height="5" rx="0.5" fill="#000" />
      </svg>
    </div>
  );
}

function InputBar({ height, fontSize }: { height: number; fontSize: number }) {
  return (
    <div
      className="absolute bottom-0 inset-x-0 flex items-center"
      style={{
        height,
        padding: '0 6px',
        gap: 5,
        background: '#F7F5F0',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <svg width={fontSize * 1.6} height={fontSize * 1.6} viewBox="0 0 16 16" fill="none" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round">
        <line x1="8" y1="3" x2="8" y2="13" />
        <line x1="3" y1="8" x2="13" y2="8" />
      </svg>
      <div
        className="flex-1 rounded-full bg-white"
        style={{ height: height * 0.55, border: '1px solid rgba(0,0,0,0.07)' }}
      />
      <svg width={fontSize * 1.6} height={fontSize * 1.4} viewBox="0 0 16 14" fill="none" stroke="#3a3a3a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3.5" width="14" height="9" rx="1.5" />
        <circle cx="8" cy="8" r="2.6" />
        <path d="M5 3.5 L6 2 H10 L11 3.5" />
      </svg>
      <svg width={fontSize * 1.4} height={fontSize * 1.6} viewBox="0 0 14 16" fill="none" stroke="#3a3a3a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="4" height="8" rx="2" />
        <path d="M2 8 Q2 12, 7 12 Q12 12, 12 8" />
        <line x1="7" y1="12" x2="7" y2="14" />
      </svg>
    </div>
  );
}

export default function PhoneMockup({ variant, size = 'md', lang = 'en' }: Props) {
  const c = COPY[lang][variant];
  const isLg = size === 'md';

  const phoneW = isLg ? 280 : 220;
  const phoneH = isLg ? 580 : 460;

  const statusH = isLg ? 30 : 24;
  const islandW = isLg ? 95 : 72;
  const islandH = isLg ? 24 : 19;
  const islandTop = isLg ? 6 : 5;
  const headerH = isLg ? 44 : 36;
  const inputH = isLg ? 38 : 30;

  const baseSize = isLg ? 12 : 10;
  const smSize = isLg ? 10.5 : 8.8;
  const tinySize = isLg ? 9 : 7.5;
  const statusSize = isLg ? 10.5 : 8.8;

  const iconScale = isLg ? 1 : 0.85;
  const chatTop = statusH + headerH;

  const botRadius = isLg ? '4px 12px 12px 12px' : '3px 9px 9px 9px';
  const userRadius = isLg ? '12px 4px 12px 12px' : '9px 3px 9px 9px';
  const botRadiusFollow = isLg ? '12px' : '9px';

  return (
    <div
      className="relative shadow-2xl"
      style={{ width: phoneW, height: phoneH, fontFamily: SYSTEM_FONT }}
    >
      <div
        className="absolute inset-0 rounded-[36px]"
        style={{ background: 'linear-gradient(155deg, #2c2c2c 0%, #1a1a1a 50%, #0a0a0a 100%)' }}
      />
      <div className="absolute inset-[2px] rounded-[34px] bg-black" />

      <div className="absolute inset-[5px] rounded-[30px] overflow-hidden" style={{ background: '#EFEAE2' }}>
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.09,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><g fill='%23000'><circle cx='12' cy='15' r='1.8'/><circle cx='48' cy='8' r='1.1'/><circle cx='75' cy='22' r='1.4'/><circle cx='110' cy='12' r='1'/><circle cx='128' cy='32' r='1.6'/><circle cx='28' cy='40' r='1.2'/><circle cx='62' cy='48' r='1.7'/><circle cx='95' cy='38' r='1.1'/><circle cx='15' cy='62' r='1.3'/><circle cx='44' cy='72' r='1.8'/><circle cx='80' cy='65' r='1.1'/><circle cx='115' cy='75' r='1.5'/><circle cx='30' cy='95' r='1.4'/><circle cx='65' cy='90' r='1.1'/><circle cx='100' cy='105' r='1.7'/><circle cx='10' cy='118' r='1.3'/><circle cx='52' cy='118' r='1.5'/><circle cx='88' cy='128' r='1.1'/><circle cx='125' cy='115' r='1.4'/><path d='M70 32 q3 -2 6 0 q-3 2 -6 0' /><path d='M22 80 q3 -2 6 0 q-3 2 -6 0'/><path d='M118 60 q3 -2 6 0 q-3 2 -6 0'/></g></svg>\")",
          }}
        />

        <div
          className="absolute top-0 inset-x-0 z-30"
          style={{ height: statusH, background: '#F7F5F0' }}
        >
          <span
            className="absolute"
            style={{
              left: isLg ? 18 : 12,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: statusSize,
              fontWeight: 600,
              color: '#000',
            }}
          >
            {c.time || '9:42'}
          </span>

          <div
            className="absolute left-1/2 -translate-x-1/2 bg-black"
            style={{
              top: islandTop,
              width: islandW,
              height: islandH,
              borderRadius: 999,
            }}
          />

          <div
            className="absolute"
            style={{
              right: isLg ? 14 : 10,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <StatusIcons scale={iconScale} />
          </div>
        </div>

        <div
          className="absolute inset-x-0 flex items-center gap-2 z-20 border-b border-black/10"
          style={{
            top: statusH,
            height: headerH,
            paddingLeft: 8,
            paddingRight: 8,
            background: '#F7F5F0',
          }}
        >
          <svg
            width={isLg ? 11 : 9}
            height={isLg ? 14 : 11}
            viewBox="0 0 12 16"
            fill="none"
            stroke="#3a3a3a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="9,2 3,8 9,14" />
          </svg>
          <div
            className="rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              width: isLg ? 24 : 19,
              height: isLg ? 24 : 19,
              background: 'linear-gradient(135deg, #C7B8FF, #9B82F0)',
            }}
          >
            <span className="font-bold text-white" style={{ fontSize: isLg ? 10 : 8 }}>K</span>
          </div>
          <span
            className="font-semibold truncate"
            style={{ color: '#111', fontSize: baseSize }}
          >
            kleero
          </span>
        </div>

        <div
          className="absolute inset-x-0 flex flex-col"
          style={{
            top: chatTop,
            bottom: inputH,
            padding: isLg ? 8 : 6,
            gap: isLg ? 6 : 4,
            textAlign: 'left',
          }}
        >
          {variant === 'menu' && (
            <div
              className="self-start shadow-sm"
              style={{
                background: '#fff',
                borderRadius: botRadius,
                padding: isLg ? '7px 9px' : '5px 7px',
                maxWidth: '92%',
                textAlign: 'left',
              }}
            >
              <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.4, margin: 0 }}>
                {c.greetingPre}
                <strong style={{ whiteSpace: 'nowrap' }}>{c.greetingBold}</strong>
                {c.greetingPost}
              </p>
              <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.4, margin: 0, marginTop: 8 }}>
                {c.prompt}
              </p>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: isLg ? 4 : 3 }}>
                {c.options.map((opt: string[], i: number) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      color: '#111',
                      fontSize: smSize,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{opt[0]}.</span>
                    <span>{opt[1]}</span>
                    <span>{opt[2]}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 6,
                  fontSize: tinySize,
                  color: '#888',
                }}
              >
                {c.time}
              </div>
            </div>
          )}

          {variant === 'receipt' && (
            <>
              <div
                className="self-end shadow-sm"
                style={{
                  background: '#D9FDD3',
                  borderRadius: userRadius,
                  padding: 3,
                  maxWidth: '60%',
                }}
              >
                <div
                  style={{
                    height: isLg ? 90 : 70,
                    borderRadius: 5,
                    background: 'linear-gradient(135deg, #FAF7F2, #EAE2D0)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: isLg ? 22 : 18 }}>🧾</div>
                  <div style={{ fontSize: tinySize, color: '#666', marginTop: 2 }}>
                    {c.photoLabel}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 3,
                    padding: '2px 4px 0',
                    fontSize: tinySize,
                    color: '#777',
                  }}
                >
                  <span>{c.timeUser}</span>
                  <DoubleTick size={isLg ? 12 : 10} />
                </div>
              </div>

              <div
                className="self-start shadow-sm"
                style={{
                  background: '#fff',
                  borderRadius: botRadius,
                  padding: isLg ? '6px 9px' : '4px 7px',
                  maxWidth: '82%',
                  textAlign: 'left',
                }}
              >
                <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.4, margin: 0 }}>{c.analyzing}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, fontSize: tinySize, color: '#888' }}>
                  {c.timeBot1}
                </div>
              </div>

              <div
                className="self-start shadow-sm"
                style={{
                  background: '#fff',
                  borderRadius: botRadiusFollow,
                  padding: isLg ? '7px 9px' : '5px 7px',
                  maxWidth: '92%',
                  textAlign: 'left',
                }}
              >
                <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.4, fontWeight: 600, margin: 0 }}>
                  📃 {c.recognizedTitle}
                </p>
                <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.4, marginTop: 4, fontWeight: 600, margin: 0 }}>
                  {c.store}
                </p>
                <div style={{ marginTop: 3, display: 'flex', flexDirection: 'column', gap: 1, color: '#333', fontSize: smSize }}>
                  {c.items.map((item: string, i: number) => (
                    <div key={i}>• {item}</div>
                  ))}
                </div>
                <p style={{ color: '#0a8754', fontSize: smSize, lineHeight: 1.4, marginTop: 6, fontWeight: 500, margin: 0 }}>
                  {c.footer}
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, fontSize: tinySize, color: '#888' }}>
                  {c.timeBot2}
                </div>
              </div>
            </>
          )}

          {variant === 'waste' && (
            <div
              className="self-start shadow-sm"
              style={{
                background: '#fff',
                borderRadius: botRadius,
                padding: isLg ? '7px 9px' : '5px 7px',
                maxWidth: '94%',
                textAlign: 'left',
              }}
            >
              <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.4, fontWeight: 600, margin: 0 }}>
                📊 {c.title}
              </p>
              <p style={{ color: '#666', fontSize: tinySize, marginTop: 1, margin: 0 }}>
                {c.subtitle}
              </p>
              <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: isLg ? 4 : 3 }}>
                {c.tiers.map((tier: any, i: number) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 5,
                      color: '#111',
                      fontSize: smSize,
                      lineHeight: 1.3,
                    }}
                  >
                    <span
                      className={colorClass[tier.color]}
                      style={{
                        width: isLg ? 7 : 6,
                        height: isLg ? 7 : 6,
                        borderRadius: 999,
                        display: 'inline-block',
                        marginTop: isLg ? 4 : 3,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <span style={{ fontWeight: 600 }}>{tier.label}:</span>{' '}
                      <span style={{ color: '#444' }}>{tier.items}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: '#0a8754', fontSize: smSize, lineHeight: 1.4, marginTop: 6, fontWeight: 500, margin: 0 }}>
                {c.savings}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, fontSize: tinySize, color: '#888' }}>
                {c.time}
              </div>
            </div>
          )}
        </div>

        <InputBar height={inputH} fontSize={baseSize} />
      </div>
    </div>
  );
}

type Variant = 'menu' | 'receipt' | 'waste';
type Size = 'sm' | 'md';
type Lang = 'en' | 'es';

type Props = {
  variant: Variant;
  size?: Size;
  lang?: Lang;
};

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

export default function PhoneMockup({ variant, size = 'md', lang = 'en' }: Props) {
  const c = COPY[lang][variant];
  const isLg = size === 'md';

  const phoneW = isLg ? 280 : 220;
  const phoneH = isLg ? 560 : 440;
  const headerH = isLg ? 50 : 40;
  const notchW = isLg ? 70 : 54;
  const notchH = isLg ? 16 : 12;

  const baseSize = isLg ? 12 : 10;
  const smSize = isLg ? 10.5 : 8.8;
  const tinySize = isLg ? 9 : 7.5;

  return (
    <div className="relative shadow-2xl" style={{ width: phoneW, height: phoneH }}>
      <div className="absolute inset-0 rounded-[34px]" style={{ background: 'linear-gradient(145deg, #2a2a2a, #0e0e0e)' }} />
      <div className="absolute inset-[2px] rounded-[32px] bg-black" />

      <div className="absolute inset-[5px] rounded-[28px] overflow-hidden" style={{ background: '#EFEAE2' }}>
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.08,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='%23000'><circle cx='10' cy='12' r='2'/><circle cx='45' cy='28' r='1.5'/><circle cx='62' cy='14' r='1'/><circle cx='25' cy='52' r='2.2'/><circle cx='68' cy='60' r='1.8'/><circle cx='12' cy='72' r='1.3'/></g></svg>\")",
          }}
        />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-black z-30"
          style={{
            width: notchW,
            height: notchH,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />

        <div
          className="absolute top-0 inset-x-0 flex items-center gap-2 z-20 border-b border-black/10"
          style={{
            height: headerH,
            paddingTop: notchH + 4,
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
          <span className="font-semibold truncate" style={{ color: '#111', fontSize: baseSize }}>kleero</span>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 flex flex-col"
          style={{ top: headerH, padding: isLg ? 8 : 6, gap: isLg ? 6 : 4 }}
        >
          {variant === 'menu' && (
            <div
              className="self-start shadow-sm"
              style={{
                background: '#fff',
                borderRadius: isLg ? 8 : 6,
                padding: isLg ? '7px 9px' : '5px 7px',
                maxWidth: '90%',
              }}
            >
              <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.35 }}>
                {c.greetingPre}
                <strong>{c.greetingBold}</strong>
                {c.greetingPost}
              </p>
              <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.35, marginTop: 6 }}>
                {c.prompt}
              </p>
              <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: isLg ? 4 : 3 }}>
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
                  alignItems: 'center',
                  marginTop: 4,
                  fontSize: tinySize,
                  color: '#888',
                }}
              >
                <span>{c.time}</span>
              </div>
            </div>
          )}

          {variant === 'receipt' && (
            <>
              <div
                className="self-end shadow-sm"
                style={{
                  background: '#D9FDD3',
                  borderRadius: isLg ? 8 : 6,
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
                  borderRadius: isLg ? 8 : 6,
                  padding: isLg ? '6px 9px' : '4px 7px',
                  maxWidth: '82%',
                }}
              >
                <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.35 }}>{c.analyzing}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, fontSize: tinySize, color: '#888' }}>
                  {c.timeBot1}
                </div>
              </div>

              <div
                className="self-start shadow-sm"
                style={{
                  background: '#fff',
                  borderRadius: isLg ? 8 : 6,
                  padding: isLg ? '7px 9px' : '5px 7px',
                  maxWidth: '90%',
                }}
              >
                <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.35, fontWeight: 600 }}>
                  📃 {c.recognizedTitle}
                </p>
                <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.35, marginTop: 4, fontWeight: 600 }}>
                  {c.store}
                </p>
                <div style={{ marginTop: 3, display: 'flex', flexDirection: 'column', gap: 1, color: '#333', fontSize: smSize }}>
                  {c.items.map((item: string, i: number) => (
                    <div key={i}>• {item}</div>
                  ))}
                </div>
                <p style={{ color: '#0a8754', fontSize: smSize, lineHeight: 1.35, marginTop: 6, fontWeight: 500 }}>
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
                borderRadius: isLg ? 8 : 6,
                padding: isLg ? '7px 9px' : '5px 7px',
                maxWidth: '94%',
              }}
            >
              <p style={{ color: '#111', fontSize: smSize, lineHeight: 1.35, fontWeight: 600 }}>
                📊 {c.title}
              </p>
              <p style={{ color: '#666', fontSize: tinySize, marginTop: 1 }}>{c.subtitle}</p>
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
              <p style={{ color: '#0a8754', fontSize: smSize, lineHeight: 1.35, marginTop: 6, fontWeight: 500 }}>
                {c.savings}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, fontSize: tinySize, color: '#888' }}>
                {c.time}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

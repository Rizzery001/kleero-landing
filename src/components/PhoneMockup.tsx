type Variant = 'menu' | 'receipt' | 'waste';
type Lang = 'en' | 'es';

type Props = {
  variant: Variant;
  lang?: Lang;
  className?: string;
  size?: 'sm' | 'md';
};

const COPY = {
  en: {
    botName: 'KLEERO',
    botStatus: 'online',
    menu: {
      welcome: 'Hi! I help small restaurants save on suppliers, food waste, and busy days.',
      pick: 'What do you want to do today?',
      btn1: '💰  Find Savings',
      btn2: '🥗  Reduce Waste',
      btn3: '📅  Find Events',
      btn4: '📊  Weekly Report',
    },
    receipt: {
      user: '📷  IMG_4421.jpg',
      bot1: 'Receipt recognized ✅',
      bot2: '8 items · Restaurant Depot · $327.40',
      items: [
        ['Avocado Hass', '12 lb', '$28.80'],
        ['Cilantro', '2 bunch', '$3.40'],
        ['Tortillas (corn)', '5 kg', '$24.50'],
        ['Lime', '4 kg', '$11.20'],
      ],
      bot3: 'Found 3 cheaper options nearby ↓',
    },
    waste: {
      user: 'Mexican kitchen 🌮',
      bot1: 'Spoilage forecast — next 3 days:',
      items: [
        { dot: 'red', name: 'Cilantro', sub: 'Spoils in ~36h · use first' },
        { dot: 'red', name: 'Avocado Hass', sub: 'Ripe now · 24h window' },
        { dot: 'yellow', name: 'Tortillas (corn)', sub: '4 days left' },
        { dot: 'yellow', name: 'Lime', sub: '1 week' },
        { dot: 'green', name: 'Dried beans', sub: 'Months · safe' },
      ],
    },
  },
  es: {
    botName: 'KLEERO',
    botStatus: 'en línea',
    menu: {
      welcome: '¡Hola! Ayudo a restaurantes pequeños a ahorrar en proveedores, desperdicio y días ocupados.',
      pick: '¿Qué quieres hacer hoy?',
      btn1: '💰  Encontrar Ahorros',
      btn2: '🥗  Reducir Desperdicio',
      btn3: '📅  Buscar Eventos',
      btn4: '📊  Reporte Semanal',
    },
    receipt: {
      user: '📷  IMG_4421.jpg',
      bot1: 'Recibo reconocido ✅',
      bot2: '8 artículos · Restaurant Depot · $327.40',
      items: [
        ['Aguacate Hass', '12 lb', '$28.80'],
        ['Cilantro', '2 manojo', '$3.40'],
        ['Tortillas (maíz)', '5 kg', '$24.50'],
        ['Limón', '4 kg', '$11.20'],
      ],
      bot3: 'Encontré 3 opciones más baratas cerca ↓',
    },
    waste: {
      user: 'Cocina mexicana 🌮',
      bot1: 'Predicción de caducidad — próximos 3 días:',
      items: [
        { dot: 'red', name: 'Cilantro', sub: 'Caduca en ~36h · usar primero' },
        { dot: 'red', name: 'Aguacate Hass', sub: 'Maduro · 24h disponibles' },
        { dot: 'yellow', name: 'Tortillas (maíz)', sub: '4 días restantes' },
        { dot: 'yellow', name: 'Limón', sub: '1 semana' },
        { dot: 'green', name: 'Frijoles secos', sub: 'Meses · seguro' },
      ],
    },
  },
} as const;

const dotColor = (d: string) =>
  d === 'red' ? '#DC2626' : d === 'yellow' ? '#EAB308' : '#16A34A';

export default function PhoneMockup({
  variant,
  lang = 'en',
  className = '',
  size = 'md',
}: Props) {
  const t = COPY[lang];

  const sizeClass = size === 'sm'
    ? 'w-[220px] sm:w-[240px]'
    : 'w-[240px] sm:w-[268px]';

  return (
    <div
      className={`relative ${className}`}
      style={{ filter: 'drop-shadow(0 20px 36px rgba(20, 58, 44, 0.18))' }}
    >
      <div className={`relative mx-auto ${sizeClass} rounded-[2.2rem] bg-forest-900 p-2 ring-1 ring-forest-900/40`}>
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#EFEAE0] aspect-[9/19.5]">
          <div className="flex items-center gap-2.5 bg-[#5288c1] px-3 py-2.5 text-cream-50">
            <div className="h-7 w-7 rounded-full bg-cream-50 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 1080 1080" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M657.249 747.474L611.14 626.532C601.216 600.495 577.034 582.831 549.503 581.057L547.059 747.474H369.14L371.202 613.694C371.612 586.922 352.998 559.476 327.305 559.476C293.471 559.476 261 527.067 261 488.763V347.004H429.612V488.763C429.612 517.573 446.81 542.348 471.492 553.433L543.56 347H710.038L636.224 558.462H714.783C745.435 558.462 772.621 578.167 782.151 607.302L828 747.474H657.249Z"
                  fill="#143A2C"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold leading-tight truncate">
                {t.botName}
              </div>
              <div className="text-[9px] opacity-80 leading-tight">
                {t.botStatus}
              </div>
            </div>
            <div className="text-cream-50/80 text-[10px]">⋯</div>
          </div>

          <div className="px-2.5 py-2.5 space-y-1.5 text-[10px] leading-snug text-ink-900 overflow-hidden">
            {variant === 'menu' && (
              <>
                <BotBubble>{t.menu.welcome}</BotBubble>
                <BotBubble>{t.menu.pick}</BotBubble>
                <div className="space-y-1 pt-0.5">
                  <ChatButton>{t.menu.btn1}</ChatButton>
                  <ChatButton>{t.menu.btn2}</ChatButton>
                  <ChatButton>{t.menu.btn3}</ChatButton>
                  <ChatButton>{t.menu.btn4}</ChatButton>
                </div>
              </>
            )}

            {variant === 'receipt' && (
              <>
                <UserBubble>{t.receipt.user}</UserBubble>
                <BotBubble>
                  <div className="font-semibold">{t.receipt.bot1}</div>
                  <div className="opacity-70 mt-0.5 text-[9px]">{t.receipt.bot2}</div>
                </BotBubble>
                <BotBubble>
                  <div className="space-y-1">
                    {t.receipt.items.map((row, i) => (
                      <div
                        key={i}
                        className="flex items-baseline justify-between gap-1.5 text-[9px] border-b border-forest-900/10 pb-0.5 last:border-0 last:pb-0"
                      >
                        <span className="font-medium truncate">{row[0]}</span>
                        <span className="opacity-60 shrink-0">{row[1]}</span>
                        <span className="font-semibold shrink-0">{row[2]}</span>
                      </div>
                    ))}
                  </div>
                </BotBubble>
                <BotBubble>
                  <span className="text-terracotta-600 font-semibold text-[9px]">
                    {t.receipt.bot3}
                  </span>
                </BotBubble>
              </>
            )}

            {variant === 'waste' && (
              <>
                <UserBubble>{t.waste.user}</UserBubble>
                <BotBubble>
                  <div className="font-semibold mb-1 text-[9px]">{t.waste.bot1}</div>
                  <div className="space-y-1">
                    {t.waste.items.map((it, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span
                          className="h-1.5 w-1.5 rounded-full mt-1 shrink-0"
                          style={{ backgroundColor: dotColor(it.dot) }}
                        />
                        <div className="min-w-0">
                          <div className="font-medium text-[9px]">{it.name}</div>
                          <div className="opacity-60 text-[8px]">{it.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </BotBubble>
              </>
            )}
          </div>
        </div>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-b-2xl bg-forest-900" />
      </div>
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-cream-50 px-2.5 py-1.5 shadow-sm">
      {children}
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-2.5 py-1.5 shadow-sm">
      {children}
    </div>
  );
}

function ChatButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-cream-50 px-2.5 py-1.5 text-[10px] font-medium text-forest-600 shadow-sm border border-forest-600/10">
      {children}
    </div>
  );
}

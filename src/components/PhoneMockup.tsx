type Variant = 'menu' | 'receipt' | 'waste';
type Lang = 'en' | 'es';

type Props = {
  variant: Variant;
  lang?: Lang;
  className?: string;
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
}: Props) {
  const t = COPY[lang];

  return (
    <div
      className={`relative ${className}`}
      style={{ filter: 'drop-shadow(0 30px 50px rgba(20, 58, 44, 0.18))' }}
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] sm:w-[320px] rounded-[2.5rem] bg-forest-900 p-2.5 ring-1 ring-forest-900/40">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#EFEAE0] aspect-[9/19.5]">
          {/* Telegram-style header */}
          <div className="flex items-center gap-3 bg-[#5288c1] px-4 py-3 text-cream-50">
            <div className="h-8 w-8 rounded-full bg-cream-50 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 1080 1080" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M657.249 747.474L611.14 626.532C601.216 600.495 577.034 582.831 549.503 581.057L547.059 747.474H369.14L371.202 613.694C371.612 586.922 352.998 559.476 327.305 559.476C293.471 559.476 261 527.067 261 488.763V347.004H429.612V488.763C429.612 517.573 446.81 542.348 471.492 553.433L543.56 347H710.038L636.224 558.462H714.783C745.435 558.462 772.621 578.167 782.151 607.302L828 747.474H657.249Z"
                  fill="#143A2C"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold leading-tight truncate">
                {t.botName}
              </div>
              <div className="text-[10px] opacity-80 leading-tight">
                {t.botStatus}
              </div>
            </div>
            <div className="text-cream-50/80 text-xs">⋯</div>
          </div>

          {/* Chat area */}
          <div className="px-3 py-3 space-y-2 text-[11px] leading-snug text-ink-900 overflow-hidden">
            {variant === 'menu' && (
              <>
                <BotBubble>{t.menu.welcome}</BotBubble>
                <BotBubble>{t.menu.pick}</BotBubble>
                <div className="space-y-1.5 pt-1">
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
                  <div className="opacity-70 mt-0.5 text-[10px]">{t.receipt.bot2}</div>
                </BotBubble>
                <BotBubble>
                  <div className="space-y-1.5">
                    {t.receipt.items.map((row, i) => (
                      <div
                        key={i}
                        className="flex items-baseline justify-between gap-2 text-[10px] border-b border-forest-900/10 pb-1 last:border-0 last:pb-0"
                      >
                        <span className="font-medium truncate">{row[0]}</span>
                        <span className="opacity-60 shrink-0">{row[1]}</span>
                        <span className="font-semibold shrink-0">{row[2]}</span>
                      </div>
                    ))}
                  </div>
                </BotBubble>
                <BotBubble>
                  <span className="text-terracotta-600 font-semibold">
                    {t.receipt.bot3}
                  </span>
                </BotBubble>
              </>
            )}

            {variant === 'waste' && (
              <>
                <UserBubble>{t.waste.user}</UserBubble>
                <BotBubble>
                  <div className="font-semibold mb-1.5">{t.waste.bot1}</div>
                  <div className="space-y-1.5">
                    {t.waste.items.map((it, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span
                          className="h-2 w-2 rounded-full mt-1 shrink-0"
                          style={{ backgroundColor: dotColor(it.dot) }}
                        />
                        <div className="min-w-0">
                          <div className="font-medium text-[10px]">{it.name}</div>
                          <div className="opacity-60 text-[9px]">{it.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </BotBubble>
              </>
            )}
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-24 rounded-b-2xl bg-forest-900" />
      </div>
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-cream-50 px-3 py-2 shadow-sm">
      {children}
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3 py-2 shadow-sm">
      {children}
    </div>
  );
}

function ChatButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-cream-50 px-3 py-2 text-[11px] font-medium text-forest-600 shadow-sm border border-forest-600/10">
      {children}
    </div>
  );
}

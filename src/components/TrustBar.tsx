import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('trust');

  const items = [
    { icon: NoAppIcon, text: t('item1') },
    { icon: ClockIcon, text: t('item2') },
    { icon: GiftIcon, text: t('item3') },
  ];

  return (
    <section className="relative border-y border-line bg-cream-200/60 py-5">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-center text-sm text-ink-700">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest-500" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M3 3l18 18" stroke="#D26A3C" strokeWidth="2.2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest-500" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest-500" aria-hidden>
      <rect x="3" y="9" width="18" height="12" rx="2" />
      <path d="M3 13h18M12 9v12M8 9a3 3 0 1 1 4-4 3 3 0 1 1 4 4" />
    </svg>
  );
}

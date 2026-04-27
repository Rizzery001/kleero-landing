import { useTranslations } from 'next-intl';

export default function Problems() {
  const t = useTranslations('problems');
  const cards = [
    { key: 'card1', icon: '💰', tone: 'forest' },
    { key: 'card2', icon: '🥗', tone: 'terracotta' },
    { key: 'card3', icon: '📅', tone: 'forest' },
  ] as const;

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4">{t('eyebrow')}</span>
          <h2 className="font-display font-medium tracking-tightest text-forest-700 leading-[1.05] text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] mt-3">{t('title')}</h2>
          <p className="mt-3 text-base sm:text-lg text-ink-700 max-w-2xl">{t('subtitle')}</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card) => (
            <article key={card.key} className="group relative bg-cream-50 border border-line rounded-2xl p-6 lg:p-7 shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-2xl mb-4">{card.icon}</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`font-display text-3xl lg:text-[2.4rem] font-medium tracking-tight ${card.tone === 'terracotta' ? 'text-terracotta-500' : 'text-forest-600'}`}>{t(`${card.key}.amount`)}</span>
                <span className="text-[10px] uppercase tracking-wider text-ink-500 font-medium">{t(`${card.key}.amountLabel`)}</span>
              </div>
              <h3 className="font-display text-lg lg:text-xl text-forest-700 font-medium mb-2">{t(`${card.key}.title`)}</h3>
              <p className="text-[14px] text-ink-700 leading-relaxed">{t(`${card.key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export default function Problems() {
  const t = useTranslations('problems');

  const cards = [
    {
      key: 'card1',
      icon: '💰',
      tone: 'forest',
    },
    {
      key: 'card2',
      icon: '🥗',
      tone: 'terracotta',
    },
    {
      key: 'card3',
      icon: '📅',
      tone: 'forest',
    },
  ] as const;

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5">{t('eyebrow')}</span>
          <h2 className="font-display font-medium tracking-tightest text-forest-700 leading-[1.05] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] mt-4">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg text-ink-700 max-w-2xl">{t('subtitle')}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <article
              key={card.key}
              className="group relative bg-cream-50 border border-line rounded-3xl p-7 lg:p-8 shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-5">{card.icon}</div>

              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className={`font-display text-4xl lg:text-5xl font-medium tracking-tight ${
                    card.tone === 'terracotta'
                      ? 'text-terracotta-500'
                      : 'text-forest-600'
                  }`}
                >
                  {t(`${card.key}.amount`)}
                </span>
                <span className="text-xs uppercase tracking-wider text-ink-500 font-medium">
                  {t(`${card.key}.amountLabel`)}
                </span>
              </div>

              <h3 className="font-display text-xl text-forest-700 font-medium mb-2.5">
                {t(`${card.key}.title`)}
              </h3>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                {t(`${card.key}.body`)}
              </p>

              {/* corner ornament */}
              <div className="absolute top-5 right-5 h-1 w-6 bg-forest-700/10 rounded-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/links';

const ROWS = ['channel', 'setup', 'cost', 'languages', 'suppliers', 'ocr', 'events'] as const;

export default function Comparison() {
  const t = useTranslations('comparison');

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5">{t('eyebrow')}</span>
          <h2 className="font-display font-medium tracking-tightest text-forest-700 leading-[1.05] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] mt-4">
            {t('title')}
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          {/* Mobile: stacked cards */}
          <div className="lg:hidden space-y-3">
            {ROWS.map((row) => (
              <div
                key={row}
                className="rounded-2xl bg-cream-50 border border-line p-5 shadow-soft"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-ink-500 font-medium mb-3">
                  {t(`rows.${row}.label`)}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-semibold tracking-wider text-terracotta-500 uppercase mb-1">
                      {t('headerKleero')}
                    </div>
                    <div className="text-sm font-medium text-forest-700">
                      {t(`rows.${row}.kleero`)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-wider text-ink-300 uppercase mb-1">
                      {t('headerOthers')}
                    </div>
                    <div className="text-sm text-ink-500">
                      {t(`rows.${row}.others`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: full table */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden border border-line bg-cream-50 shadow-soft">
              <div className="grid grid-cols-12 bg-cream-200 border-b border-line">
                <div className="col-span-4 px-7 py-5 text-xs uppercase tracking-[0.16em] text-ink-500 font-medium" />
                <div className="col-span-4 px-7 py-5 bg-forest-700 text-cream-50">
                  <div className="font-display text-xl font-medium">
                    {t('headerKleero')}
                  </div>
                  <div className="text-xs text-cream-200/70 mt-0.5">
                    AI in WhatsApp
                  </div>
                </div>
                <div className="col-span-4 px-7 py-5">
                  <div className="font-display text-xl font-medium text-ink-500">
                    {t('headerOthers')}
                  </div>
                  <div className="text-xs text-ink-300 mt-0.5">
                    Traditional SaaS
                  </div>
                </div>
              </div>

              {ROWS.map((row, i) => (
                <div
                  key={row}
                  className={`grid grid-cols-12 ${
                    i !== ROWS.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <div className="col-span-4 px-7 py-5 text-sm text-ink-700 font-medium border-r border-line">
                    {t(`rows.${row}.label`)}
                  </div>
                  <div className="col-span-4 px-7 py-5 text-[15px] font-medium text-forest-700 bg-forest-50/40 border-r border-line">
                    {t(`rows.${row}.kleero`)}
                  </div>
                  <div className="col-span-4 px-7 py-5 text-[15px] text-ink-500">
                    {t(`rows.${row}.others`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={whatsappLink('landing_compare')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('cta')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

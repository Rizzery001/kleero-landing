import { useTranslations } from 'next-intl';
import { FEATURES } from '@/lib/featureFlags';
import { whatsappLink } from '@/lib/links';

const ROWS = ['channel', 'setup', 'cost', 'languages', 'suppliers', 'ocr', 'events'] as const;

export default function Comparison() {
  const t = useTranslations('comparison');

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4">{t('eyebrow')}</span>
          <h2 className="font-display font-medium tracking-tightest text-forest-700 leading-[1.05] text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] mt-3">{t('title')}</h2>
        </div>
        <div className="mt-10 lg:mt-12 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-line bg-cream-50 shadow-soft">
            <div className="grid grid-cols-3 bg-cream-200 border-b border-line">
              <div className="px-3 sm:px-5 py-3 sm:py-4" />
              <div className="px-3 sm:px-5 py-3 sm:py-4 bg-forest-700 text-cream-50">
                <div className="font-display text-base sm:text-lg font-medium leading-tight">{t('headerKleero')}</div>
                <div className="text-[10px] sm:text-[11px] text-cream-200/70 mt-0.5 hidden sm:block">AI in WhatsApp</div>
              </div>
              <div className="px-3 sm:px-5 py-3 sm:py-4">
                <div className="font-display text-base sm:text-lg font-medium leading-tight text-ink-500">{t('headerOthers')}</div>
                <div className="text-[10px] sm:text-[11px] text-ink-300 mt-0.5 hidden sm:block">Traditional SaaS</div>
              </div>
            </div>
            {ROWS.map((row, i) => (
              <div key={row} className={`grid grid-cols-3 ${i !== ROWS.length - 1 ? 'border-b border-line' : ''}`}>
                <div className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-[13px] text-ink-700 font-medium border-r border-line flex items-center">{t(`rows.${row}.label`)}</div>
                <div className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-[14px] font-medium text-forest-700 bg-forest-50/40 border-r border-line flex items-center">{row === 'channel' && !FEATURES.SHOW_WHATSAPP ? 'Telegram' : t(`rows.${row}.kleero`)}</div>
                <div className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-[14px] text-ink-500 flex items-center">{t(`rows.${row}.others`)}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a href={whatsappLink('landing_compare')} target="_blank" rel="noopener noreferrer" className="btn-primary">{t('cta')} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

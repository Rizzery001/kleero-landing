import { useTranslations } from 'next-intl';
import { telegramLink, whatsappLink } from '@/lib/links';

export default function FinalCTA() {
  const t = useTranslations('finalCta');
  return (
    <section className="pt-4 pb-16 sm:pb-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-forest-700 text-cream-50 px-6 sm:px-10 lg:px-16 py-14 lg:py-20 text-center">
          <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(ellipse at top, rgba(210,106,60,0.25), transparent 60%)' }} />
          <div className="relative">
            <h2 className="font-display font-medium tracking-tightest leading-[1.05] text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] max-w-3xl mx-auto">
              {t('title')}{' '}<span className="italic text-terracotta-400">{t('titleHighlight')}</span>{' '}{t('titleEnd')}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-cream-200/85 max-w-2xl mx-auto">{t('subtitle')}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={whatsappLink('landing_cta')} target="_blank" rel="noopener noreferrer" className="btn-primary">💬  {t('ctaWhatsapp')}</a>
              <a href={telegramLink('landing_cta')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-cream-50 text-forest-700 font-medium tracking-tight text-[15px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">✈️  {t('ctaTelegram')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import { telegramLink } from '@/lib/links';

export default function Referral() {
  const t = useTranslations('referral');
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-cream-200 border border-line p-7 sm:p-10 lg:p-12">
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 h-6 w-6 rounded-full bg-cream-100 border border-line" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-3 h-6 w-6 rounded-full bg-cream-100 border border-line" />
          <div className="grid lg:grid-cols-12 gap-6 items-center relative">
            <div className="lg:col-span-8">
              <span className="eyebrow mb-4">{t('eyebrow')}</span>
              <h2 className="font-display font-medium tracking-tightest text-forest-700 leading-[1.05] text-[1.7rem] sm:text-[2.1rem] mt-3">{t('title')}</h2>
              <p className="mt-3 text-base text-ink-700 max-w-xl leading-relaxed">{t('body')}</p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a href={telegramLink('landing_referral')} target="_blank" rel="noopener noreferrer" className="btn-primary">{t('cta')} →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

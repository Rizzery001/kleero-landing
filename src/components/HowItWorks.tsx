import { useTranslations, useLocale } from 'next-intl';
import PhoneMockup from './PhoneMockup';

export default function HowItWorks() {
  const t = useTranslations('how');
  const locale = useLocale() as 'en' | 'es';
  const steps = [
    { key: 'step1', variant: 'menu' as const },
    { key: 'step2', variant: 'receipt' as const },
    { key: 'step3', variant: 'waste' as const },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-forest-700 text-cream-50 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4" style={{ color: '#C5D9CD' }}>{t('eyebrow')}</span>
          <h2 className="font-display font-medium tracking-tightest leading-[1.05] text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] mt-3">{t('title')}</h2>
          <p className="mt-3 text-base sm:text-lg text-cream-200/90 max-w-2xl">{t('subtitle')}</p>
        </div>
        <div className="mt-10 lg:mt-14 space-y-10 lg:space-y-14">
          {steps.map((step, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={step.key} className={`grid lg:grid-cols-12 gap-6 lg:gap-8 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-8">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-2xl lg:text-3xl font-medium text-terracotta-400 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[11px] uppercase tracking-[0.18em] font-medium" style={{ color: '#C5D9CD' }}>{t(`${step.key}.label`)}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-[1.9rem] font-medium leading-tight">{t(`${step.key}.title`)}</h3>
                  <p className="mt-3 text-[15px] sm:text-base text-cream-200/85 leading-relaxed max-w-2xl">{t(`${step.key}.body`)}</p>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <PhoneMockup variant={step.variant} lang={locale} size="sm" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

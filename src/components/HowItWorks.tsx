import { useTranslations, useLocale } from 'next-intl';
import PhoneMockup from './PhoneMockup';

export default function HowItWorks() {
  const t = useTranslations('how');
  const locale = useLocale() as 'en' | 'es';

  const steps = [
    { key: 'step1', variant: 'menu' as const },
    { key: 'step2', variant: 'receipt' as const },
    { key: 'step3', variant: 'savings' as const },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-forest-700 text-cream-50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-5 bg-cream-200/40" />
            <span
              className="text-[11px] uppercase tracking-[0.18em] font-medium"
              style={{ color: '#C5D9CD' }}
            >
              {t('eyebrow')}
            </span>
            <span className="h-px w-5 bg-cream-200/40" />
          </div>
          <h2 className="font-display font-medium tracking-tightest leading-[1.05] text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem]">
            {t('title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-cream-200/90">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <div key={step.key} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <PhoneMockup variant={step.variant} lang={locale} size="sm" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50/10 border border-cream-50/15 backdrop-blur-sm">
                <span className="font-display text-sm font-medium text-terracotta-400 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.18em] font-medium"
                  style={{ color: '#C5D9CD' }}
                >
                  {t(`${step.key}.label`)}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl lg:text-2xl font-medium leading-tight">
                {t(`${step.key}.title`)}
              </h3>

              <p className="mt-3 text-[15px] text-cream-200/80 leading-relaxed max-w-xs">
                {t(`${step.key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

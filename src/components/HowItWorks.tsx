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
    <section className="section-y bg-forest-700 text-cream-50 relative overflow-hidden">
      {/* Decorative grain on dark */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5 text-cream-200" style={{ color: '#C5D9CD' }}>
            {t('eyebrow')}
          </span>
          <h2 className="font-display font-medium tracking-tightest leading-[1.05] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] mt-4">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg text-cream-200/90 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 lg:mt-24 space-y-24 lg:space-y-32">
          {steps.map((step, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={step.key}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-12 items-center ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="font-display text-7xl lg:text-8xl font-medium text-terracotta-400/90 leading-none tracking-tighter mb-5 italic">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-cream-200/70 mb-3 font-medium">
                    {t(`${step.key}.label`)}
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="mt-5 text-lg text-cream-200/85 max-w-xl leading-relaxed">
                    {t(`${step.key}.body`)}
                  </p>
                </div>
                <div className="lg:col-span-5 flex justify-center">
                  <PhoneMockup variant={step.variant} lang={locale} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

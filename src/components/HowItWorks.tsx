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
    <section className="py-20 sm:py-24 lg:py-28 bg-cream-200/40 border-y border-line">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5 text-forest-700/80">
            {t('eyebrow')}
          </span>
          <h2 className="font-display font-medium tracking-tightest leading-[1.05] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] mt-4">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg text-forest-700/75 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 lg:mt-20 space-y-14 lg:space-y-20">
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
                  <div className="flex items-baseline gap-4 mb-4">
                    <div className="font-display text-3xl lg:text-4xl font-medium leading-none tracking-tight text-terracotta-500">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xs uppercase tracking-[0.18em] text-forest-700/60 font-medium">
                      {t(`${step.key}.label`)}
                    </div>
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="mt-5 text-lg text-forest-700/80 max-w-xl leading-relaxed">
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

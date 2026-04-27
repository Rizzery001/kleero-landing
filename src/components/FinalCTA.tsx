import { useTranslations } from 'next-intl';
import { telegramLink, whatsappLink } from '@/lib/links';

export default function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section className="pt-8 pb-24 sm:pb-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-700 text-cream-50 px-8 sm:px-12 lg:px-20 py-20 lg:py-28 text-center">
          {/* Decorative radial */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse at top, rgba(210,106,60,0.25), transparent 60%)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative">
            <h2 className="font-display font-medium tracking-tightest leading-[1.05] text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] max-w-4xl mx-auto">
              {t('title')}{' '}
              <span className="italic text-terracotta-400">
                {t('titleHighlight')}
              </span>{' '}
              {t('titleEnd')}
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-cream-200/85 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink('landing_cta')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                💬  {t('ctaWhatsapp')}
              </a>
              <a
                href={telegramLink('landing_cta')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 bg-cream-50 text-forest-700 font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,0,0,0.15)]"
              >
                ✈️  {t('ctaTelegram')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import { telegramLink } from '@/lib/links';

export default function Referral() {
  const t = useTranslations('referral');

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-cream-200 border border-line p-8 sm:p-12 lg:p-16">
          {/* Decorative ticket-stub circles */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 h-6 w-6 rounded-full bg-cream-100 border border-line" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-3 h-6 w-6 rounded-full bg-cream-100 border border-line" />

          {/* Decorative confetti dots */}
          <div className="absolute top-8 right-12 hidden sm:block">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden>
              <circle cx="10" cy="10" r="3" fill="#D26A3C" />
              <circle cx="40" cy="20" r="2" fill="#143A2C" />
              <circle cx="20" cy="40" r="2.5" fill="#D26A3C" opacity="0.6" />
              <circle cx="50" cy="50" r="2" fill="#143A2C" opacity="0.5" />
              <path d="M30 5l3 6" stroke="#D26A3C" strokeWidth="2" strokeLinecap="round" />
              <path d="M55 30l-6 3" stroke="#143A2C" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-5">{t('eyebrow')}</span>
              <h2 className="font-display font-medium tracking-tightest text-forest-700 leading-[1.05] text-[2rem] sm:text-[2.6rem] mt-4">
                {t('title')}
              </h2>
              <p className="mt-5 text-lg text-ink-700 max-w-xl leading-relaxed">
                {t('body')}
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <a
                href={telegramLink('landing_referral')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                {t('cta')} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

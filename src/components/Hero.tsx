import { useTranslations, useLocale } from 'next-intl';
import { telegramLink, whatsappLink } from '@/lib/links';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as 'en' | 'es';

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-28 pb-14 lg:pb-24 overflow-hidden bg-[#0A1813] text-cream-50">
      <div aria-hidden className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(210,106,60,0.32), transparent 65%)' }} />
      <div aria-hidden className="absolute -bottom-48 -left-40 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 70%, rgba(63,107,88,0.5), transparent 60%)' }} />
      <div aria-hidden className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")" }} />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-4" style={{ color: '#C5D9CD' }}>{t('eyebrow')}</span>
            <h1 className="font-display font-medium tracking-tightest leading-[1.04] text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] mt-4">
              <span className="block">{t('title_1')}</span>
              <span className="block">{t('title_2')}</span>
              <span className="block italic text-terracotta-400">{t('title_3')}</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-cream-200/85 max-w-xl leading-relaxed">{t('subtitle')}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={whatsappLink('landing_hero')} className="btn-primary" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                {t('ctaWhatsapp')}
              </a>
              <a href={telegramLink('landing_hero')} className="inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 bg-cream-50/10 hover:bg-cream-50/15 border border-cream-50/20 text-cream-50 font-medium tracking-tight text-[15px] transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.464.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.231-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                {t('ctaTelegram')}
              </a>
            </div>
            <p className="mt-4 text-[13px] text-cream-200/60 tracking-wide">{t('ctaMicro')}</p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup variant="menu" lang={locale} size="md" />
              <div className="absolute -top-8 -left-3 sm:-left-6 hidden sm:flex items-center gap-2 rounded-full bg-terracotta-500 text-cream-50 px-3 py-1.5 shadow-lg z-30">
                <span className="h-1.5 w-1.5 rounded-full bg-cream-50 animate-pulse" />
                <span className="text-[11px] font-medium tracking-wide">{t('phoneCaption')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

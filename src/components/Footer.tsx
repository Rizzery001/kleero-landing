import { useTranslations } from 'next-intl';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-cream-200/60">
      <div className="container-x py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-3 text-[14px] text-ink-700 max-w-xs leading-relaxed">{t('tagline')}</p>
          </div>
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.16em] text-ink-500 font-medium mb-3">{t('contact')}</div>
            <a href="mailto:hello@kleero.co" className="text-[14px] text-forest-700 hover:text-terracotta-500 transition-colors font-medium">hello@kleero.co</a>
          </div>
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.16em] text-ink-500 font-medium mb-3">{t('legal')}</div>
            <ul className="space-y-1.5 text-[14px]">
              <li><a href="/privacy" className="text-ink-700 hover:text-forest-700 transition-colors">{t('privacy')}</a></li>
              <li><a href="/terms" className="text-ink-700 hover:text-forest-700 transition-colors">{t('terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center text-[13px] text-ink-500">
          <div>© {year} KLEERO. {t('rights')}</div>
          <div className="font-display italic text-forest-500">Made for kitchens.</div>
        </div>
      </div>
    </footer>
  );
}

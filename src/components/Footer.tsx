import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-100 border-t border-forest-700/10 pt-14 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-forest-700/10">
          <div>
            <Logo variant="dark" />
            <p className="mt-3 text-sm text-forest-700/70 max-w-xs">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-forest-700/50 mb-3 font-medium">
              {t('contactLabel')}
            </h4>
            <a
              href="mailto:hello@kleero.co"
              className="text-forest-700 hover:text-terracotta-500 transition-colors text-[15px]"
            >
              hello@kleero.co
            </a>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-forest-700/50 mb-3 font-medium">
              {t('legalLabel')}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-forest-700 hover:text-terracotta-500 transition-colors text-[15px]"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-forest-700 hover:text-terracotta-500 transition-colors text-[15px]"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[12px] text-forest-700/60 leading-relaxed space-y-1">
          <p>
            © {year} Glitchlab Ltd. KLEERO is a product of Glitchlab Ltd.
          </p>
          <p>
            Companies House: SC870130 · Registered in Scotland.
          </p>
          <p>
            Registered office: Martha Street, 77 John Street, 15j, Glasgow, G1 1JF, United Kingdom.
          </p>
        </div>
      </div>
    </footer>
  );
}

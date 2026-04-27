'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

const LOCALES = [
  { code: 'en' as const, label: 'EN' },
  { code: 'es' as const, label: 'ES' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('nav');

  const switchTo = (next: 'en' | 'es') => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-forest-600/15 bg-cream-50 p-1 text-sm"
      role="group"
      aria-label={t('switchLanguage')}
    >
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <button
            key={l.code}
            onClick={() => switchTo(l.code)}
            disabled={isPending}
            aria-pressed={active}
            className={`
              px-3 py-1.5 rounded-full font-medium tracking-wide
              transition-all duration-200
              ${
                active
                  ? 'bg-forest-600 text-cream-50 shadow-sm'
                  : 'text-ink-700 hover:text-forest-600'
              }
            `}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

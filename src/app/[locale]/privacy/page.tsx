import { getTranslations } from 'next-intl/server';
import { PRIVACY_EN } from '@/content/legal/privacy-en';
import { PRIVACY_ES } from '@/content/legal/privacy-es';
import LegalDocument from '@/components/LegalDocument';

type Props = {
  params: { locale: string };
};

export const metadata = {
  title: 'Privacy Policy — KLEERO',
  description: 'How KLEERO handles your data.',
};

export default function PrivacyPage({ params: { locale } }: Props) {
  const content = locale === 'es' ? PRIVACY_ES : PRIVACY_EN;
  return <LegalDocument markdown={content} />;
}

import LegalDocument from '@/components/LegalDocument';
import { TERMS_EN } from '@/content/legal/terms-en';
import { TERMS_ES } from '@/content/legal/terms-es';

type Props = {
  params: { locale: string };
};

export const metadata = {
  title: 'Terms of Service — KLEERO',
  description: 'KLEERO Terms of Service.',
};

export default function TermsPage({ params: { locale } }: Props) {
  const content = locale === 'es' ? TERMS_ES : TERMS_EN;
  return <LegalDocument markdown={content} />;
}

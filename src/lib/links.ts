// Centralized bot links with UTM tracking.
// Source of truth — change in one place if numbers/usernames change.

const TELEGRAM_BOT = 'kleero_demo_bot';
const WHATSAPP_NUMBER = '447348946638';

export type LinkSource =
  | 'landing_hero'
  | 'landing_cta'
  | 'landing_compare'
  | 'landing_referral';

export function telegramLink(source: LinkSource): string {
  return `https://t.me/${TELEGRAM_BOT}?start=${source}`;
}

export function whatsappLink(source: LinkSource): string {
  const text = encodeURIComponent(`Hi KLEERO ${source}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

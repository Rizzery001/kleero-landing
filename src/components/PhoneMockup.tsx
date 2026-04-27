type Variant = 'menu' | 'receipt' | 'savings';
type Size = 'sm' | 'md';
type Lang = 'en' | 'es';

type Props = {
  variant: Variant;
  size?: Size;
  lang?: Lang;
};

const NATIVE_W = 600;
const NATIVE_H = 1282;

export default function PhoneMockup({ variant, size = 'md', lang = 'en' }: Props) {
  const isLg = size === 'md';
  const displayW = isLg ? 280 : 220;
  const displayH = Math.round((displayW * NATIVE_H) / NATIVE_W);

  const altText = {
    menu: lang === 'es'
      ? 'Menú principal del bot KLEERO en WhatsApp'
      : 'KLEERO bot main menu in WhatsApp',
    receipt: lang === 'es'
      ? 'KLEERO reconociendo un recibo de mayoreo en WhatsApp'
      : 'KLEERO recognizing a wholesale receipt in WhatsApp',
    savings: lang === 'es'
      ? 'KLEERO mostrando ahorros potenciales en WhatsApp'
      : 'KLEERO showing potential savings in WhatsApp',
  }[variant];

  return (
    <img
      src={`/phone-mockups/phone-${variant}-${lang}.webp`}
      alt={altText}
      width={displayW}
      height={displayH}
      className="select-none drop-shadow-2xl"
      draggable={false}
      loading="eager"
    />
  );
}

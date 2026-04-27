import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-20 pt-5 sm:pt-6">
      <div className="container-x flex items-center justify-between">
        <Logo variant="light" />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

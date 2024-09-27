import IconGift from '@/assets/icons/IconGift.svg';
import TGLogo from '@/assets/icons/telegramLogo.svg';
import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { NavItem } from '../types/navigation.type';
import { Logo } from './Logo.component';
import NavLink from './NavLink.component';

const navItems: NavItem[] = [
  {
    label: 'about_us',
    path: '/why-us',
  },
  {
    label: 'pricing',
    path: '/pricing',
  },
  {
    label: 'faq',
    path: '/faq',
  },
  {
    label: 'level_assessment',
    path: '/check-english-level-online',
    icon: (
      <>
        +<IconGift />
      </>
    ),
  },
];

export const NavgationMenu = () => {
  const t = useTranslations('header');

  return (
    <div className="pb-24 flex justify-center">
      <header className="h-header fixed flex layout items-center justify-between">
        <Link href={'/'}>
          <Logo />
        </Link>
        <ul className="flex gap-10 xl:gap-52">
          {navItems.map(({ label, path, icon }) => (
            <li key={path}>
              <NavLink label={t(label)} path={path} icon={icon} />
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <Link href={'/'}>
            <TGLogo className="h-icon" />
          </Link>
          <LocaleSwitcher />
        </div>
      </header>
    </div>
  );
};

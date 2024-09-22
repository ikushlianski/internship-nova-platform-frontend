import IconGift from '@/assets/icons/IconGift.svg';
import TGLogo from '@/assets/icons/telegramLogo.svg';
import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { NavItem } from '../types/navigation.type';
import { Logo } from './Logo';
import NavLink from './NavLink';

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
    <div className="pb-[100px]">
      <header className="bg-white w-full h-[100px] fixed flex px-10 lg:px-[5vw] xl:px-[13vw] items-center justify-between text-sans ">
        <Link href={'/'}>
          <Logo />
        </Link>
        <ul className="flex gap-4 lg:gap-10 xl:gap-[52px]">
          {navItems.map(({ label, path, icon }) => (
            <li key={path}>
              <NavLink label={t(label)} path={path} icon={icon} />
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <Link href={'/'}>
            <TGLogo />
          </Link>
          <LocaleSwitcher />
        </div>
      </header>
    </div>
  );
};

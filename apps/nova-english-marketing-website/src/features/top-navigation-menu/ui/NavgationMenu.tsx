import IconGift from '@/assets/icons/IconGift.svg';
import Link from 'next/link';
import { NavItem, NavPath, NavRoutes } from '../types/navigation.type';
import { Logo } from './Logo';
import NavLink from './NavLink';

const navItems: NavItem[] = [
  {
    label: 'Почему мы',
    path: NavPath[NavRoutes.WHY_US],
  },
  {
    label: 'Цена',
    path: NavPath[NavRoutes.PRICING],
  },
  {
    label: 'FAQ',
    path: NavPath[NavRoutes.FAQ],
  },
  {
    label: 'Онлайн тест',
    path: NavPath[NavRoutes.CHECK_ENGLISH_LEVEL],
    icon: (
      <>
        +<IconGift />
      </>
    ),
  },
];

export const NavgationMenu = () => {
  return (
    <div className="pb-[100px]">
      <header className="bg-white w-full h-[100px] fixed flex px-[250px] items-center justify-between text-sans">
        <Link href={NavPath.main}>
          <Logo />
        </Link>
        <ul className="flex gap-[52px]">
          {navItems.map(({ label, path, icon }) => (
            <li key={path}>
              <NavLink label={label} path={path} icon={icon} />
            </li>
          ))}
        </ul>

        {/*tg & lang switcher placeholders  */}
        <div>
          <span>tg icon </span>
          <span>lang</span>
        </div>
      </header>
    </div>
  );
};

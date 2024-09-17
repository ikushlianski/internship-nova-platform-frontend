import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import React from 'react';
import MobileMenu from '../../../features/mobileMenu/ui/mobileMenu.component';
const Header: React.FC = () => {
  return (
    <header className="flex">
      <nav className="flex gap-12">
        <LocaleSwitcher />
      </nav>
      <div className="block md:hidden">
        <MobileMenu />
      </div>{' '}
    </header>
  );
};

export default Header;

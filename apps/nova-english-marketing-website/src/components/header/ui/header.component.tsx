import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="flex gap-12">
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Header;

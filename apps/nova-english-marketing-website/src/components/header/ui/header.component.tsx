import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="layout">
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Header;

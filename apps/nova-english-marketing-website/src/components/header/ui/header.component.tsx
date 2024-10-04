import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import React from 'react';
import { SsrStageBanner } from '@/shared/ssrStageBanner.component';

const Header: React.FC = () => {
  return (
    <header>
      {process.env.NEXT_PUBLIC_VITE_APP_ENV !== 'prod' && <SsrStageBanner />}
      <nav className="layout">
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Header;

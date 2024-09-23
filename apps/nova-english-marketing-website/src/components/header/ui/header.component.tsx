import LocaleSwitcher from '@/features/LangSwitcher/ui/LocaleSwitcher.component';
import React from 'react';
import { SsrStageBanner } from '@/shared/ssrStageBanner.component';

const Header: React.FC = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_VITE_APP_ENV !== 'prod' && <SsrStageBanner />}
      <header>
        <nav className="flex gap-12">
          <LocaleSwitcher />
        </nav>
      </header>
    </>
  );
};

export default Header;

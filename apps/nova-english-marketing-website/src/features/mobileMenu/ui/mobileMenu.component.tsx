'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/Button/Button';
import MobileNavigation from './mobileNavigation.component';

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Button
        onClick={toggleMenu}
        variant="ghost"
        size="default"
        className={`focus:outline-none w-11 h-11 rounded-full flex items-center justify-center relative z-[1000] ${
          isMenuOpen ? 'bg-[rgba(233,233,233,1)]' : 'bg-transparent'
        }`}
      >
        {!isMenuOpen ? (
          <div className="flex flex-col justify-between h-[18px]">
            <div className="w-6 h-0.5 bg-[hsl(var(--blue500))]"></div>
            <div className="w-6 h-0.5 bg-[hsl(var(--blue500))]"></div>
            <div className="w-6 h-0.5 bg-[hsl(var(--blue500))]"></div>
          </div>
        ) : (
          <div className="relative w-8 h-8 z-[1001]">
            <div className="absolute w-10 h-0.5 bg-[hsl(var(--white-foreground))] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-10 h-0.5 bg-[hsl(var(--white-foreground))] -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        )}
      </Button>
      {isMenuOpen && <MobileNavigation toggleMenu={toggleMenu} />}
    </div>
  );
};

export default MobileMenu;

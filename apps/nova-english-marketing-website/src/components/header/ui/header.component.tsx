import React from 'react';
import MobileMenu from '../../../features/mobileMenu/ui/mobileMenu.component';
const Header: React.FC = () => {
  return (
    <header>
      <nav>{/* Navigation links */}</nav>
      <MobileMenu />
    </header>
  );
};

export default Header;

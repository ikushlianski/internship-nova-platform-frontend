import React from 'react';
import Link from 'next/link';
import { MobileNavigationProps } from '../types/mobileNavigation.type';
import { useNavLinks } from '../logic/navLinks.logic';

const MobileNavigation: React.FC<MobileNavigationProps> = ({ toggleMenu }) => {
  const navLinks = useNavLinks();

  return (
    <nav
      className="fixed inset-0 bg-[hsl(var(--background))] z-1150 flex flex-col items-center justify-start mt-[80px]"
      aria-label="Mobile navigation"
    >
      <div className="bg-white rounded-lg shadow-[0_6px_12.5px_rgba(72,123,255,0.2)] w-full max-w-[768px]">
        <ul className="space-y-4 text-center w-full p-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg font-medium leading-6 ${
                  link.highlight ? 'text-[hsl(var(--blue500))]' : 'text-[hsl(var(--foreground))]'
                }`}
                aria-label={link.label}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;

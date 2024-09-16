'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  label?: string;
  path: string;
  icon?: ReactNode;
}

const NavLink = ({ label, path, icon }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link href={path} className={`${isActive ? 'text-[#0092fc]' : ''} text-2xl`}>
      <span className="flex items-center">
        {label}
        {icon}
      </span>
    </Link>
  );
};

export default NavLink;

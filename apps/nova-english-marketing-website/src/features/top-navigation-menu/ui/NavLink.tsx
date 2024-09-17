'use client';

import { Link, StaticPathnames } from '@/i18n/routing';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  label?: string;
  path: StaticPathnames;
  icon?: ReactNode;
}

const NavLink = ({ label, path, icon }: NavLinkProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
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

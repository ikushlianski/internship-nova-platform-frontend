'use client';
import { usePathname } from 'next/navigation';
import SideMenu from '../../features/sideMenu/ui/sideMenu/SideMenu';
import { ReactNode } from 'react';

export default function SideMenuLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const noMenuRoutes = ['/login', '/logout'];
  return (
    <div className="flex">
      {!noMenuRoutes.includes(pathname) && <SideMenu />}
      {children}
    </div>
  );
}

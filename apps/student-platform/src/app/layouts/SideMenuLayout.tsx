"use client";
import { usePathname } from "next/navigation";
import SideMenu from "@featuressideMenu/ui/SideMenu";
import { ReactNode } from "react";

export default function SideMenuLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const noMenuRoutes = ["/login", "/logout"];
  return <>{!noMenuRoutes.includes(pathname) && <SideMenu />}</>;
}

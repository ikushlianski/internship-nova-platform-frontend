import { ReactNode } from 'react';

export enum NavRoutes {
  MAIN = 'main',
  WHY_US = 'why_us',
  FAQ = 'faq',
  PRICING = 'pricing',
  CHECK_ENGLISH_LEVEL = 'check_english_level_online',
}

export const NavPath: Record<NavRoutes, string> = {
  [NavRoutes.MAIN]: '/',
  [NavRoutes.WHY_US]: '/why-us',
  [NavRoutes.FAQ]: '/faq',
  [NavRoutes.PRICING]: '/pricing',
  [NavRoutes.CHECK_ENGLISH_LEVEL]: '/check-english-level-online',
};

export interface NavItem {
  label: string;
  path: string;
  icon?: ReactNode;
}

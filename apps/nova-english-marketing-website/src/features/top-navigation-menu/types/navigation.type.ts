import { StaticPathnames } from '@/i18n/routing';
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: StaticPathnames;
  icon?: ReactNode;
}

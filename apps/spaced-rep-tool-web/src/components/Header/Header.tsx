import * as React from 'react';
import { LanguageSwitcher } from '../../../../../packages/ui/src/LangugeSwitcher/LangugeSwitcher.component';
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="flex items-end">
      <LanguageSwitcher />
    </div>
  );
}

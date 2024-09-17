'use client';

import { ReactNode } from 'react';
import { useLocaleSwitcher } from '../logic/useLocaleSwitcher';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const { isPending, handleLocaleChange } = useLocaleSwitcher();

  return (
    <label>
      <p className="sr-only">{label}</p>
      <select
        className="flex items-center justify-center bg-transparent p-2 cursor-pointer"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleLocaleChange}
      >
        {children}
      </select>
    </label>
  );
}

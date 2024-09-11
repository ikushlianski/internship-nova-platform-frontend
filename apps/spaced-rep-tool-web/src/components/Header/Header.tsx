import { LanguageSwitcher } from '@repo/ui/languageSwitcher';

export interface HeaderProps {}

export function Header() {
  return (
    <div className="flex items-end">
      <LanguageSwitcher{...props} />
    </div>
  );
}

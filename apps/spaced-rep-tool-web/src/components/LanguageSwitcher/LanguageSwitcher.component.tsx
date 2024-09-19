import * as React from 'react';
import { LANGUAGES } from './langs';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export interface LanguageSwitcher {}

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;

    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div>
      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

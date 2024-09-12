/* eslint-disable no-redeclare */
import * as React from 'react';
import { LANGUAGES } from './languages';

export interface LanguageSwitcher {}

export function LanguageSwitcher() {
  return (
    <>
      <select defaultValue={'en'}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

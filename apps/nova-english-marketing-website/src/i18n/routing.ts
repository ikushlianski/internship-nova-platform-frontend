import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ru'];

export const pathnames = {
  '/': '/',
  '/check-english-level-online': '/check-english-level-online',
  '/check-english-level-online/online-test': '/check-english-level-online/online-test',
};

export const routing = defineRouting({
  locales,
  defaultLocale: 'ru',
  domains: [
    {
      domain: 'novaenglish.by',
      defaultLocale: 'ru',
      locales,
    },
    {
      domain: 'novaenglish.ru',
      defaultLocale: 'ru',
      locales,
    },

    {
      domain: 'novaenglish.com',
      defaultLocale: 'en',
      locales,
    },
    {
      domain: 'localhost',
      defaultLocale: 'en',
      locales,
    },
  ],
  pathnames,
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);

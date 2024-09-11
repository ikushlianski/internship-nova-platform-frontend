import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ru'];

export const pathnames = {
  '/': '/',
  '/class/[class-title]': 'class/{class-title}',
};

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
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

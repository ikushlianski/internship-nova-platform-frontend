import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export type StaticPathnames = '/' | '/why-us' | '/faq' | '/pricing' | '/check-english-level-online';
export type DynamicPathnames = '/class/[classId]';

export const pathnames: Record<StaticPathnames | DynamicPathnames, string> = {
  '/': '/',
  '/why-us': '/why-us',
  '/faq': '/faq',
  '/pricing': '/pricing',
  '/check-english-level-online': '/check-english-level-online',
  '/class/[classId]': '/class/[classId]',
};

export const locales = ['en', 'ru'];

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
      defaultLocale: 'ru',
      locales,
    },
  ],
  pathnames,
});

export type Pathnames = StaticPathnames | DynamicPathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);

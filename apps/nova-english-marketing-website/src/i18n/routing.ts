import { createLocalizedPathnamesNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const locales = ["en", "ru"]

export const pathnames = {
	"/": "/",
	"/english-for-tech-b1-b2-level": "/english-for-tech-b1-b2-level"
}

export const routing = defineRouting({
	locales,
	defaultLocale: "en",
	domains: [
		{
			domain: "novaenglish.by",
			defaultLocale: "ru",
			locales: ["ru", "en"]
		},
		{
			domain: "novaenglish.ru",
			defaultLocale: "ru",
			locales: ["ru", "en"]
		},

		{
			domain: "novaenglish.com",
			defaultLocale: "en",
			locales: ["ru", "en"]
		},
		{
			domain: "localhost",
			defaultLocale: "en",
			locales: ["ru", "en"]
		}
	],
	pathnames
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createLocalizedPathnamesNavigation(routing)

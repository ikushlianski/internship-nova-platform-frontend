import { LocalePrefix, Pathnames } from "next-intl/routing"

export const locales = ["en", "ru"]

export type Locale = typeof locales

export const pathnames: Pathnames<Locale> = {
	"/": "/",
	"/english-for-tech-b1-b2-level": "/english-for-tech-b1-b2-level"
}

export const localePrefix: LocalePrefix<Locale> = "always"

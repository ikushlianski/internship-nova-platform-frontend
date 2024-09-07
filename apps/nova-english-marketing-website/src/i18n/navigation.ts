import { localePrefix, locales, pathnames } from "@/i18n/config"
import { createLocalizedPathnamesNavigation } from "next-intl/navigation"

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })

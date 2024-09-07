import { locales } from "@/i18n/routing"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { Manrope } from "next/font/google"
import { ReactNode } from "react"
import "./globals.css"

type Props = {
	children: ReactNode
	params: { locale: string }
}

const manrope = Manrope({
	subsets: ["latin", "cyrillic"],
	variable: "--font-manrope",
	weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
	params: { locale }
}: Omit<Props, "children">) {
	const t = await getTranslations({ locale, namespace: "locale_layout" })

	return {
		title: t("title"),
		description: t("description")
	}
}

export default function RootLayout({ children, params: { locale } }: Props) {
	unstable_setRequestLocale(locale)

	return (
		<html lang={locale}>
			<body className={manrope.className}>{children}</body>
		</html>
	)
}

import Header from "@/components/header/ui/header.component"
import { routing } from "@/i18n/routing"
import { NextIntlClientProvider } from "next-intl"
import {
	getMessages,
	getTranslations,
	unstable_setRequestLocale
} from "next-intl/server"
import { ReactNode } from "react"

type Props = {
	children: ReactNode
	params: { locale: string }
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
	params: { locale }
}: Omit<Props, "children">) {
	const t = await getTranslations({ locale, namespace: "locale_layout" })

	return {
		title: t("title")
	}
}

export default async function LocaleLayout({
	children,
	params: { locale }
}: Props) {
	// Enable static rendering
	unstable_setRequestLocale(locale)

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages()

	return (
		<html
			className="h-full"
			lang={locale}
		>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Header />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

import Header from "@/components/header/ui/header.component"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { ReactNode } from "react"

type Props = {
	children: ReactNode
}

export default async function LocaleLayout({ children }: Props) {
	const messages = await getMessages()

	return (
		<main>
			<NextIntlClientProvider messages={messages}>
				<Header />
				{children}
			</NextIntlClientProvider>
		</main>
	)
}

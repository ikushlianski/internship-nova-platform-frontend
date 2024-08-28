import { NavgationMenu } from "@/features/top-navigation-menu/ui/NavgationMenu"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import Footer from "../components/footer/ui/footer.components"
import "./globals.css"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}
const manrope = Manrope({
	subsets: ["latin", "cyrillic"],
	variable: "--font-manrope",
	weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={manrope.className}>
				<NavgationMenu />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

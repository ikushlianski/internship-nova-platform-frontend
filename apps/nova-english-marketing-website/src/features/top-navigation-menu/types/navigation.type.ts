import { ReactNode } from "react"

export enum NavRoutes {
	MAIN = "main",
	WHY_US = "why_us",
	FAQ = "faq",
	PRICING = "pricing",
	ENGLISH_ASSESSMENT = "english_level_assessment"
}

export const NavPath: Record<NavRoutes, string> = {
	// Temporary placeholder for main route
	[NavRoutes.MAIN]: "/english-for-tech-b1-b2-level",
	[NavRoutes.WHY_US]: "/why-us",
	[NavRoutes.FAQ]: "/faq",
	[NavRoutes.PRICING]: "/pricing",
	[NavRoutes.ENGLISH_ASSESSMENT]: "/english-level-assessment"
}

export interface NavItem {
	label: string
	path: string
	icon?: ReactNode
}

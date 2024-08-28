export enum NavRoutes {
	MAIN = "main",
	WHY_US = "why_us",
	FAQ = "faq",
	PRICING = "pricing",
	ONLINE_TEST = "online_test"
}

export const NavPath: Record<NavRoutes, string> = {
	// Temporary placeholder for main route
	[NavRoutes.MAIN]: "/english-for-tech-b1-b2-level",
	[NavRoutes.WHY_US]: "/why-us",
	[NavRoutes.FAQ]: "/faq",
	[NavRoutes.PRICING]: "/pricing",
	[NavRoutes.ONLINE_TEST]: "/online-test"
}

export interface NavItem {
	label: string
	path: string
}

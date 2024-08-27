'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
	label: string
	path: string
}

const NavLink = ({ label, path }: NavLinkProps) => {
	const pathname = usePathname()

	const isActive = pathname === path

	return (
		<Link
			href={path}
			className={`${isActive ? 'text-primary-blue' : ''} text-2xl`}
		>
			{label}
		</Link>
	)
}

export default NavLink

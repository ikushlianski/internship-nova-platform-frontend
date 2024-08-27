import Link from 'next/link'
import { Logo } from '../../../../../../packages/ui/src/logo/Logo'
import { NavItem, NavPath, NavRoutes } from '../types/navigation.type'
import NavLink from './NavLink'

const navItems: NavItem[] = [
	{
		label: 'Почему мы',
		path: NavPath[NavRoutes.WHY_US]
	},
	{
		label: 'Цена',
		path: NavPath[NavRoutes.PRICE]
	},
	{
		label: 'FAQ',
		path: NavPath[NavRoutes.FAQ]
	},
	{
		label: 'Онлайн тест',
		path: NavPath[NavRoutes.ONLINE_TEST]
	}
]

export const NavgationMenu = () => {
	return (
		<div className='pb-[100px]'>
			<header className='bg-white w-full h-[100px] fixed flex px-[250px] items-center justify-between text-sans'>
				<Link href={NavPath.main}>
					<Logo />
				</Link>

				<ul className='flex gap-[52px]'>
					{navItems.map(({ label, path }) => (
						<li key={path}>
							<NavLink
								label={label}
								path={path}
							/>
						</li>
					))}
				</ul>

				{/*tg & lang switcher placeholders  */}
				<div>
					<span>tg icon </span>
					<span>lang</span>
				</div>
			</header>
		</div>
	)
}

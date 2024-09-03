"use client"

import { usePathname, useRouter } from "next/navigation"

export default function LangSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const locales = ["en", "ru"] // Замените на список ваших языков

	const changeLanguage = (newLocale: string) => {
		const segments = pathname.split("/").filter(Boolean) // Разбиваем путь на сегменты
		segments[0] = newLocale // Заменяем первый сегмент на новый язык
		const newPath = `/${segments.join("/")}` // Создаем новый путь
		router.push(newPath) // Перенаправляем на новый путь с выбранной локалью
	}

	return (
		<div>
			{locales.map((loc) => (
				<button
					key={loc}
					onClick={() => changeLanguage(loc)}
					disabled={pathname.startsWith(`/${loc}`)}
				>
					{loc}
				</button>
			))}
		</div>
	)
}

import { usePathname, useRouter } from "@/i18n/routing"
import { useParams } from "next/navigation"
import { ChangeEvent, useTransition } from "react"

export function useLocaleSwitcher() {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const pathname = usePathname()
	const params = useParams()
	const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = event.target.value
		startTransition(() => {
			router.push(
				// @ts-ignore
				{ pathname, params },
				{ locale: nextLocale }
			)
		})
	}

	return {
		handleLocaleChange,
		isPending
	}
}

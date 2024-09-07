import { locales } from "@/i18n/config"
import { useLocale, useTranslations } from "next-intl"
import LocaleSwitcherSelect from "./LocaleSwitcherSelect.component"

export default function LocaleSwitcher() {
	const t = useTranslations("locale_switcher")
	const locale = useLocale()

	return (
		<LocaleSwitcherSelect
			defaultValue={locale}
			label={t("label")}
		>
			{locales.map((cur) => (
				<option
					key={cur}
					value={cur}
				>
					{t("locale", { locale: cur })}
				</option>
			))}
		</LocaleSwitcherSelect>
	)
}

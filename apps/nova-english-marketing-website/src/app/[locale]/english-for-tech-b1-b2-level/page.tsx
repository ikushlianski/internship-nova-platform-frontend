import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

type Props = {
	params: { locale: string }
}

export default function Page({ params: { locale } }: Props) {
	unstable_setRequestLocale(locale)

	const t = useTranslations("temporary")
	return (
		<div>
			<h1>{t("b1_b2_level_course")}</h1>
		</div>
	)
}

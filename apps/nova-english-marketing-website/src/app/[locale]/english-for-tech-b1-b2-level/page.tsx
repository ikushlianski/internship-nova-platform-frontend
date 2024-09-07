import { useTranslations } from "next-intl"

export default function Page() {
	const t = useTranslations("temporary")
	return (
		<div>
			<h1>{t("b1_b2_level_course")}</h1>
		</div>
	)
}

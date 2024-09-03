import { useTranslations } from "next-intl"

export default function Page() {
	const t = useTranslations("temporary")
	return (
		<main>
			<div>
				<h1>{t("b1_b2_level_course")}</h1>
			</div>
			<section>
				<h2>{t("hero_section")}</h2>
			</section>
			<section>
				<h2>{t("path_section")}</h2>
			</section>
			<section>
				<h2>{t("course_section")}</h2>
			</section>
			<section>
				<h2>{t("teachers_section")}</h2>
			</section>
			<section>
				<h2>{t("who_us_section")}</h2>
			</section>
			<section>
				<h2>{t("trial_lesson_section")}</h2>
			</section>
			<section>
				<h2>{t("program_of_course_section")}</h2>
			</section>
			<section>
				<h2>{t("price_section")}</h2>
			</section>
			<section>
				<h2>{t("test_section")}</h2>
			</section>
			<section>
				<h2>{t("contact_form_section")}</h2>
			</section>
			<section>
				<h2>{t("faq_section")}</h2>
			</section>
			<section>
				<h2>{t("support_common_section")}</h2>
			</section>
			<section>
				<h2>{t("common_section")}</h2>
			</section>
		</main>
	)
}

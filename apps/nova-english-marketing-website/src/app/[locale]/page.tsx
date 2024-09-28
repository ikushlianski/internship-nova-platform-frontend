import Assessment from '@/features/Assessment/Assessment';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('temporary');

  return (
    <main>
      <section>
        <h2>{t('hero_section')}</h2>
      </section>
      <section>
        <h2>{t('path_section')}</h2>
      </section>
      <section>
        <h2>{t('course_section')}</h2>
      </section>
      <section>
        <h2>{t('teachers_section')}</h2>
      </section>
      <section>
        <h2>{t('who_us_section')}</h2>
      </section>
      <section>
        <h2>{t('trial_lesson_section')}</h2>
      </section>
      <section>
        <h2>{t('program_of_course_section')}</h2>
      </section>
      <section>
        <h2>{t('price_section')}</h2>
      </section>
      <Assessment />
      <section>
        <h2>{t('contact_form_section')}</h2>
      </section>
      <section>
        <h2>{t('faq_section')}</h2>
      </section>
      <section>
        <h2>{t('support_common_section')}</h2>
      </section>
      <section>
        <h2>{t('common_section')}</h2>
      </section>
    </main>
  );
}

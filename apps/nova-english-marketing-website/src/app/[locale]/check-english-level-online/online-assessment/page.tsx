'use client';

import { AssessmentForm } from '@/features/AssessmentForm/ui/AssessmentForm.component';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function OnlineTestPage() {
  const t = useTranslations('test_page.form');

  return (
    <section className="md:px-10 2xl:px-[13vw] py-10 md:py-20 flex justify-center gap-16 bg-[radial-gradient(circle,_rgba(183,225,255,1)_0%,_rgba(230,245,255,1)_100%)] rounded-2xl mb-24">
      <div className="p-4 md:p-10 2xl:p-20 rounded-[20px] bg-white-foreground flex flex-col">
        <h1 className="text-[#0092FC] text-2xl md:text-5xl font-semibold mb-2 md:mb-5">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-4 md:mb-10">{t('description')}</p>
        <AssessmentForm />
        <p className="self-center mt-5 text-center text-sm md:text-base">
          <span className="text-[#B8B8B8]"> {t('privacy_policy.title')}</span>
          <Link href={'/'}> {t('privacy_policy.link')}</Link>
        </p>
      </div>
    </section>
  );
}

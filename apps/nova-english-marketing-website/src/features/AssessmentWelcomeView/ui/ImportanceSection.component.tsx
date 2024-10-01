'use client';

import { useTranslations } from 'next-intl';
import ImportanceCard from './ImportanceCard.component';
import CheckIcon from '/public/assets/icons/checkIcon.svg';
import TimeIcon from '/public/assets/icons/timeIcon.svg';

export default function ImportanceSection() {
  const t = useTranslations('test_page.importance_section');

  return (
    <section className="flex flex-col gap-4 lg:gap-10 items-center">
      <h2 className="font-semibold text-xl md:text-3xl xl:text-5xl relative inline-block before:absolute before:left-[-15px] before:right-[-15px] before:bottom-[-5px] before:h-[15px] before:bg-[#C3E6FF] before:rounded-full before:-z-10">
        {t('title')}
      </h2>
      <div className="flex gap-5 flex-col 2xl:flex-row">
        <ImportanceCard
          icon={<CheckIcon />}
          title={t('cards.assessment_card.title')}
          description={t('cards.assessment_card.description')}
        />
        <ImportanceCard
          icon={<CheckIcon />}
          title={t('cards.recommendation_card.title')}
          description={t('cards.recommendation_card.description')}
        />
        <ImportanceCard
          icon={<TimeIcon />}
          title={t('cards.time_card.title')}
          description={t('cards.time_card.description')}
        />
      </div>
    </section>
  );
}

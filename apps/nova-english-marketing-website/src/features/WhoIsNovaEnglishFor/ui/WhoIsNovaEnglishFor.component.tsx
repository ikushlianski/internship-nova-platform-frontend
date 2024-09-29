import Image from 'next/image';
import { useTranslations } from 'next-intl';
import WhoIsNovaEnglishForCard from './WhoIsEnglishForCard';

const WhoIsNovaEnglishFor = () => {
  const t = useTranslations('course_for');
  return (
    <section className="px-4 py-10 custom-mx">
      <div className="max-w-[1420px] mx-auto mt-10 lg:mt-20">
        <div className="flex flex-col justify-center items-center ">
          <div className="relative mb-8">
            <h1 className="text-[#3F3E3E] font-bold text-2xl sm:text-4xl lg:text-6xl leading-tight z-10 relative text-center">
              {t('title')}
            </h1>
            <Image
              src="./assets/icons/BlueLine.svg"
              alt="BlueLine"
              width={538}
              height={25}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-10">
            <WhoIsNovaEnglishForCard
              image={'./assets/icons/feet-run-vertical-diagram.svg'}
              titleTranslation={t('audience.it_specialists')}
              desrTranslation={t('description.it_advantage')}
            />
            <WhoIsNovaEnglishForCard
              image={'./assets/icons/IT_specialist_in_a_videoconference.svg'}
              titleTranslation={t('audience.managers')}
              desrTranslation={t('description.manager_communication')}
            />
            <WhoIsNovaEnglishForCard
              image={'./assets/icons/woman-freelancer-palm.svg'}
              titleTranslation={t('audience.freelancers')}
              desrTranslation={t('description.freelancer_skills')}
            />
            <WhoIsNovaEnglishForCard
              image={'./assets/icons/sitting-in-front-of-book.svg'}
              titleTranslation={t('audience.junior_specialists')}
              desrTranslation={t('description.junior_opportunities')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsNovaEnglishFor;

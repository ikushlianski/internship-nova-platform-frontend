import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WhyUsSection = () => {
  const t = useTranslations('about');

  const textConfigure = (words: string, start: number, end?: number) => {
    return words.split(' ').slice(start, end).join(' ');
  };

  return (
    <section className="px-4 py-10 custom-mx">
      <div className="max-w-[1420px] mx-auto mt-10 lg:mt-20">
        <div className="relative mb-8">
          <h1 className="text-[#3F3E3E] font-bold text-2xl sm:text-4xl lg:text-6xl leading-tight z-10 relative text-center">
            {t('title')}
          </h1>
          <Image
            src="./assets/icons/BlueLine.svg"
            alt="BlueLine"
            width={348}
            height={25}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-10">
          <div className="flex flex-col w-full sm:w-[460px]  sm:items-center">
            <div className="mb-6">
              <Image
                src="./assets/icons/woman-at-computer-flad-and-town-background.svg"
                alt="woman-at-computer"
                width={280}
                height={280}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight text-center">
                <span className="text-[#3f3e3e]">
                  {textConfigure(t('features.learning_in_english'), 0, 1)}
                </span>{' '}
                {textConfigure(t('features.learning_in_english'), 1)}
              </h2>
              <p className="font-medium text-sm sm:text-[24px] leading-snug text-center">
                {t('features.no_worries')}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-[460px]  sm:items-center">
            <div className="mb-6">
              <Image
                src="./assets/icons/man-paper-airplane.svg"
                alt="man-paper-airplane"
                width={280}
                height={280}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight text-center">
                {textConfigure(t('features.interactive_lessons'), 0, 1)}{' '}
                <span className="text-[#3f3e3e]">
                  {textConfigure(t('features.interactive_lessons'), 1)}
                </span>
              </h2>
              <p className="font-medium text-sm sm:text-[24px] leading-snug text-center">
                {t('features.interactive_situations')}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-[460px]  sm:items-center">
            <div className="mb-6">
              <Image
                src="./assets/icons/man-and-woman-standing-near-board.svg"
                alt="man-and-woman"
                width={280}
                height={280}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight text-center">
                <span className="text-[#3f3e3e]">
                  {textConfigure(t('features.it_teachers'), 0, 1)}
                </span>{' '}
                {textConfigure(t('features.it_teachers'), 1)}
              </h2>
              <p className="font-medium text-sm sm:text-[24px] leading-snug text-center">
                {t('features.teachers_experience')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

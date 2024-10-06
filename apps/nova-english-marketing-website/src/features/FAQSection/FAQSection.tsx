import Image from 'next/image';
import { useTranslations } from 'next-intl';

const FAQSection = () => {
  const t = useTranslations('faq');

  return (
    <section className="px-4 py-10 custom-mx">
      <div className="max-w-[1420px] mx-auto mt-10 lg:mt-20">
        <div className="relative mb-8">
          <h1 className="text-[#3F3E3E] font-bold text-2xl sm:text-4xl lg:text-6xl leading-tight z-10 relative text-center">
            {t('title')}
          </h1>
          <Image
            src="./assets/icons/title-line_FAQ.svg"
            alt="title-line_FAQ"
            width={136}
            height={25}
            style={{ strokeWidth: 0 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex ">
            <p>
              <span className="mp-6">/01 </span>
              {t('questions.lesson_duration')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

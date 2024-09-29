import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WhyUsSection = () => {
  const t = useTranslations('about');

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
      </div>
    </section>
  );
};

export default WhyUsSection;

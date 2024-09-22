import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
            {/* Карточка 1 */}
            <div className="flex flex-col w-full sm:w-[340px]  sm:items-start">
              <div className="mb-6">
                <Image
                  src="./assets/icons/feet-run-vertical-diagram.svg"
                  alt="person"
                  width={340}
                  height={220}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight">
                  {t('audience.it_specialists')}
                </h2>
                <p className="font-medium text-sm sm:text-[24px] leading-snug">
                  {t('description.it_advantage')}
                </p>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="flex flex-col w-full sm:w-[340px] items-center sm:items-start">
              <div className="mb-6">
                <Image
                  src="./assets/icons/IT_specialist_in_a_videoconference.svg"
                  alt="person"
                  width={340}
                  height={220}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight">
                  {t('audience.managers')}
                </h2>
                <p className="font-medium text-sm sm:text-[24px] leading-snug">
                  {t('description.manager_communication')}
                </p>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="flex flex-col w-full sm:w-[340px] items-center sm:items-start">
              <div className="mb-6">
                <Image
                  src="./assets/icons/woman-freelancer-palm.svg"
                  alt="person"
                  width={340}
                  height={220}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight">
                  {t('audience.freelancers')}
                </h2>
                <p className="font-medium text-sm sm:text-[24px] leading-snug">
                  {t('description.freelancer_skills')}
                </p>
              </div>
            </div>

            {/* Карточка 4 */}
            <div className="flex flex-col w-full sm:w-[340px] items-center sm:items-start">
              <div className="mb-6">
                <Image
                  src="./assets/icons/sitting-in-front-of-book.svg"
                  alt="person"
                  width={340}
                  height={220}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-3 sm:mb-5 text-[#0092FC] font-semibold text-xl sm:text-[40px] leading-tight">
                  {t('audience.junior_specialists')}
                </h2>
                <p className="font-medium text-sm sm:text-[24px] leading-snug">
                  {t('description.junior_opportunities')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsNovaEnglishFor;

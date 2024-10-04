import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export const PathSection = () => {
  const t = useTranslations('path_section');
  const locale = useLocale();

  const getBlueLineWidth = () => {
    switch (locale) {
      case 'en':
        return 1150;
      case 'ru':
        return 1215;
      default:
        return 100;
    }
  };

  return (
    <section className="flex flex-col justify-items-center items-center">
      <div className="relative flex justify-center items-center">
        <h2 className="relative text-xl text-[#3F3E3E] text-center font-semibold text-[24px] sm:text-[32px] lg:text-[48px] w-[335px] sm:w-[688px] lg:w-[1215px]">
          {t.rich('title', {
            strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
          })}
        </h2>
        <Image
          src="/assets/images/blueLineBig.svg"
          alt="BlueLine"
          width={getBlueLineWidth()}
          height={25}
          className="absolute hidden sm:block top-[22px] -z-10 w-[335px] sm:w-[592px] lg:w-[1215px]"
        />
        <div className="absolute inset-x-0 bottom-[-15px] -z-10 hidden sm:flex md:hidden justify-center">
          <Image
            src="/assets/images/middle-line.svg"
            alt="Middle Line"
            width={190}
            height={10}
            className=""
          />
        </div>
        <div className="absolute inset-x-0 bottom-[-5px] -z-10 flex justify-center sm:hidden">
          <Image
            src="/assets/images/small-line.svg"
            alt="Small Line"
            width={150}
            height={10}
            className=""
          />
        </div>
      </div>

      {/* block 1 */}
      <div className="flex items-center justify-center flex-col sm:flex-row-reverse lg:flex-row   mt-[45px] gap-[20px] flex-wrap">
        {/* image  */}
        <div className="flex lg:order-2">
          <Image
            src="/assets/images/working-man.svg"
            alt="working-man"
            width={134}
            height={120}
            className="sm:w-[200px] sm:h-[178px] lg:w-[460px] lg:h-[412px]"
          />
        </div>
        {/* text  */}
        <div className="flex flex-col items-center justify-center  lg:order-1 gap-[20px] flex-wrap">
          <div className="flex items-start sm:flex-row sm:gap-[12px]">
            <Image
              src="/assets/images/wrong.svg"
              alt="wrong"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('challenges.missed_opportunities', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start sm:flex-row sm:gap-[12px]">
            <Image
              src="/assets/images/wrong.svg"
              alt="wrong"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('challenges.no_client_understanding', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start sm:flex-row sm:gap-[12px]">
            <Image
              src="/assets/images/wrong.svg"
              alt="wrong"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('challenges.slow_reaction', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/assets/images/arrow-1-desktop.svg"
        alt="arrow-1-desktop"
        width="543"
        height="518"
        className="hidden sm:block flex items-center sm:w-[291px] lg:w-[543px] mt-[8px] mb-[8px]"
      />
      <Image
        src="/assets/images/arrow-1-mobile.svg"
        alt="arrow-1-mobile"
        width="80"
        height="61"
        className="block sm:hidden flex items-center sm:w-[291px] lg:w-[543px] mt-[8px] mb-[8px]"
      />

      {/* block 2 */}
      <div className="flex flex-col sm:flex-row-reverse lg:flex-row items-center justify-center gap-[20px] flex-wrap">
        <div className="flex">
          <Image
            src="/assets/images/working-women.svg"
            alt="working-women"
            width={134}
            height={120}
            className="sm:w-[200px] sm:h-[178px] lg:w-[460px] lg:h-[412px]"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-start">
            <Image
              src="/assets/images/question.svg"
              alt="question"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('challenges.constant_dissatisfaction', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src="/assets/images/question.svg"
              alt="question"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('challenges.no_participation', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src="/assets/images/question.svg"
              alt="question"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('challenges.no_promotion', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/assets/images/arrow-2-desktop.svg"
        alt="arrow-2-desktop"
        width="80"
        height="61"
        className="hidden sm:block flex items-center sm:w-[330px] lg:w-[657px] mt-[8px] mb-[8px]"
      />
      <Image
        src="/assets/images/arrow-2-mobile.svg"
        alt="arrow-2-mobile"
        width="80"
        height="61"
        sizes="100vw"
        className="block sm:hidden flex items-center sm:w-[330px] lg:w-[657px] mt-[8px] mb-[8px]"
      />

      {/* block 3 */}
      <div className="flex flex-col sm:flex-row-reverse lg:flex-row items-center justify-center gap-[20px] flex-wrap">
        <div className="flex lg:order-2">
          <Image
            src="/assets/images/eng-level.svg"
            alt="english level"
            width={134}
            height={120}
            className="sm:w-[200px] sm:h-[178px] lg:w-[460px] lg:h-[412px]"
          />
        </div>
        <div className="flex flex-col lg:order-1 gap-[20px]">
          <div className="flex items-start">
            <Image
              src="/assets/images/correct.svg"
              alt="correct"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('benefits.advanced_communication', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src="/assets/images/correct.svg"
              alt="correct"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('benefits.native_phrases', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src="/assets/images/correct.svg"
              alt="correct"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('benefits.communication_skills', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src="/assets/images/correct.svg"
              alt="correct"
              width={20}
              height={20}
              className="mt-[5px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            <p className="text-[#3F3E3E] font-semibold ml-[12px] text-[20px] sm:text-[28px] lg:text-[40px] w-[307px] sm:w-[468px] lg:w-[940px] leading-[20px] sm:leading-[32px] lg:leading-[48px]">
              {t.rich('benefits.lots_of_practice', {
                strong: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
              })}
            </p>
          </div>
        </div>
      </div>

      <Link
        href={'/'}
        className="bg-blue-500 text-[24px] text-[#fff] uppercase font-bold py-2 px-12 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-[40px]"
      >
        {t('cta')}
      </Link>
    </section>
  );
};

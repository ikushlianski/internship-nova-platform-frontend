import AssessmentIcon from '@/assets/icons/AssessmentIcon';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Assessment() {
  const t = useTranslations('assessment');

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary lg:p-4">
      <div className="bg-white rounded-xl shadow-md lg:p-24 py-10 max-w-5xl mx-4 bg-blue-50 font-bold">
        <h1 className="text-blue-600  text-center text-2xl md:text-5xl shadow-sm font-bold lg:invisible">
          {t('title')}
        </h1>
        <h1 className="text-primary-foreground text-center text-2xl md:text-5xl font-semibold mb-4 shadow-sm">
          {t('intro.description')}
        </h1>
        <h2 className="text-primary-foreground text-lg mb-4">
          {t.rich('intro.benefits', {
            span: (chunks) => <span className="text-blue-500">{chunks}</span>,
          })}
        </h2>

        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-4">
            <h4 className="text-primary-foreground font-semibold mb-2 gap-3">
              {t('steps.how_it_works')}
            </h4>
            <ul className="list-disc pl-5 text-primary-foreground font-normal">
              {['take_the_test', 'get_instant_result', 'course_recommendation'].map((step) => (
                <li key={step}>{t.rich(`steps.${step}`, { b: (chunks) => <b>{chunks}</b> })}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-6 pt-6">{t('cta.test_now')}</p>
          </div>
          <div className="md:flex justify-center lg:ml-6 mt-4 lg:mt-0 min-w-72 min-h-72 p-4">
            <AssessmentIcon />
          </div>
        </div>

        <div className="flex justify-center mt-4 md:mt-0">
          <Link
            href={'/'}
            className="bg-blue-500 text-primary font-bold py-2 px-10 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {t('cta.start_test')} 🎁
          </Link>
        </div>
      </div>
    </div>
  );
}

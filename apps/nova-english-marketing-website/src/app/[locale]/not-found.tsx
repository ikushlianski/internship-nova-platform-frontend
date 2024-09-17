import NotFound from '@/features/NotFound/ui/NotFound.component';
import { useTranslations } from 'next-intl';

const NotFoundPage = () => {
  const t = useTranslations('not_found');

  return (
    <div className="pt-16 flex flex-col justify-center items-center gap-16">
      <h1 className="text-xl font-bold">{t('title')} </h1>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;

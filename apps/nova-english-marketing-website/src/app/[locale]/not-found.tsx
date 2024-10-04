import NotFound from '@/features/NotFound/ui/NotFound.component';
import { useTranslations } from 'next-intl';

const NotFoundPage = () => {
  const t = useTranslations('not_found');

  return (
    <div className="pt-16 flex flex-col justify-center items-center gap-16">
      <h3 className="text-center">{t('title')} </h3>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;

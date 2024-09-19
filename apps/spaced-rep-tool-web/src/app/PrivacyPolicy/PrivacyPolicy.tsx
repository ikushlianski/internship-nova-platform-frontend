import { useTranslation } from 'react-i18next';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" w-1200px h-600px">
        <div className="w-100% h-300px">
          <h1 className="text-center uppercase text-2xl">{t('title')}</h1>
        </div>
      </div>
    </>
  );
};

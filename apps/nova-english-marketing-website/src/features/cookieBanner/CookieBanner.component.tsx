'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isAllowed, setIsAllowed] = useState<string | null>(null);
  const [allowPerformance, setAllowPerformance] = useState<boolean>(true);
  const [allowTargeting, setAllowTargeting] = useState<boolean>(true);
  const [allowFunctionality, setAllowFunctionality] = useState<boolean>(true);
  const t = useTranslations('cookie_banner');

  useEffect(() => {
    setIsAllowed(localStorage.getItem('allowCookies'));
  }, []);
  function allow() {
    localStorage.setItem('allowCookies', 'true');
    if (allowPerformance) {
      localStorage.setItem('allowPerformance', 'true');
    } else {
      localStorage.setItem('allowPerformance', 'false');
    }
    if (allowTargeting) {
      localStorage.setItem('allowTargeting', 'true');
    } else {
      localStorage.setItem('allowTargeting', 'false');
    }
    if (allowFunctionality) {
      localStorage.setItem('allowFunctionality', 'true');
    } else {
      localStorage.setItem('allowFunctionality', 'false');
    }
    setIsAllowed('true');
  }
  function decline() {
    localStorage.setItem('allowCookies', 'false');
    setIsAllowed('false');
  }
  if (!isAllowed) {
    return (
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center">
        <div className="bg-white-foreground w-[400px] min-h-64 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-black">{t('title')}</h3>
          <p>{t('description')}</p>
          <div className="mt-2 text-lg grid grid-cols-2 mx-auto w-fit gap-12">
            <div>
              <input
                type="checkbox"
                name="necessary"
                checked
                readOnly
                className="accent-slate-600"
              />
              <label htmlFor="necessary">{t('cookies')[0]}</label>
              <br />
              <input
                type="checkbox"
                name="performance"
                defaultChecked={allowPerformance}
                onChange={(e) => setAllowPerformance(e.target.checked)}
              />
              <label htmlFor="performance"> {t('cookies')[1]}</label>
            </div>
            <div>
              {' '}
              <input
                type="checkbox"
                name="targeting"
                defaultChecked={allowTargeting}
                onChange={(e) => setAllowTargeting(e.target.checked)}
              />
              <label htmlFor="targeting"> {t('cookies')[2]}</label>
              <br />
              <input
                type="checkbox"
                name="functionality"
                defaultChecked={allowFunctionality}
                onChange={(e) => setAllowFunctionality(e.target.checked)}
              />
              <label htmlFor="functionality"> {t('cookies')[3]}</label>
            </div>
          </div>
          <div className="flex justify-around mt-3 font-bold ">
            <button
              className="py-2 px-8 border border-secondary-foreground hover:text-secondary-foreground duration-300"
              onClick={() => decline()}
            >
              {t('buttons')[0]}
            </button>
            <button
              className="py-2 px-8 bg-secondary-foreground text-white-foreground hover:bg-blue-600 duration-500"
              onClick={() => allow()}
            >
              {t('buttons')[1]}
            </button>
          </div>
          <div className="text-center">
            <Link
              className="font-bold text-sm text-gray-500 underline pr-4 hover:text-secondary-foreground"
              href={`/cookie-policy`}
            >
              {t('buttons')[2]}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

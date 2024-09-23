'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isAllowed, setIsAllowed] = useState<string | null>(null);
  const t = useTranslations('cookie_banner');

  useEffect(() => {
    setIsAllowed(localStorage.getItem('allowCookies'));
  }, []);
  function allow() {
    localStorage.setItem('allowCookies', 'true');
    setIsAllowed('true');
  }
  /*function decline() {
    localStorage.setItem('allowCookies', 'false');
    setIsAllowed('false');
  }*/
  if (!isAllowed) {
    return (
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center">
        <div className="bg-white-foreground w-[400px] min-h-64 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-black">{t('cookie_banner.title')}</h3>
          <p>{t('cookie_banner.description')}</p>
          <div className="flex justify-around mt-3 font-bold ">
            <Link
              className="py-2 px-8 border border-secondary-foreground hover:text-secondary-foreground duration-300"
              href={`/cookie-policy`}
            >
              {t('cookie_banner.buttons.details')}
            </Link>
            <button
              className="py-2 px-8 bg-secondary-foreground text-white-foreground hover:bg-blue-600 duration-500"
              onClick={() => allow()}
            >
              {t('cookie_banner.buttons.accept')[1]}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

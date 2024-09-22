'use client';

import { Pathnames, pathnames, useRouter } from '@/i18n/routing';
import { Button } from '@repo/ui/appButton';
import { Badge } from '@repo/ui/badge';
import { useTranslations } from 'next-intl';
import GiftBox from '/public/assets/icons/giftBox.svg';
import GiftIcon from '/public/assets/icons/giftIcon.svg';
import ManAndLine from '/public/assets/icons/manAndLine.svg';

export default function HeroSection() {
  const t = useTranslations('test_page.hero');
  const router = useRouter();

  const handleClick = () => {
    router.push(pathnames['/check-english-level-online/online-assessment'] as Pathnames);
  };

  return (
    <section className="p-20 flex gap-16 bg-[radial-gradient(circle,_rgba(183,225,255,1)_0%,_rgba(230,245,255,1)_100%)] rounded-2xl mb-24">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-5xl w-full font-semibold ">
            {t.rich('title', {
              span: (chunks) => <span className="text-[#0092FC]">{chunks}</span>,
            })}
          </h1>
          <div className="flex gap-5">
            <Badge variant="disabled" className="text-[#0092FC] text-xl">
              {t('badge_questions')}
            </Badge>
            <Badge variant="disabled" className="text-[#0092FC] text-xl">
              {t('badge_time')}
            </Badge>
          </div>
          <p className="text-2xl font-medium">{t('description')}</p>
        </div>
        <Button
          onClick={handleClick}
          className="flex w-max text-white-foreground text-2xl font-bold bg-[#0092FC] hover:bg-[#3EADFF] gap-3 rounded-full px-14 h-[60px]"
        >
          {t('cta').toUpperCase()} <GiftIcon />
        </Button>
      </div>
      <div className="relative w-1/2">
        <ManAndLine />
        <div className="absolute -top-12 -right-12">
          <GiftBox />
        </div>
      </div>
    </section>
  );
}

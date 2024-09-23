import { useTranslations } from 'next-intl';
import { NavLink } from '../types/navLink.type';

export const useNavLinks = (): NavLink[] => {
  const t = useTranslations();

  return [
    { href: '/why-us', label: t('temporary.teachers_section') },
    { href: '/trial-lesson', label: t('temporary.trial_lesson_section') },
    { href: '/program', label: t('footer.information.program') },
    { href: '/pricing', label: t('footer.information.pricing') },
    {
      href: '/check-english-level-online',
      label: `${t('footer.information.level_test')} 🎁`,
      highlight: true,
    },
    { href: '/faq', label: t('footer.information.faq') },
  ];
};

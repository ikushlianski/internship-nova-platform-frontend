import { useTranslations } from 'next-intl';
import { NavLink } from '../types/navLink.type';

export const useNavLinks = (): NavLink[] => {
  const t = useTranslations();

  return [
    { href: '#team', label: t('temporary.teachers_section') },
    { href: '#lesson', label: t('temporary.trial_lesson_section') },
    { href: '#program', label: t('footer.information.program') },
    { href: '#pricing', label: t('footer.information.pricing') },
    { href: '#test', label: `${t('footer.information.level_test')} 🎁`, highlight: true },
    { href: '#faq', label: t('footer.information.faq') },
  ];
};

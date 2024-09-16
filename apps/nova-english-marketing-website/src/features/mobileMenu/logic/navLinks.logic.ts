import { NavLink } from '../types/navLink.type';

export const navLinks: NavLink[] = [
  { href: '#team', label: 'Наша команда' },
  { href: '#lesson', label: 'Пробный урок' },
  { href: '#program', label: 'Программа' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#test', label: 'Тест на определение уровня 🎁', highlight: true },
  { href: '#faq', label: 'FAQ' },
];

// import { useTranslations } from 'next-intl';
// import { NavLink } from '../types/navLink.type';

// export const navLinks: NavLink[] = () => {
//   const t = useTranslations();

//   return [
//     { href: '#team', label: t('team.title') },
//     { href: '#lesson', label: t('temporary.trial_lesson_section') },
//     { href: '#program', label: t('temporary.program_of_course_section') },
//     { href: '#pricing', label: t('footer.information.pricing') },
//     { href: '#test', label: `${t('temporary.test_section')} 🎁`, highlight: true },
//     { href: '#faq', label: t('footer.information.faq') },
//   ];
// };

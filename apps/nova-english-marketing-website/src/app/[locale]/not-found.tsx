'use client';

import NotFound from '@/features/NotFound/ui/NotFound.component';
import { useTranslations } from 'next-intl';
import { getAllCourses } from '../api/api';
import { Course } from '@/shared/types/data.types';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const t = useTranslations('not_found');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await getAllCourses();
        console.log(fetchedCourses);
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setErrorMessage('Не удалось загрузить доступные курсы.');
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="pt-16 flex flex-col justify-center items-center gap-16">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <NotFound courses={courses} />
    </div>
  );
};

export default NotFoundPage;

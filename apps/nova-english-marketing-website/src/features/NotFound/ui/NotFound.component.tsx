'use client';

import TGLogo from '@/assets/icons/telegramLogo.svg';
import WALogo from '@/assets/icons/whatsAppLogo.svg';
import { Class } from '@repo/shared-types/class';
import { Card, CardDescription, CardHeader, CardTitle } from '@repo/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/carousel';
import { ErrorComponent } from '@repo/ui/error';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchCourses } from '../api/fetchMockCourses';

const NotFound = () => {
  const [courses, setCourses] = useState<Class[]>([]);
  const [error, setError] = useState<string | null>(null);

  const t = useTranslations('not_found');

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const fetchedCourses = await fetchCourses();
        setCourses(fetchedCourses);
      } catch (err) {
        setError('Failed to fetch courses');
      }
    };

    fetchCoursesData();
  }, []);

  if (error) {
    return <ErrorComponent message={'an Error occured'} description={error} />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-6">
      <h1 className="text-2xl">{t('courses')}</h1>
      <Carousel className="w-2/3">
        <CarouselContent>
          {courses.map(({ classId, className, classLevel, classTime }) => (
            <CarouselItem key={classId} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`/course/${classId}`}>
                <Card className="border-2 cursor-pointer">
                  <CardHeader>
                    <CardTitle>{className}</CardTitle>
                    <CardDescription>{classLevel}</CardDescription>
                    <CardDescription>{classTime}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col gap-6">
        <p className="text-xl"></p>
        <div className="flex justify-center gap-6">
          <Link href={'/'}>
            <WALogo />
          </Link>
          <Link href={'/'}>
            <TGLogo />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
export default NotFound;

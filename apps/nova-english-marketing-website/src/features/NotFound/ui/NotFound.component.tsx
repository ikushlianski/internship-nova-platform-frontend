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
import Link from 'next/link';
import { fetchCourses } from '../api/fetchMockCourses';

const NotFound = async () => {
  let courses: Class[] = [];

  let error: string | null = null;

  try {
    courses = await fetchCourses();
  } catch (err) {
    error = 'Failed to fetch courses';
  }

  if (courses.length === 0) {
    return <div>No courses available</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-6">
      <h1 className="text-2xl">Доступные курсы:</h1>
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
        <p className="text-xl">Остались вопросы? Свяжитесь с нами!</p>
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

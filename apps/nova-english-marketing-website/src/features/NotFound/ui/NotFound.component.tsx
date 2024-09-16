import TGLogo from '@/assets/icons/telegramLogo.svg';
import WALogo from '@/assets/icons/whatsAppLogo.svg';
import { Card, CardDescription, CardHeader, CardTitle } from '@repo/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/carousel';
import Link from 'next/link';
import { CoursesPageProps } from '@/app/not-found';

export default function NotFound({ courses, classes, error }: CoursesPageProps) {
  if (!courses) {
    console.log(courses, classes, error);
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
          {courses.map(({ course_code, course_name, course_level }) => (
            <CarouselItem key={course_code} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`/course/${course_code}`}>
                <Card className="border-2 cursor-pointer">
                  <CardHeader>
                    <CardTitle>{course_name}</CardTitle>
                    <CardDescription>{course_level.course_level_name}</CardDescription>
                    <CardDescription>
                      {classes.length > 0 ? (
                        classes.map((classItem) => (
                          <p key={classItem.class_id}>{classItem.time_of_day.time_of_day_name}</p>
                        ))
                      ) : (
                        <p>No classes available</p>
                      )}
                    </CardDescription>
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
}

import { Course } from '@/shared/types/data.types';
import { getAllCourses } from './api/api';
import NotFound from '@/features/NotFound/ui/NotFound.component';

const NotFoundPage = async () => {
  let courses: Course[] = [];
  let errorMessage: string | null = null;
  try {
    courses = await getAllCourses();
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    errorMessage = 'Не удалось загрузить доступные курсы.';
  }
  console.log(courses);
  return (
    <div className="pt-16 flex flex-col justify-center items-center gap-16">
      <h1 className="text-xl font-bold">
        К сожалению, страница, которую вы ищете, не существует или была перемещена
      </h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <NotFound courses={courses} />
    </div>
  );
};

export default NotFoundPage;

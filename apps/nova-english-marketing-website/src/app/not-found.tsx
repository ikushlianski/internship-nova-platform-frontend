import NotFound from '@/features/NotFound/ui/NotFound.component';
import { Class, Course } from '@/shared/types/data.types';
import { GetStaticProps } from 'next';
import { getAllClasses, getAllCourses } from './api/api';

export interface CoursesPageProps {
  courses: Course[];
  classes: Class[];
  error: string | null;
}

const NotFoundPage = (props: CoursesPageProps) => {
  return (
    <div className="pt-16 flex flex-col justify-center items-center gap-16">
      <h1 className="text-xl font-bold">
        К сожалению, страница, которую вы ищете, не существует или была перемещена
      </h1>
      <NotFound {...props} />
    </div>
  );
};

const getStaticProps: GetStaticProps = async () => {
  console.log('Fetching courses...');
  let courses = [];
  let classes = [];
  let error: string | null = null;

  try {
    courses = await getAllCourses();
  } catch (err) {
    error = (err as Error).message || 'An unknown error occurred while fetching courses';
  }

  try {
    classes = await getAllClasses();
  } catch (err) {
    error = (err as Error).message || 'An unknown error occurred while fetching classes';
  }

  return {
    props: {
      courses,
      classes,
      error,
    },
    revalidate: 60,
  };
};

export { getStaticProps };
export default NotFoundPage;

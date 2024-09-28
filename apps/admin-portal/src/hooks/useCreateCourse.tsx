import { CourseCreateProps } from '@/types/CourseCreateProps.ts';
import { Course, CourseLevel } from '@/types/Course.ts';
import { showNotify } from '@/utils';

export const useCreateCourse = ({ dataProvider }: CourseCreateProps) => {
  const handleSubmit = async (data: Partial<Course>) => {
    try {
      const courseData = {
        title: data.title,
        level: CourseLevel,
        modules: data.modules,
        lessons: data.lessons,
        intensity: data.intensity,
      };
      await dataProvider.create('courses', {
        data: courseData,
      });
      showNotify('Course created successfully', { type: 'success', autoHideDuration: 1500 });
    } catch (error) {
      if (error instanceof Error) {
        showNotify(`Error: ${error.message}`, { type: 'error', autoHideDuration: 1500 });
      } else {
        showNotify('Unknown error occurred', { type: 'error', autoHideDuration: 1500 });
      }
      throw error;
    }
  };
  return { handleSubmit };
};

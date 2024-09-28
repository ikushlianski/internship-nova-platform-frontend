import { CourseCreateForm } from '@/components/CourseCreateForm.tsx';
import dataProvider from '../mocks/dataProvider.ts';

export const CourseCreatePage = () => {
  return (
    <div>
      <CourseCreateForm dataProvider={dataProvider} />
    </div>
  );
};

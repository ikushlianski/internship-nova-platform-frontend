import { Create, SaveButton, SelectInput, SimpleForm, TextInput, Toolbar } from 'react-admin';
import { CourseLevel } from '@/types/Course.ts';
import { CourseCreateProps } from '@/types/CourseCreateProps.ts';
import { useCreateCourse } from '@/hooks/useCreateCourse.tsx';

export const CourseCreateForm = (props: CourseCreateProps) => {
  const { handleSubmit } = useCreateCourse(props);
  return (
    <Create resource="courses">
      <SimpleForm
        sx={{ width: '1000px' }}
        onSubmit={handleSubmit}
        toolbar={
          <Toolbar>
            <SaveButton label="Save Course" />
          </Toolbar>
        }
      >
        <TextInput source="title" label="Title" />
        <SelectInput
          source="levels"
          label="Level"
          choices={[
            { id: CourseLevel.A1, name: 'A1' },
            { id: CourseLevel.A1PLUS, name: 'A1+' },
            { id: CourseLevel.A2, name: 'A2' },
            { id: CourseLevel.A2PLUS, name: 'A2+' },
            { id: CourseLevel.B1, name: 'B1' },
            { id: CourseLevel.B1PLUS, name: 'B1+' },
            { id: CourseLevel.B2, name: 'B2' },
            { id: CourseLevel.B2PLUS, name: 'B2+' },
            { id: CourseLevel.C1, name: 'C1' },
            { id: CourseLevel.C1PLUS, name: 'C1+' },
          ]}
        />
        <TextInput source="number of modules" label="Number of modules" />
        <TextInput source="number of lessons" label="Number of lessons" />
        <TextInput source="intensity" label="Intensity" />
      </SimpleForm>
    </Create>
  );
};

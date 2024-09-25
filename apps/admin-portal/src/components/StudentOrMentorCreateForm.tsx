import { Create, SimpleForm, TextInput, SaveButton, Toolbar, required } from 'react-admin';
import { UserRole as Role } from '@repo/shared-types/user';
import useCreateStudentOrMentor from '../hooks/useCreateStudentOrMentor';
import { UserCreateFormProps } from '../types/UserCreateProps';

const StudentOrMentorCreateForm = ({
  dataProvider,
  role,
}: UserCreateFormProps & { role: Role }) => {
  const { handleSubmit } = useCreateStudentOrMentor({ dataProvider });
  const isTeacher = role === Role.Teacher;
  console.log('isTeacher', isTeacher);

  const resource = isTeacher ? 'teachers' : 'students';

  return (
    <Create resource={resource}>
      <SimpleForm
        onSubmit={handleSubmit}
        toolbar={
          <Toolbar>
            <SaveButton label={`Save ${isTeacher ? 'Mentor' : 'Student'}`} />
          </Toolbar>
        }
      >
        <TextInput
          source="roles"
          label="Role"
          defaultValue={isTeacher ? Role.Teacher : Role.Student}
        />

        <TextInput source="email" label="Email" validate={required()} />
        <TextInput source="firstName" label="First Name" validate={required()} />
        <TextInput source="lastName" label="Last Name" validate={required()} />
        <TextInput source="phoneNumber" label="Phone Number" />

        {isTeacher && (
          <>
            <TextInput source="country" label="Country" validate={required()} />
            <TextInput source="lessonRate" label="Lesson Rate" validate={required()} />
            <TextInput source="telegramNickname" label="Telegram Nickname" />
          </>
        )}
      </SimpleForm>
    </Create>
  );
};

export default StudentOrMentorCreateForm;

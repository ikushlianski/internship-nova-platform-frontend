import { Create, SimpleForm, TextInput, SaveButton, Toolbar } from 'react-admin';
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

        <TextInput source="email" label="Email" />
        <TextInput source="firstName" label="First Name" />
        <TextInput source="lastName" label="Last Name" />
        <TextInput source="phoneNumber" label="Phone Number" />

        {isTeacher && (
          <>
            <TextInput source="country" label="Country" />
            <TextInput source="lessonRate" label="Lesson Rate" />
            <TextInput source="telegramNickname" label="Telegram Nickname" />
            <TextInput source="teacherId" label="Teacher ID" />
            <TextInput source="expertise" label="Expertise" />
            <TextInput source="classIds" label="Class IDs" />
            <TextInput source="pathIds" label="Path IDs" />
            <TextInput source="studentIds" label="Student IDs" />
          </>
        )}

        {!isTeacher && (
          <>
            <TextInput source="studentId" label="Student ID" />
            <TextInput source="pathId" label="Path ID" />
            <TextInput source="teacherId" label="Teacher ID" />
          </>
        )}
      </SimpleForm>
    </Create>
  );
};

export default StudentOrMentorCreateForm;

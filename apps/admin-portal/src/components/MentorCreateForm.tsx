import { Create, SimpleForm, TextInput, SaveButton, Toolbar } from 'react-admin';
import { UserRole as Role } from '@repo/shared-types/user';
import useCreateStudentOrMentor from '../hooks/useCreateStudentOrMentor';
import { UserCreateFormProps } from '../types/UserCreateProps';

const MentorCreateForm = (props: UserCreateFormProps) => {
  const { role, handleSubmit } = useCreateStudentOrMentor(props);

  return (
    <Create resource="teachers">
      <SimpleForm
        onSubmit={handleSubmit}
        toolbar={
          <Toolbar>
            <SaveButton label="Save Mentor" />
          </Toolbar>
        }
      >
        <TextInput source="roles" label="Role" defaultValue={Role.Teacher} />

        {role === Role.Student && (
          <>
            <TextInput source="email" label="Email" />
            <TextInput source="firstName" label="First Name" />
            <TextInput source="lastName" label="Last Name" />
            <TextInput source="country" label="Country" />
            <TextInput source="lessonRate" label="Lesson Rate" />
            <TextInput source="telegramNickname" label="Telegram Nickname" />
            <TextInput source="phoneNumber" label="Phone Number" />
            <TextInput source="teacherId" label="TeacherId" />
            <TextInput source="expertise" label="Expertise" />
            <TextInput source="classIds" label="Class IDs" />
            <TextInput source="pathIds" label="Pass IDs" />
            <TextInput source="studentIds" label="Student IDs" />
          </>
        )}
      </SimpleForm>
    </Create>
  );
};

export default MentorCreateForm;

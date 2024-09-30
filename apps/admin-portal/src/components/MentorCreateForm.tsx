import { Create, SimpleForm, TextInput, SaveButton, Toolbar, required } from 'react-admin';
import { UserRole as Role } from '@repo/shared-types/user';
import useCreateStudentOrMentor from '../hooks/useCreateStudentOrMentor';
import { UserCreateFormProps } from '../types/UserCreateProps';

const UserCreateForm = (props: UserCreateFormProps) => {
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
            <TextInput source="email" label="Email" validate={required()} />
            <TextInput source="firstName" label="First Name" validate={required()} />
            <TextInput source="lastName" label="Last Name" validate={required()} />
            <TextInput source="country" label="Country" validate={required()} />
            <TextInput source="lessonRate" label="Lesson Rate" validate={required()} />
            <TextInput source="telegramNickname" label="Telegram Nickname" />
            <TextInput source="phoneNumber" label="Phone Number" />
          </>
        )}
      </SimpleForm>
    </Create>
  );
};

export default UserCreateForm;

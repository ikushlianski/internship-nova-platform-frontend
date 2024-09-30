import { Create, SimpleForm, TextInput, SaveButton, Toolbar, required } from 'react-admin';
import { UserRole as Role } from '@repo/shared-types/user';
import useCreateStudentOrMentor from '../hooks/useCreateStudentOrMentor';
import { UserCreateFormProps } from '../types/UserCreateProps';

const StudentCreateForm = (props: UserCreateFormProps) => {
  const { role, handleSubmit } = useCreateStudentOrMentor(props);

  return (
    <Create resource="students">
      <SimpleForm
        onSubmit={handleSubmit}
        toolbar={
          <Toolbar>
            <SaveButton label="Save Student" />
          </Toolbar>
        }
      >
        <TextInput source="roles" label="Role" defaultValue={Role.Student} />

        {role === Role.Student && (
          <>
            <TextInput source="email" label="Email" validate={required()} />
            <TextInput source="firstName" label="First Name" validate={required()} />
            <TextInput source="lastName" label="Last Name" validate={required()} />
            <TextInput source="phoneNumber" label="Phone Number" />
          </>
        )}
      </SimpleForm>
    </Create>
  );
};

export default StudentCreateForm;

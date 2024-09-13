import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  SaveButton,
  Toolbar,
} from 'react-admin';
import { UserRole as Role } from '@repo/shared-types/user';
import useCreateUser from '../hooks/useCreateUser';
import { UserCreateFormProps } from '../types/UserCreateProps';

const UserCreateForm = (props: UserCreateFormProps) => {
  const { role, setRole, handleSubmit } = useCreateUser(props);

  return (
    <Create resource="users">
      <SimpleForm
        onSubmit={handleSubmit}
        toolbar={
          <Toolbar>
            <SaveButton label="Save User" />
          </Toolbar>
        }
      >
        <TextInput source="name" label="Name" />
        <SelectInput
          source="roles"
          label="Role"
          choices={[
            { id: Role.Student, name: 'Student' },
            { id: Role.Teacher, name: 'Teacher' },
            { id: Role.Admin, name: 'Admin' },
            { id: Role.Manager, name: 'Manager' },
            { id: Role.Spectator, name: 'Spectator' },
            { id: Role.Sale, name: 'Sale' },
            { id: Role.NoRole, name: 'NoRole' },
          ]}
          onChange={(e) => setRole(e.target.value)}
        />

        {role === Role.Student && (
          <>
            <TextInput source="studentId" label="Student ID" />
            <TextInput source="pathId" label="Path ID" />
            <TextInput source="teacherId" label="Teacher ID" />
          </>
        )}
        {role === Role.Teacher && (
          <>
            <TextInput source="teacherId" label="TeacherId" />
            <TextInput source="expertise" label="Expertise" />
            <TextInput source="classIds" label="Class IDs" />
            <TextInput source="pathIds" label="Pass IDs" />
            <TextInput source="studentIds" label="Student IDs" />
          </>
        )}
        {role === Role.Admin && (
          <>
            <TextInput source="adminId" label="AdminId" />
          </>
        )}
        {role === Role.Manager && (
          <>
            <TextInput source="managerId" label="ManagerId" />
          </>
        )}
        {role === Role.Sale && (
          <>
            <TextInput source="salesId" label="SalesId" />
          </>
        )}
        {role === Role.NoRole && (
          <>
            <TextInput source="noRoleId" label="noRoleId" />
          </>
        )}
        {role === Role.Spectator && (
          <>
            <TextInput source="spectatorId" label="SpectatorId" />
            <BooleanInput source="trialPeriod" label="TrialPeriod" />
          </>
        )}
      </SimpleForm>
    </Create>
  );
};

export default UserCreateForm;

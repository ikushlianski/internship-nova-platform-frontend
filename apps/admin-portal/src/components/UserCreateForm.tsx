import { useState } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  SaveButton,
  Toolbar,
} from 'react-admin';
import dataProvider from '../mocks/dataProvider';
import { parseToNumberArray } from '../utils/Utils';
import { IUser } from '../types/User';
import { IStudent } from '../types/Student';
import { ITeacher } from '../types/Teacher';
import { IAdmin } from '../types/Admin';
import { IManager } from '../types/Manager';
import { ISales } from '../types/Sales';
import { ISpectator } from '../types/Spectator';
import { INoRole } from '../types/NoRole';
import { showNotify } from '../utils/Notification/globalNotify';

interface UserCreateFormProps {
  dataProvider: typeof dataProvider;
}

const UserCreateForm = (props: UserCreateFormProps) => {
  const [role, setRole] = useState('Student');

  const handleSubmit = async (
    data: Partial<
      IUser & {
        trialPeriod?: boolean;
        expertise?: string;
        pathIds?: number[];
        classIds?: number[];
        studentIds?: number[];
      }
    >,
  ) => {
    try {
      const userData = {
        name: data.name,
        roles: role,
        studentId: role === 'Student' ? Number(data.studentId) : undefined,
        teacherId: role === 'Teacher' ? Number(data.teacherId) : undefined,
        adminId: role === 'Admin' ? Number(data.adminId) : undefined,
        managerId: role === 'Manager' ? Number(data.managerId) : undefined,
        salesId: role === 'Sales' ? Number(data.salesId) : undefined,
        spectatorId: role === 'Spectator' ? Number(data.spectatorId) : undefined,
        noRoleId: role === 'NoRole' ? Number(data.noRoleId) : undefined,
      };
      const userResponse = await props.dataProvider.create('users', {
        data: userData,
      });
      const userId = userResponse.data.id;

      if (role === 'Student') {
        const studentData: Partial<IStudent> = {
          id: Number(data.studentId),
          userId: userId,
          pathId: Number(data.pathId),
          teacherId: Number(data.teacherId),
        };

        await props.dataProvider.create('students', { data: studentData });
      }

      if (role === 'Teacher') {
        const teacherData: Partial<ITeacher> = {
          id: Number(data.teacherId),
          userId: userId,
          expertise: data.expertise,
          pathIds: parseToNumberArray(data.pathIds),
          classIds: parseToNumberArray(data.classIds),
          studentIds: parseToNumberArray(data.studentIds),
        };
        await props.dataProvider.create('teachers', { data: teacherData });
      }

      if (role === 'Admin') {
        const adminData: Partial<IAdmin> = {
          id: Number(data.adminId),
          userId: userId,
        };
        await props.dataProvider.create('admins', { data: adminData });
      }
      if (role === 'Manager') {
        const managerData: Partial<IManager> = {
          id: Number(data.managerId),
          userId: userId,
        };
        await props.dataProvider.create('managers', { data: managerData });
      }
      if (role === 'Sale') {
        const salesData: Partial<ISales> = {
          id: Number(data.salesId),
          userId: userId,
        };
        await props.dataProvider.create('sales', { data: salesData });
      }
      if (role === 'NoRole') {
        const noRoleData: Partial<INoRole> = {
          id: Number(data.noRoleId),
          userId: userId,
        };
        await props.dataProvider.create('noRoles', { data: noRoleData });
      }
      if (role === 'Spectator') {
        const spectatorData: Partial<ISpectator> = {
          id: Number(data.spectatorId),
          userId: userId,
          trialPeriod: data.trialPeriod,
        };
        await props.dataProvider.create('spectators', { data: spectatorData });
      }

      showNotify('User created successfully', { type: 'success', autoHideDuration: 1500 });
    } catch (error) {
      if (error instanceof Error) {
        showNotify(`Error: ${error.message}`, { type: 'error', autoHideDuration: 1500 });
      } else {
        showNotify('Unknown error occurred', { type: 'error', autoHideDuration: 1500 });
      }
      throw error;
    }
  };

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
            { id: 'Student', name: 'Student' },
            { id: 'Teacher', name: 'Teacher' },
            { id: 'Admin', name: 'Admin' },
            { id: 'Manager', name: 'Manager' },
            { id: 'Spectator', name: 'Spectator' },
            { id: 'Sale', name: 'Sale' },
            { id: 'NoRole', name: 'NoRole' },
          ]}
          onChange={(e) => setRole(e.target.value)}
        />

        {role === 'Student' && (
          <>
            <TextInput source="studentId" label="Student ID" />
            <TextInput source="pathId" label="Path ID" />
            <TextInput source="teacherId" label="Teacher ID" />
          </>
        )}
        {role === 'Teacher' && (
          <>
            <TextInput source="teacherId" label="TeacherId" />
            <TextInput source="expertise" label="Expertise" />
            <TextInput source="classIds" label="Class IDs" />
            <TextInput source="pathIds" label="Pass IDs" />
            <TextInput source="studentIds" label="Student IDs" />
          </>
        )}
        {role === 'Admin' && (
          <>
            <TextInput source="adminId" label="AdminId" />
          </>
        )}
        {role === 'Manager' && (
          <>
            <TextInput source="managerId" label="ManagerId" />
          </>
        )}
        {role === 'Sale' && (
          <>
            <TextInput source="salesId" label="SalesId" />
          </>
        )}
        {role === 'NoRole' && (
          <>
            <TextInput source="noRoleId" label="noRoleId" />
          </>
        )}
        {role === 'Spectator' && (
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

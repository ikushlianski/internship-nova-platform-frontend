import { useState } from 'react';
import { User } from '@repo/shared-types/user';
import { IStudent } from '../types/Student';
import { ITeacher } from '../types/Teacher';
import { IAdmin } from '../types/Admin';
import { IManager } from '../types/Manager';
import { ISales } from '../types/Sales';
import { INoRole } from '../types/NoRole';
import { ISpectator } from '../types/Spectator';
import { parseToNumberArray } from '../utils/Utils';
import { showNotify } from '../utils/globalNotify';
import { UserRole as Role } from '@repo/shared-types/user';
import { UserCreateFormProps } from '../types/UserCreateProps';

const useCreateUser = ({ dataProvider }: UserCreateFormProps) => {
  const [role, setRole] = useState(Role.Student);

  const handleSubmit = async (
    data: Partial<
      User & {
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
        studentId: role === Role.Student ? Number(data.studentId) : undefined,
        teacherId: role === Role.Teacher ? Number(data.teacherId) : undefined,
        adminId: role === Role.Admin ? Number(data.adminId) : undefined,
        managerId: role === Role.Manager ? Number(data.managerId) : undefined,
        salesId: role === Role.Sale ? Number(data.salesId) : undefined,
        spectatorId: role === Role.Spectator ? Number(data.spectatorId) : undefined,
        noroleId: role === Role.NoRole ? Number(data.noRoleId) : undefined,
      };
      const userResponse = await dataProvider.create('users', {
        data: userData,
      });
      const userId = userResponse.data.id;

      if (role === Role.Student) {
        const studentData: Partial<IStudent> = {
          id: Number(data.studentId),
          userId: userId,
          pathId: Number(data.pathId),
          teacherId: Number(data.teacherId),
        };

        await dataProvider.create('students', { data: studentData });
      }

      if (role === Role.Teacher) {
        const teacherData: Partial<ITeacher> = {
          id: Number(data.teacherId),
          userId: userId,
          expertise: data.expertise,
          pathIds: parseToNumberArray(data.pathIds),
          classIds: parseToNumberArray(data.classIds),
          studentIds: parseToNumberArray(data.studentIds),
        };
        await dataProvider.create('teachers', { data: teacherData });
      }

      if (role === Role.Admin) {
        const adminData: Partial<IAdmin> = {
          id: Number(data.adminId),
          userId: userId,
        };
        await dataProvider.create('admins', { data: adminData });
      }
      if (role === Role.Manager) {
        const managerData: Partial<IManager> = {
          id: Number(data.managerId),
          userId: userId,
        };
        await dataProvider.create('managers', { data: managerData });
      }
      if (role === Role.Sale) {
        const salesData: Partial<ISales> = {
          id: Number(data.salesId),
          userId: userId,
        };
        await dataProvider.create('sales', { data: salesData });
      }
      if (role === Role.NoRole) {
        const noRoleData: Partial<INoRole> = {
          id: Number(data.noRoleId),
          userId: userId,
        };
        await dataProvider.create('noroles', { data: noRoleData });
      }
      if (role === Role.Spectator) {
        const spectatorData: Partial<ISpectator> = {
          id: Number(data.spectatorId),
          userId: userId,
          trialPeriod: data.trialPeriod,
        };
        await dataProvider.create('spectators', { data: spectatorData });
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
  return { role, setRole, handleSubmit };
};

export default useCreateUser;

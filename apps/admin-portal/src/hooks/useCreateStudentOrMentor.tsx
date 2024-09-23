import { useState } from 'react';
import { User } from '@repo/shared-types/user';
import { IStudent } from '../types/Student';
import { ITeacher } from '../types/Teacher';
import { parseToNumberArray } from '../utils/Utils';
import { showNotify } from '../utils/Notification/globalNotify';
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
      };
      const userResponse = await dataProvider.create('users', {
        data: userData,
      });
      const userId = userResponse.data.id;

      if (role === Role.Student) {
        const studentData: Partial<IStudent> = {
          id: Number(data.studentId),
          email: String(data.studentId),
          firstName: String(data.studentId),
          lastName: String(data.studentId),
          phoneNumber: String(data.studentId),
          userId: userId,
          pathId: Number(data.pathId),
          teacherId: Number(data.teacherId),
        };

        await dataProvider.create('students', { data: studentData });
      }

      if (role === Role.Teacher) {
        const teacherData: Partial<ITeacher> = {
          id: Number(data.teacherId),
          email: String(data.teacherId),
          firstName: String(data.teacherId),
          lastName: String(data.teacherId),
          phoneNumber: String(data.teacherId),
          lessonRate: Number(data.teacherId),
          telegramNickname: String(data.teacherId),
          userId: userId,
          expertise: data.expertise,
          pathIds: parseToNumberArray(data.pathIds),
          classIds: parseToNumberArray(data.classIds),
          studentIds: parseToNumberArray(data.studentIds),
        };
        await dataProvider.create('teachers', { data: teacherData });
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

import { useState } from 'react';
import { User } from '@repo/shared-types/user';
import { IStudent } from '../types/Student';
import { ITeacher } from '../types/Teacher';
import { showNotify } from '../utils/Notification/globalNotify';
import { UserRole as Role } from '@repo/shared-types/user';
import { UserCreateFormProps } from '../types/UserCreateProps';

const useCreateStudentOrMentor = ({ dataProvider }: UserCreateFormProps) => {
  const [role, setRole] = useState(Role.Student);

  const handleSubmit = async (
    data: Partial<
      User & {
        first_name: string;
        last_name: string;
       // phone_number?: string;
       // lessonRate?: number;
        //telegramNickname?: string;
        user_email:string;
      }
    >,
  ) => {
    try {
      // const userData = {
      //   firstName: data.first_name,
      //   lastName: data.last_name,
      //   roles: role,
      //   studentId: role === Role.Student ? Number(data.studentId) : undefined,
      //   teacherId: role === Role.Teacher ? Number(data.teacherId) : undefined,
      // };
      // const userResponse = await dataProvider.create('users', {
      //   data: userData,
      // });
      // const userId = userResponse.data.id;

      if (role === Role.Student) {
        const studentData: Partial<IStudent> = {
          //id: Number(data.studentId),
          user_email: String(data.user_email),
          first_name: String(data.first_name),
          last_name: String(data.last_name),
          //phoneNumber: String(data.studentId),
          //userId: userId,
        };

        await dataProvider.create('students', { data: studentData });
      }

      if (role === Role.Teacher) {
        const teacherData: Partial<ITeacher> = {
          id: Number(data.teacherId),
          user_email: String(data.teacherId),
          first_name: String(data.teacherId),
          last_name: String(data.teacherId),
          phoneNumber: String(data.teacherId),
          lessonRate: Number(data.teacherId),
          telegramNickname: String(data.teacherId),
          //userId: userId,
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

export default useCreateStudentOrMentor;

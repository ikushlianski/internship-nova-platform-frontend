/* eslint-disable no-unused-vars */

export interface User {
  id: number;
  user_email: string;
  first_name: string;
  last_name: string;
  phoneNumber?: string;
  lessonRate?: number;
  telegramNickname?: string;
  roles: UserRole[];
  studentId?: number;
  pathId?: number;
  teacherId?: number;
  adminId?: number;
  managerId?: number;
  salesId?: number;
  spectatorId?: number;
  noRoleId?: number;
}

export enum UserRole {
  User = 'User',
  Student = 'Student',
  Teacher = 'Teacher',
  Path = 'Path',
  Class = 'Classe',
  Admin = 'Admin',
  Manager = 'Manager',
  Spectator = 'Spectator',
  // People get this role when they sign up without buying a course
  NoRole = 'NoRole',
  Sale = 'Sale',
  // RegularUser = 'RegularUser',
}

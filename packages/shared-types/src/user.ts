/* eslint-disable no-unused-vars */

export interface User {
  id: number;
  name: string;
  email?: string;
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
  User = 'Users',
  Student = 'Students',
  Teacher = 'Teachers',
  Path = 'Paths',
  Class = 'Classes',
  Admin = 'Admins',
  Manager = 'Managers',
  Spectator = 'Spectators',
  // People get this role when they sign up without buying a course
  NoRole = 'NoRoles',
  Sale = 'Sales',
  // RegularUser = 'RegularUser',
}

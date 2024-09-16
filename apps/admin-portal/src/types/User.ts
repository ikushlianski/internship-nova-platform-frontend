export interface IUser {
  id: number;
  name: string;
  roles: Array<'No role' | 'Spectator' | 'Student' | 'Teacher' | 'Manager' | 'Sales' | 'Admin'>;
  studentId?: number;
  teacherId?: number;
  adminId?: number;
  managerId?: number;
  salesId?: number;
  spectatorId?: number;
  noRoleId?: number;
  manageUserIds?: number;
}

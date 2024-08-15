export interface User {
  email: string;
  roles: UserRole[];
}

export enum UserRole {
  Admin = "Admin",
  Manager = "Manager",
  Student = "Student",
  // People get this role when they sign up without buying a course
  RegularUser = "RegularUser",
}

export interface User {
  email: string;
  roles: UserRole[];
}

export enum UserRole {
  Admin = "Admin",
  Manager = "Manager",
  Student = "Student",
  RegularUser = "RegularUser",
}

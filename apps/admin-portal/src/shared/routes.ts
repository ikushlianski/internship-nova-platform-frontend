enum Directories {
  Users = '/users',
  Classes = '/classes',
  Courses = '/courses',
  Leads = '/leads',
}

export const AppRoutes = {
  // User Routes
  Users: `${Directories.Users}`,
  User: `${Directories.Users}/:id`,
  UserEdit: `${Directories.Users}/edit/:id`,
  UserCreate: `${Directories.Users}/create`,

  // Classes Routes
  Classes: `${Directories.Classes}`,
  Class: `${Directories.Classes}/:id`,
  ClassManage: `${Directories.Classes}/manage/:id`,
  ClassCreate: `${Directories.Classes}/create`,

  // Courses Routes
  Courses: `${Directories.Courses}`,
  Course: `${Directories.Courses}/:id`,
  CourseManage: `${Directories.Courses}/manage/:id`,
  CourseCreate: `${Directories.Courses}/create`,

  // Leads Routes
  Leads: `${Directories.Leads}`,
};

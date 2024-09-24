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
  UserClasses: `${Directories.Users}/:id/classes`,
  UserRequests: `${Directories.Users}/:id/requests`,
  UserPurchases: `${Directories.Users}/:id/purchases`,
  UserDocs: `${Directories.Users}/:id/docs`,
  UserCrm: `${Directories.Users}/:id/crm`,
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

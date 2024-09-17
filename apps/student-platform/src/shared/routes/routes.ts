export const ROUTES = {
  HOME: '/',
  HOME_TASKS: '/home-tasks',
  LESSON: '/lessons',
  CALENDAR: '/calendar',
  SETTINGS: '/settings',
  PRIVACY_POLICY: '/privacy-policy',
  STORE: '/store',
  MY_COURSES: '/my-courses',
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type Routes = (typeof ROUTES)[RouteKeys];

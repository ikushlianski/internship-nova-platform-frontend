import { AuthProvider } from 'react-admin';
import { GlobalRoutes } from '@/shared';

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async () => {
    window.location.href = GlobalRoutes.GoogleOAUTH;
    return { redirectTo: false };
  },
  // called when the user clicks on the logout button
  logout: () => Promise.resolve(),
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const auth = true;
    if (auth) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

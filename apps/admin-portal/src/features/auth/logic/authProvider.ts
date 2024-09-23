import { AuthProvider } from 'react-admin';
import { GlobalRoutes } from '@/shared';
import { showNotify } from '@/utils/Notification/globalNotify.ts';

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async () => {
    localStorage.setItem('token', 'true');
    window.location.href = GlobalRoutes.GoogleOAUTH;
    return { redirectTo: false };
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('token');
    showNotify(`You've been logout...`, { type: 'success', autoHideDuration: 1500 });
    console.log("You've been logout...");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  getIdentity: () =>
    Promise.resolve({
      id: 'user',
      fullName: 'John Doe',
    }),
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

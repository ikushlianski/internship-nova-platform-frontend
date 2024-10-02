import { AuthProvider } from 'react-admin';
import { GlobalRoutes } from '@/shared';
import { showNotify } from '@/utils/Notification/globalNotify.ts';
import { authApi } from '@/features/auth/api/auth.api.ts';

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
  checkAuth: async () => {
    try {
      const response = await authApi.me();
      if (response.data) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    } catch (err) {
      return Promise.reject();
    }
  },
  getIdentity: async () => {
    try {
      const response = await authApi.me();
      return {
        id: response.data.user_email,
        fullName: `${response.data.first_name} ${response.data.last_name}`,
      };
    } catch (err) {
      return Promise.reject();
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

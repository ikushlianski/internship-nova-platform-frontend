/* eslint-disable @typescript-eslint/no-explicit-any */
import { showNotify } from '../../../src/utils/Notification/globalNotify';

export const authProvider = {
  login: ({ username, password }: { username: string; password: string }) => {
    if (username !== 'john' || password !== '123') {
      return Promise.reject();
    }
    localStorage.setItem('username', username);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('username');
    showNotify(`You've been logout...`, { type: 'success', autoHideDuration: 1500 });
    console.log("You've been logout...");
    return Promise.resolve();
  },
  checkAuth: () => (localStorage.getItem('username') ? Promise.resolve() : Promise.reject()),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401) {
      localStorage.removeItem('username');
      return Promise.reject();
    }

    return Promise.resolve();
  },
  getIdentity: () =>
    Promise.resolve({
      id: 'user',
      fullName: 'John Doe',
    }),
  getPermissions: () => Promise.resolve(''),
};

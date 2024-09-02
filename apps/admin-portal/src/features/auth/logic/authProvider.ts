import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async () => {
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const token = localStorage.getItem("token");
    if (token) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

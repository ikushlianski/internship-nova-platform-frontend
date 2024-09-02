import { ENVIRONMENTS } from './environments.ts';

export const GlobalRoutes = {
  GoogleOAUTH: `${ENVIRONMENTS.VITE_API_V1_URL}/auth/google/callback?ssr=false&admin_portal=true`,
};

import axios from 'axios';
import { ENVIRONMENTS } from '@/shared/environments.ts';
import { Endpoints, endpoints } from '@/features/auth/api/auth.endpoins.ts';
import { UserProfile } from '@/features/auth/api/auth.types.ts';

const apiClient = axios.create({
  baseURL: ENVIRONMENTS.VITE_API_V1_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  me: () => apiClient.get<UserProfile>(endpoints[Endpoints.Me]),
};

import axios from 'axios';
import { ENVIRONMENTS } from '@/shared/environments.ts';

export const apiClient = axios.create({
  baseURL: ENVIRONMENTS.VITE_API_V1_URL,
  withCredentials: true,
});

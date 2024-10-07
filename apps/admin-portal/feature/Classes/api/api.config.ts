import axios from 'axios';
import { ENVIRONMENTS } from '../../../src/shared/environments';

export const apiClient = axios.create({
  baseURL: ENVIRONMENTS.VITE_API_V1_URL,
  withCredentials: true,
});

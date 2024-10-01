import axios, { AxiosResponse } from 'axios';
import { showNotify } from '@/utils';

export const tryCatchResponse = async <T>(
  request: (url: string) => Promise<AxiosResponse<T>>,
  url: string,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await request(url);
    return response.data;
  } catch (error) {
    let errorMessage = 'Some error occurred';

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error?.message || errorMessage;
    } else if (error instanceof Error) {
      errorMessage = `Native error: ${error.message}`;
    } else {
      errorMessage = JSON.stringify(error);
    }

    showNotify(errorMessage, { type: 'error' });
    throw new Error(errorMessage);
  }
};

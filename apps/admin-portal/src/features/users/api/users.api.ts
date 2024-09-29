import { endpoints, apiClient, UserResponse } from '@/features';
import { tryCatchResponse } from '@/features/users/logic/tryCatchResponse.ts';
import { addUserId } from '@/features/users/logic/addUserId.ts';

export const usersApi = {
  getUsers: () => {
    const requestUrl = endpoints.users();
    return tryCatchResponse<UserResponse[]>(apiClient.get, requestUrl)
      .then((users) => users.map(addUserId))
      .catch(() => []);
  },
};

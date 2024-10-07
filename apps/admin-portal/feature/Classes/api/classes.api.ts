import { endpoints, apiClient, ClassesResponse } from '../../../feature';
import { tryCatchResponse } from '../logic/tryCatchResponse';

export const classesApi = {
  getClasses: () => {
    const requestUrl = endpoints.classes();
    return tryCatchResponse<ClassesResponse[]>(apiClient.get, requestUrl)
      .then((classes) => classes)
      .catch(() => []);
  },
};

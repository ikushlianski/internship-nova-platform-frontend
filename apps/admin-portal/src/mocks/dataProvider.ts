import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteParams,
  DeleteResult,
  Identifier,
  RaRecord,
} from 'react-admin';
import { updateResourceData, getDataForResource, generateNewId } from '../utils/Utils';
import { IUser } from '../types/User';
import { IStudent } from '../types/Student';
import { ITeacher } from '../types/Teacher';
import { IAdmin } from '../types/Admin';
import { IManager } from '../types/Manager';
import { ISales } from '../types/Sales';
import { ISpectator } from '../types/Spectator';
import { INoRole } from '../types/NoRole';
import { handleErrorResponse } from '../utils/Utils';

type UserRoles = IUser | IStudent | ITeacher | IAdmin | IManager | ISales | ISpectator | INoRole;

const apiV1: string = 'v1';

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = 'id', order = 'ASC' || 'DESC' } = params.sort || {};

    try {
      const response = await fetch(`/api/${apiV1}/${resource}?page=${page}&perPage=${perPage}`);

      if (!response.ok) {
        await handleErrorResponse(response);
      }

      const data = getDataForResource(resource);

      const total = data.length;
      const sortedData = [...data].sort((a, b) => {
        if (a[field] < b[field]) return order === 'ASC' ? -1 : 1;
        if (a[field] > b[field]) return order === 'ASC' ? 1 : -1;
        return 0;
      });

      const paginatedData = sortedData.slice((page - 1) * perPage, page * perPage);

      return {
        data: paginatedData,
        total,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getOne: async (resource, params) => {
    try {
      const response = await fetch(`/api/${apiV1}/${resource}/${params.id}`);

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const data = getDataForResource(resource);
      const item = data.find((item: { id: number }) => String(item.id) == params.id);
      if (!item) {
        throw new Error(`Resource ${resource} with ID ${params.id} not found`);
      }

      return {
        data: item,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getMany: async (resource, params) => {
    try {
      const response = await fetch(`/api/${apiV1}/${resource}/${params.ids.join(', ')}`);

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const data = getDataForResource(resource);
      const items = data.filter((item: { id: number }) => {
        return params.ids.includes(item.id);
      });

      if (items.length === 0) {
        throw new Error(`No resources found for IDs: ${params.ids.join(', ')}`);
      }
      return {
        data: items,
      };
      if (items.length === 0) {
        throw new Error(`No resources found for IDs: ${params.ids.join(', ')}`);
      }

      return {
        data: items,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getManyReference: async (resource, params) => {
    try {
      const response = await fetch(
        `/api/${apiV1}/${resource}?${params.target}=${params.id}&page=${params.pagination?.page}&perPage=${params.pagination?.perPage}`,
      );

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const { target, id } = params;
      const { page = 1, perPage = 10 } = params.pagination || {};
      const { field = 'id', order = 'ASC' || 'DESC' } = params.sort || {};

      const data = getDataForResource(resource);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filteredData = data.filter((item: any) => item[target] === id);
      const total = filteredData.length;

      const sortedData = [...filteredData].sort((a, b) => {
        if (a[field] < b[field]) return order === 'ASC' ? -1 : 1;
        if (a[field] > b[field]) return order === 'ASC' ? 1 : -1;
        return 0;
      });

      const paginatedData = sortedData.slice((page - 1) * perPage, page * perPage);

      return {
        data: paginatedData,
        total,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateMany: async (resource, params) => {
    try {
      const response = await fetch(`/api/${apiV1}/${resource}/${params.ids}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ids: params.ids,
          data: params.data,
        }),
      });

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const data = getDataForResource(resource);
      const updatedData = data.map((item) => {
        if (params.ids.includes(item.id)) {
          return { ...item, ...params.data };
        }
        return item;
      });

      updateResourceData(resource, updatedData);

      return {
        data: params.ids,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteMany: async (resource, params) => {
    try {
      const response = await fetch(`/api/${apiV1}/${resource}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: params.ids }),
      });

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const data = getDataForResource(resource);
      const filteredData = data.filter((item) => !params.ids.includes(item.id));

      updateResourceData(resource, filteredData);

      return {
        data: params.ids,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  create: async <T extends Omit<UserRoles, 'id'>>(
    resource: string,
    params: CreateParams<T>,
  ): Promise<CreateResult<T & { id: Identifier }>> => {
    try {
      const response = await fetch(`http://localhost:3000/api/${apiV1}/${resource}`, {
        method: 'POST',
        credentials:"include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params.data),
      });

        const responseBody = await response.json();
      if (!response.ok||responseBody.status!=200) {
        await handleErrorResponse(new Response(JSON.stringify(responseBody)));
      }
      const data = getDataForResource(resource);
      const newId = generateNewId(data);
      const newItem = { id: newId, ...params.data } as T & { id: Identifier };
      const updatedData = [...data, newItem];
      updateResourceData(resource, updatedData);

      return {
        data: newItem,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  update: async (resource, params) => {
    try {
      const response = await fetch(`/api/${apiV1}/${resource}/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params.data),
      });

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const data = getDataForResource(resource);
      const itemIndex = data.findIndex((item: { id: number }) => String(item.id) === params.id);

      if (itemIndex === -1) {
        throw new Error(`Resource ${resource} with ID ${params.id} not found`);
      }

      const updatedItem = { ...data[itemIndex], ...params.data };
      const updatedData = [...data.slice(0, itemIndex), updatedItem, ...data.slice(itemIndex + 1)];
      updateResourceData(resource, updatedData);

      return {
        data: updatedItem,
      };
      return {
        data: updatedItem,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  delete: async <RecordType extends RaRecord>(
    resource: string,
    params: DeleteParams<RecordType>,
  ): Promise<DeleteResult<RecordType>> => {
    try {
      const response = await fetch(`/api/${apiV1}/${resource}/${params.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        await handleErrorResponse(response);
      }
      const data = getDataForResource(resource);
      const itemIndex = data.findIndex((item: RecordType) => item.id === params.id);

      if (itemIndex === -1) {
        throw new Error(`Resource ${resource} with ID ${params.id} not found`);
      }

      const updatedData = [...data.slice(0, itemIndex), ...data.slice(itemIndex + 1)];

      updateResourceData(resource, updatedData);

      return {
        data: { id: params.id } as RecordType,
      };
      return {
        data: { id: params.id } as RecordType,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default dataProvider;

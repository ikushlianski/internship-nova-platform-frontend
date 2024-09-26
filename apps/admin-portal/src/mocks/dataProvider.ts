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

type UserRoles = IUser | IStudent | ITeacher | IAdmin | IManager | ISales | ISpectator | INoRole;

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = 'id', order = 'ASC' } = params.sort || {};

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
  },
  getOne: async (resource, params) => {
    const data = getDataForResource(resource);
    const item = data.find((item: { id: number }) => String(item.id) == params.id);
    if (!item) {
      throw new Error(`Resource ${resource} with ID ${params.id} not found`);
    }

    return {
      data: item,
    };
  },
  getMany: async (resource, params) => {
    const data = getDataForResource(resource);
    const items = data.filter((item: { id: number }) => params.ids.includes(item.id));

    if (items.length === 0) {
      throw new Error(`No resources found for IDs: ${params.ids.join(', ')}`);
    }
    return {
      data: items,
    };
  },
  getManyReference: async (resource, params) => {
    const { target, id } = params;
    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = 'id', order = 'ASC' } = params.sort || {};

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
  },

  updateMany: async (resource, params) => {
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
  },
  deleteMany: async (resource, params) => {
    const data = getDataForResource(resource);
    const filteredData = data.filter((item) => !params.ids.includes(item.id));

    updateResourceData(resource, filteredData);

    return {
      data: params.ids,
    };
  },

  create: async <T extends Omit<UserRoles, 'id'>>(
    resource: string,
    params: CreateParams<T>,
  ): Promise<CreateResult<T & { id: Identifier }>> => {
    const data = getDataForResource(resource);
    const newId = generateNewId(data);
    const newItem = { id: newId, ...params.data } as T & { id: Identifier };
    const updatedData = [...data, newItem];
    updateResourceData(resource, updatedData);

    return {
      data: newItem,
    };
  },

  update: async (resource, params) => {
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
  },

  delete: async <RecordType extends RaRecord>(
    resource: string,
    params: DeleteParams<RecordType>,
  ): Promise<DeleteResult<RecordType>> => {
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
  },
};

export default dataProvider;

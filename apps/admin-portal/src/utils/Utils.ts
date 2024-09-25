/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Users,
  Students,
  Teachers,
  Paths,
  Classes,
  Admins,
  Managers,
  Sales,
  Spectators,
  NoRoles,
} from '../mocks/data/entities.json';
import { HttpResponse } from 'msw';
import { showNotify } from './Notification/globalNotify';
import { UserRole as Role } from '@repo/shared-types/user';
import { User } from '@repo/shared-types/user';
import { authProvider } from '@/features';

// A user can have multiple roles in ecosystem applications, with
// A user can have multiple roles in ecosystem applications, with
// the most powerful role being dominant.

export function getPrimaryRole(user: User): string {
  const rolePriority: Partial<Record<Role, number>> = {
    [Role.Admin]: 6,
    [Role.Manager]: 5,
    [Role.Sale]: 4,
    [Role.Teacher]: 3,
    [Role.Student]: 2,
    [Role.Spectator]: 1,
    [Role.NoRole]: 0,
  };

  return user.roles.reduce((prev, curr) => {
    return (rolePriority[curr] || 0) > (rolePriority[prev] || 0) ? curr : prev;
  });
}

//when making roles singular, not plural, function to make rosourses in plural
export const roleToResourceMap: Record<string, string> = {
  [Role.User]: 'users',
  [Role.Student]: 'students',
  [Role.Teacher]: 'teachers',
  [Role.Path]: 'paths',
  [Role.Class]: 'classes',
  [Role.Admin]: 'admins',
  [Role.Manager]: 'managers',
  [Role.Spectator]: 'spectators',
  [Role.NoRole]: 'noroles',
  [Role.Sale]: 'sales',
};

//Function for gettin data from `entities.json` file
export const getDataForResource = (resource: string): any[] => {
  console.log(`Requesting data for resource: ${resource}`);
  switch (resource) {
    case 'users':
      return Users;
    case 'students':
      return Students;
    case 'teachers':
      return Teachers;
    case 'paths':
      return Paths;
    case 'classes':
      return Classes;
    case 'admins':
      return Admins;
    case 'managers':
      return Managers;
    case 'sales':
      return Sales;
    case 'spectators':
      return Spectators;
    case 'noroles':
      return NoRoles;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
};

//Function for "UpdateMany "to update data in the `entities.json` file
export const updateResourceData = (resource: string, updatedData: any[]): void => {
  switch (resource) {
    case 'users':
      Users.splice(0, Users.length, ...updatedData);
      break;
    case 'students':
      Students.splice(0, Students.length, ...updatedData);
      break;
    case 'teachers':
      Teachers.splice(0, Teachers.length, ...updatedData);
      break;
    case 'paths':
      Paths.splice(0, Paths.length, ...updatedData);
      break;
    case 'classes':
      Classes.splice(0, Classes.length, ...updatedData);
      break;
    case 'admins':
      Admins.splice(0, Admins.length, ...updatedData);
      break;
    case 'managers':
      Managers.splice(0, Managers.length, ...updatedData);
      break;
    case 'sales':
      Sales.splice(0, Sales.length, ...updatedData);
      break;
    case 'spectators':
      Spectators.splice(0, Spectators.length, ...updatedData);
      break;
    case 'noroles':
      NoRoles.splice(0, NoRoles.length, ...updatedData);
      break;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
};

export const generateNewId = (data: any[]): number => {
  return data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
};

const NOTIFICATION_DISPLAY_DURATION = {
  long: 3000,
  fast: 1500,
};
// GET request function
export const handleGetRequest = <T>(collection: T[], map: Map<number, T>, entityName: string) => {
  showNotify(`${entityName} successfully loaded!`, {
    type: 'success',
    autoHideDuration: NOTIFICATION_DISPLAY_DURATION.fast,
  });
  return HttpResponse.json([...collection, ...map]);
};

// GET by Id request function
export const handleGetIdRequest = <T extends { id: number }>(
  params: { id?: string },
  collection: T[],
  entityName: string,
) => {
  const id = params.id ? Number(params.id) : null;

  const response = id ? collection.find((item) => item.id === id) : [...collection];

  if (response) {
    showNotify(`${entityName} with ID ${id} successfully found!`, {
      type: 'success',
      autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
    });
    return HttpResponse.json(response);
  } else {
    showNotify(`${entityName} with ID ${id} not found!`, {
      type: 'error',
      autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
    });
    return HttpResponse.json(null, { status: 404 });
  }
};

// POST request function
export const handlePostRequest = async <T>(
  request: Request,
  collection: Map<number, T>,
  entityName: string,
) => {
  try {
    const newItem = (await request.json()) as T & { id: number };

    if (!newItem || typeof newItem.id !== 'number') {
      return HttpResponse.json({ error: `Invalid ${entityName} data` }, { status: 400 });
    }

    collection.set(newItem.id, newItem);
    showNotify(`${entityName} successfully loaded!`, {
      type: 'success',
      autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
    });
    return HttpResponse.json(newItem, { status: 201 });
  } catch (error) {
    showNotify('Failed to parse request body', {
      type: 'error',
      autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
    });
    return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
  }
};

// PUT request function
export const handlePutRequest = async <T extends { id: number }>(
  params: { id?: string },
  request: Request,
  collection: T[],
  map: Map<number, T>,
  entityName: string,
) => {
  try {
    const { id } = params;
    const updatedItem = (await request.json()) as T & { id: number };

    if (!updatedItem || typeof updatedItem.id !== 'number') {
      return HttpResponse.json({ error: `Invalid ${entityName} data` }, { status: 400 });
    }

    collection = collection.map((item) => (item.id === Number(id) ? updatedItem : item));
    if (map.has(Number(id))) {
      map.set(Number(id), updatedItem);
    }
    showNotify(`${entityName} with ID ${id} successfully updated`, {
      type: 'success',
      autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
    });
    return HttpResponse.json(updatedItem);
  } catch (error) {
    showNotify(`'Failed to parse request body'`, {
      type: 'error',
      autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
    });
    return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
  }
};

// DELETE request function
export const handleDeleteRequest = <T extends { id: number }>(
  params: { id?: string },
  collection: T[],
  entityName: string,
) => {
  const { id } = params;
  collection = collection.filter((item) => String(item.id) !== id);
  showNotify(`${entityName} with ID ${id} successfully deleted`, {
    type: 'success',
    autoHideDuration: NOTIFICATION_DISPLAY_DURATION.long,
  });
  return HttpResponse.json({ id });
};

//functions to make arrays in UserCreateForm
export const parseToNumberArray = (input: any) => {
  if (typeof input === 'string') {
    return input.split(',').map((id: string) => Number(id.trim()));
  }
  if (Array.isArray(input)) {
    return input.map((id: any) => Number(id));
  }
  return typeof input !== 'undefined' ? [Number(input)] : [];
};

//function for initializing authProvider.checkError({ status: 401 })
export const handleErrorResponse = async (response: Response) => {
  if (response.status === 401) {
    await authProvider.checkError({ status: 401 });
    throw new Error('Unauthorized');
  }
  const error = await response.json();
  throw new Error(error.message || 'Unknown Error');
};

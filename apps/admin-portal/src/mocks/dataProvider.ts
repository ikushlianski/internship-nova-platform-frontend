import { IUser } from '../types/User';
import { IStudent } from '../types/Student';
import { IMentor } from '../types/Mentor';
import { IPath } from '../types/Path';
import { IClass } from '../types/Class';
import { users, students, mentors, paths, classes } from './data/entities.json';
import {  DataStore, DataProvider, IEntity, GetManyReferenceParams, GetManyReferenceResult, CreateParams, CreateResult } from '../types/DataProviderTypes';
const dataStore: DataStore = {
    users: users as IUser[],
    students: students as IStudent[],
    mentors: mentors as IMentor[],
    paths: paths as IPath[],
    classes: classes as IClass[],
};
console.log('DataStore:', dataStore);

const dataProvider: DataProvider<IUser | IStudent | IMentor | IPath | IClass> = {
    getList: (resource) => {
        switch (resource) {
            case 'users':
                return Promise.resolve({ data: users as IUser[], total: users.length });
            case 'students':
                return Promise.resolve({ data: students as IStudent[], total: students.length });
            case 'mentors':
                return Promise.resolve({ data: mentors as IMentor[], total: mentors.length });
            case 'paths':
                return Promise.resolve({ data: paths as IPath[], total: paths.length });
            case 'classes':
                return Promise.resolve({ data: classes as IClass[], total: classes.length });
            default:
                return Promise.reject('Unknown resource');
        }
    },
    getOne: (resource, { id }) => {
        const data = { users, students, mentors, paths, classes }[resource];
        const item = (data as (IUser | IStudent | IMentor | IPath | IClass)[]).find(
            (item) => item.id === id
        );

        if (!item) {
            return Promise.reject(new Error(`Item with id ${id} not found in ${resource}`));
        }

        return Promise.resolve({ data: item });
    },
    getMany: (resource, { ids }) => {
        const data = dataStore[resource];
        console.log(`Resource: ${resource}, Data:`, data);
        if (!data) {
            return Promise.reject(new Error(`Resource ${resource} not found`));
        }
        const items = (data as (IUser | IStudent | IMentor | IPath | IClass)[]).filter(item => ids.includes(item.id));
        return Promise.resolve({ data: items });
    },
    getManyReference: <R extends IEntity>(resource: string, { target, id, pagination, sort }: GetManyReferenceParams<R>): Promise<GetManyReferenceResult<R>> => {
        const data = dataStore[resource] as R[];

        // Фильтрация
        const items = data.filter((item) => item[target] === id);

        // Сортировка
        const sortedItems = items.sort((a, b) => {
            const aValue = a[sort.field];
            const bValue = b[sort.field];

            if (sort.order === 'ASC') {
                return aValue > bValue ? 1 : (aValue < bValue ? -1 : 0);
            } else {
                return aValue < bValue ? 1 : (aValue > bValue ? -1 : 0);
            }
        });

        // Пагинация
        const start = (pagination.page - 1) * pagination.perPage;
        const end = start + pagination.perPage;
        const paginatedItems = sortedItems.slice(start, end);
        const total = sortedItems.length;

        return Promise.resolve({
            data: paginatedItems,
            total,
            pageInfo: {
                hasNextPage: end < total,
                hasPreviousPage: start > 0
            }
        });
    },
    create: <T extends IEntity>(resource: string, { data }: CreateParams<T>): Promise<CreateResult<T>> => {
        // Генерация нового ID
        const newId = Date.now(); // Простейший способ генерации уникального ID, замените на ваш механизм

        // Создание новой записи
        const newItem = { id: newId, ...data } as T;

        // Добавление новой записи в соответствующий ресурс
        if (dataStore[resource]) {
            dataStore[resource].push(newItem);
        } else {
            dataStore[resource] = [newItem];
        }

        return Promise.resolve({ data: newItem });
    },

    update: (resource, { id, data }) => {
        const dataStore = { users, students, mentors, paths, classes };
        const resourceData = dataStore[resource] as (IUser | IStudent | IMentor | IPath | IClass)[];

        const itemIndex = resourceData.findIndex(item => item.id === id);
        if (itemIndex === -1) {
            return Promise.reject(new Error(`Item with id ${id} not found in ${resource}`));
        }

        // Обновление записи
        const updatedItem = { ...resourceData[itemIndex], ...data };
        resourceData[itemIndex] = updatedItem;

        return Promise.resolve({ data: updatedItem });
    },
    updateMany: (resource, { ids, data }) => {
        const dataStore = { users, students, mentors, paths, classes };
        const resourceData = dataStore[resource] as (IUser | IStudent | IMentor | IPath | IClass)[];
        const updatedIds: number[] = [];

        ids.forEach(id => {
            const itemIndex = resourceData.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                resourceData[itemIndex] = { ...resourceData[itemIndex], ...data };
                updatedIds.push(id);
            }
        });

        return Promise.resolve({ data: updatedIds });
    },
    delete: (resource, { id }) => {
        const dataStore = { users, students, mentors, paths, classes };
        const resourceData = dataStore[resource] as (IUser | IStudent | IMentor | IPath | IClass)[];
        const itemIndex = resourceData.findIndex(item => item.id === id);
        if (itemIndex === -1) {
            return Promise.reject(new Error(`Item with id ${id} not found in ${resource}`));
        }

        const deletedItem = resourceData.splice(itemIndex, 1)[0];

        return Promise.resolve({ data: deletedItem });
    },
    deleteMany: (resource, { ids }) => {
        const dataStore = { users, students, mentors, paths, classes };
        const resourceData = dataStore[resource] as (IUser | IStudent | IMentor | IPath | IClass)[];
        const deletedIds: number[] = [];

        ids.forEach(id => {
            const itemIndex = resourceData.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                resourceData.splice(itemIndex, 1);
                deletedIds.push(id);
            }
        });

        return Promise.resolve({ data: deletedIds });
    },
}

export default dataProvider
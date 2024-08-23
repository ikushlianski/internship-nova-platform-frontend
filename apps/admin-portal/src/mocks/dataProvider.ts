import { CreateParams, CreateResult, DataProvider, DeleteParams, DeleteResult, Identifier, RaRecord } from "react-admin"
import { updateResourceData, getDataForResource, generateNewId } from '../utils/Utils'

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {}
        const { field = 'id', order = 'ASC' || 'DESC' } = params.sort || {}

        const data = getDataForResource(resource)

        const total = data.length
        const sortedData = [...data].sort((a, b) => {
            if (a[field] < b[field]) return order === 'ASC' ? -1 : 1;
            if (a[field] > b[field]) return order === 'ASC' ? 1 : -1;
            return 0;
        })

        const paginatedData = sortedData.slice((page - 1) * perPage, page * perPage)

        return {
            data: paginatedData,
            total,
        }
    },
    getOne: async (resource, params) => {
        const data = getDataForResource(resource);        
        const item = data.find((item: { id: number }) =>String(item.id) == params.id)
        if (!item) {
            throw new Error(`Resource ${resource} with ID ${params.id} not found`)
        }

        return {
            data: item
        }
    },
    getMany: async (resource, params) => {
        const data = getDataForResource(resource);
        const items = data.filter((item: { id: number }) => params.ids.includes(item.id));

        if (items.length === 0) {
            throw new Error(`No resources found for IDs: ${params.ids.join(', ')}`);
        }

        return {
            data: items
        };
    },
    getManyReference: async (resource, params) => {
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
        const filteredData = data.filter(item => !params.ids.includes(item.id));

        updateResourceData(resource, filteredData);

        return {
            data: params.ids, 
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: async <RecordType extends Omit<RaRecord, "id"> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(
        resource: string,
        params: CreateParams<RecordType>
    ): Promise<CreateResult<ResultRecordType>> => {
        const data = getDataForResource(resource);
        
        // Генерация нового уникального ID
        const newId = generateNewId(data);
        
        // Создание новой записи с сгенерированным ID
        const newItem: ResultRecordType = { id: newId, ...params.data } as unknown as ResultRecordType;
        
        // Добавление новой записи в массив данных
        const updatedData = [...data, newItem];
        
        // Обновление данных ресурса
        updateResourceData(resource, updatedData);

        return {
            data: newItem,
        };
    },

    update: async (resource, params) => {
        const data = getDataForResource(resource);

        // Найти индекс записи с указанным id
        const itemIndex = data.findIndex((item: { id: number }) => item.id === params.id);

        if (itemIndex === -1) {
            throw new Error(`Resource ${resource} with ID ${params.id} not found`);
        }

        // Обновить запись с указанным id
        const updatedItem = { ...data[itemIndex], ...params.data };

        // Обновить массив данных с новыми значениями
        const updatedData = [
            ...data.slice(0, itemIndex),
            updatedItem,
            ...data.slice(itemIndex + 1),
        ];

        // Сохранить обновленные данные в ресурс
        updateResourceData(resource, updatedData);

        return {
            data: updatedItem, // Возвращаем обновленный объект
        };
    },

    delete: async <RecordType extends RaRecord>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> => {
        const data = getDataForResource(resource);
        const itemIndex = data.findIndex((item: RecordType) => item.id === params.id);

        if (itemIndex === -1) {
            throw new Error(`Resource ${resource} with ID ${params.id} not found`);
        }

        const updatedData = [
            ...data.slice(0, itemIndex),
            ...data.slice(itemIndex + 1),
        ];

        updateResourceData(resource, updatedData);

        return {
            data: { id: params.id } as RecordType, // Возвращаем объект с id в формате RecordType
        };
    },
}

export default dataProvider
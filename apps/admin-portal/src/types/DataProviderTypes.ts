import { Identifier } from 'react-admin';

export interface DataProvider<T extends IEntity> {
    getList: (resource: Resource, params: GetListParams) => Promise<{ data: T[], total: number }>;
    getOne: (resource: Resource, params: GetOneParams) => Promise<GetOneResult<T>>;
    getMany: (resource: Resource, params: GetManyParams) => Promise<GetManyResult<T>>;
    getManyReference: <R extends IEntity>(resource: string, params: GetManyReferenceParams<R>) => Promise<GetManyReferenceResult<R>>;
    create: (resource: string, params: CreateParams<T>) => Promise<CreateResult<T>>;
    update: (resource: Resource, params: UpdateParams<T>) => Promise<UpdateResult<T>>;
    updateMany: (resource: Resource, params: UpdateManyParams<T>) => Promise<UpdateManyResult>;
    delete: (resource: Resource, params: DeleteParams) => Promise<DeleteResult>;
    deleteMany: (resource: Resource, params: DeleteManyParams) => Promise<DeleteManyResult>;
}

type Resource = 'users' | 'students' | 'mentors' | 'paths' | 'classes'

interface GetListParams {
    pagination: {
        page: number;
        perPage: number;
    };
    sort: {
        field: string;
        order: 'ASC' | 'DESC';
    };
    filter: {
        [key: string]: string;
    };
}

interface GetOneParams {
    id: number;
    // meta?: any;
    signal?: AbortSignal;
}

interface GetOneResult<T> {
    data: T;
}

interface GetManyParams {
    ids: Identifier[];
    signal?: AbortSignal;
}

interface GetManyResult<T> {
    data: T[];
}

export interface IEntity {
    id: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface GetManyReferenceParams<T extends IEntity> {
    target: keyof T; // Поле для фильтрации
    id: number;
    pagination: { page: number; perPage: number };
    sort: { field: keyof T; order: 'ASC' | 'DESC' };
    // filter: any;
    // meta?: any;
    signal?: AbortSignal;
}

export interface GetManyReferenceResult<T> {
    data: T[];
    total?: number;
    pageInfo?: {
        hasNextPage?: boolean;
        hasPreviousPage?: boolean;
    };
}

export interface CreateParams<T extends IEntity> {
    data: Partial<T>;
    // meta?: any;
}

export interface CreateResult<T extends IEntity> {
    data: T;
}
export interface DataStore {
    [resource: string]: IEntity[];
}


interface UpdateParams<T> {
    id: number;
    data: Partial<T>;
    previousData: T;

}

interface UpdateResult<T> {
    data: T;
}

interface UpdateManyParams<T> {
    ids: number[];
    data: Partial<T>;

}

interface UpdateManyResult {
    data: number[];
}
interface DeleteParams {
    id: number;

}

interface DeleteResult {
    // data: any;
}

interface DeleteManyParams {
    ids: number[];
}

interface DeleteManyResult {
    data: number[];
}
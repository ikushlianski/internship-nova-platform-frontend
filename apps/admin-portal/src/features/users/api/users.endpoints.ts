export enum Endpoints {
  Root = 'users',
}

export enum Directories {
  Root = '/users',
}

export type DynamicEndpoint = () => string;

export const endpoints: Record<Endpoints, DynamicEndpoint> = {
  [Endpoints.Root]: () => Directories.Root,
};

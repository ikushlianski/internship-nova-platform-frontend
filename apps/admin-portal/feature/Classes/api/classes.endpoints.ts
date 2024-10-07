export enum Endpoints {
  Root = 'classes',
}

export enum Directories {
  Root = '/classes',
}

export type DynamicEndpoint = () => string;

export const endpoints: Record<Endpoints, DynamicEndpoint> = {
  [Endpoints.Root]: () => Directories.Root,
};

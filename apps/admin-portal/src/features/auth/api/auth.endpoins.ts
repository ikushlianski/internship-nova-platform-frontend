export enum Endpoints {
  Me = 'me',
}

export enum Directories {
  Root = 'auth',
  Me = 'me',
}

export type StaticEndpoint = string;

export const endpoints: Record<Endpoints, StaticEndpoint> = {
  [Endpoints.Me]: `/${Directories.Me}`,
};

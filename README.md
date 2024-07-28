# Nova English Client Apps

This monorepo is using Turborepo and houses all the frontend client applications for Nova English.

See backend platform at [`nova-platform-api` repo](https://github.com/neo-solutions-global/nova-platform-api) if you have access.

## Apps and Packages

- `nova-english-marketing-website`: a [Next.js](https://nextjs.org/) app
- `spaced-repetition-tool`: a React app
- `student-platform`: a Next.js app
- `admin-portal`: a React app, most likely it will be based on React Admin 
- `@repo/ui`: a React component library shared by every application
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


## Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

## Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

## Adding a new app or package

`npx turbo gen workspace --copy`


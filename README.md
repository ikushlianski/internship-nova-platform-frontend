# Nova English Client Apps

This monorepo is using Turborepo and houses all the frontend client applications for Nova English.

See backend platform at [`nova-platform-api` repo](https://github.com/neo-solutions-global/nova-platform-api) if you have access.

## Apps and Packages

- `nova-english-marketing-website`: a [Next.js](https://nextjs.org/) app, runs on port 8000
- `student-platform`: a Next.js app, runs on port 8001
- `admin-portal`: a React app, most likely it will be based on React Admin, runs on port 8002
- `spaced-rep-tool-web`: a React app, runs on port 8003
- `spaced-rep-tool-mobile`: a React Native app, runs on port 8004
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


### Adding a package as dependency to other packages

1. `npx turbo gen workspace --copy`
2. Choose `package` and copy from any existing package so most of files are auto-created
3. Ensure your package is named `@repo/<your-package-name>`
4. Add the package as a dependency to any apps you want: `@repo/<your-package-name>: "*"`


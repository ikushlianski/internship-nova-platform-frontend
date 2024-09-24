# Nova English Client Apps

This monorepo is using Turborepo and houses all the frontend client applications for Nova English.

See backend platform at [`nova-platform-api` repo](https://github.com/neo-solutions-global/nova-platform-api) if you have access.

## Apps and Packages

- `nova-english-marketing-website`: a [Next.js](https://nextjs.org/) app
- `student-platform`: a Next.js app
- `admin-portal`: a React app, based on React Admin
- `spaced-rep-tool-web`: a React app
- `spaced-rep-tool-mobile`: a React Native app (needs to be converted into a React Native app, currently just a React app)
- `@repo/ui`: a React component library shared by every application
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


## Working locally

- To run monorepo commands, install `turbo` globally: `npm install turbo --global`
- Add .env.development.local files to projects https://www.notion.so/Environment-variables-50add7dc3b6a45ae993065ac0f3c7bdb
- To develop all apps and packages, run the following command:

```
cd nova-platform-frontend-apps
npm i
npm run build
turbo run dev
```

- You can run all tests from the root dir with `npx vitest` or `turbo test`. The latter will run tests in parallel and show you all test runs from all projects where there's a `test` script in `package.json`. Choose whatever option you like.
- To run tests for a specific file, run `npx vitest <path-to-file>`.

## Suggested Folder Structure

### General Repo Structure

Monorepo based on Turborepo.

- `apps/`: all frontend applications
- `packages/`: all packages that are shared between all frontends

### Single App Structure

- `app`: Next.js-specific routes and nothing else
- `features`: folders by each particular business feature
  - `feature-name/`, e.g. `calendar`
    - `api`: all hooks and fetch calls to backend
    - `logic`: all business logic and pure data manipulation. No side effects like data fetching, no `.tsx` files
    - `types`: all types related to this feature
    - `ui`: all React components that are used in this feature
    - `utils`: if you prefer, but should be covered in `logic` already :)

## Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

## Adding a new app or package

`npx turbo gen workspace --copy`


### Adding a package as dependency to other packages

1. `npx turbo gen workspace --copy`
2. Choose `package` and copy from any existing package so most of files are auto-created
3. Ensure your package is named `@repo/<your-package-name>`
4. Add the package as a dependency to any apps you want: `@repo/<your-package-name>: "*"`


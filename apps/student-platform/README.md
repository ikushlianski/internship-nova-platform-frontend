This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Folder structure

- **/components** - shared UI components and overridden components
- **/features** - complicated components that are valuable for business
  - **/types** - data model: interfaces, stores, and business logic.
  - **/api** - api requests
  - **/lib** - utils code
  - **/ui** - everything related to UI display: UI components, styles etc.
- **/views** - pages UI and components
- **/shared** - shared app logic(hooks, libs, utils and etc.)

## Running Storybook

To start Storybook in development mode, run the following command:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook.
```

## Building Storybook

To create a static build of your Storybook for deployment, use the following command:

```bash
npm run build-storybook
# or
yarn build-storybook
# or
pnpm build-storybook
# or
bun build-storybook
```

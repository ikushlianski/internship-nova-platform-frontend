## Pre-commit Hooks Setup

### Automatic Setup

The pre-commit hooks are automatically configured after you run `git pull origin main` and `npm install`. This is handled by the `prepare` script in `package.json`, which initializes Husky and sets up the necessary Git hooks.

### Troubleshooting

If, for any reason, the hooks are not working as expected, you can manually set them up by running:

npm install husky lint-staged --save-dev
npx husky init

Next, create a file .husky/pre-commit and add the following command:

npx lint-staged && rm -rf .next && npm run build && npx turbo run test --continue

Additional Installations
Install the following dependencies for linting and formatting:

npm install eslint-import-resolver-typescript -D
npm install eslint-plugin-import -D
npm install eslint-plugin-react -D
npm install eslint-plugin-jsx-a11y -D
npm install --save-dev @rushstack/eslint-patch

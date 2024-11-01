# Next Template

A simple template for Next.js.

- [Next Template](#next-template)
  - [Stack](#stack)
  - [Branches](#branches)
  - [Setup](#setup)
  - [Resources](#resources)

## Stack

- Linting / Code Style
  - [eslint](https://www.npmjs.com/package/eslint)
    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
      - [ESLint | Next.js](https://nextjs.org/docs/app/building-your-application/configuring/eslint#prettier)
    - [eslint-plugin-tailwindcss](https://www.npmjs.com/package/eslint-plugin-tailwindcss)
    - [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library)
    - [eslint-plugin-jest-dom](https://www.npmjs.com/package/eslint-plugin-jest-dom)
    - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
    - [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file)
      - [Bulletproof React Guide](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-standards.md#file-naming-conventions)
    - [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
  - [prettier](https://www.npmjs.com/package/prettier)
    - [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
    - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
      - [Automatic Class Sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)
- Commits
  - [husky](https://www.npmjs.com/package/husky)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [commitlint](https://www.npmjs.com/package/@commitlint/cli)
    - [config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
    - [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - [commitizen](https://www.npmjs.com/package/commitizen)
    - [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
- Environment Variables
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [dotenv-expand](https://www.npmjs.com/package/dotenv-expand)
  - [@t3-oss/env-nextjs](https://www.npmjs.com/package/@t3-oss/env-nextjs)
    - [Documentation](https://env.t3.gg/docs/nextjs)
  - [cross-env](https://www.npmjs.com/package/cross-env)
- Styles / UI
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss)
  - [@nextui-org/react](https://www.npmjs.com/package/@nextui-org/react)
    - [NextUI](https://nextui.org/docs/guide/introduction)
  - [next-themes](https://www.npmjs.com/package/next-themes)
  - [@tabler/icons-react](https://www.npmjs.com/package/@tabler/icons-react)
    - [Tabler Icon Search](https://tabler.io/icons)
- Database
  - [drizzle-orm](https://www.npmjs.com/package/drizzle-orm)
  - [postgres](https://www.npmjs.com/package/postgres)
  - [drizzle-kit](https://www.npmjs.com/package/drizzle-kit)
- Authentication
  - [next-auth](https://www.npmjs.com/package/next-auth)
  - [@auth/drizzle-adapter](https://www.npmjs.com/package/@auth/drizzle-adapter)
    - [Auth.js Drizzle Adapter Documentation](https://authjs.dev/getting-started/adapters/drizzle)
- Testing
  - [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
  - [@testing-library/dom](https://www.npmjs.com/package/@testing-library/dom)
  - [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
  - [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)
  - [jest](https://www.npmjs.com/package/jest)
  - [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom)

## Branches

The main branch contains the entire setup. The following branches build on each other from top to bottom:

- [base](https://github.com/4nktt/next-template/tree/base)
  - eslint / prettier / vscode / husky / lint-staged / commitlint / commitzen
- [ui](https://github.com/4nktt/next-template/tree/ui)
  - layout / styles
  - dark / light theme toggle
- [env](https://github.com/4nktt/next-template/tree/env)
  - typesafe environment variables
- [auth](https://github.com/4nktt/next-template/tree/auth)
  - google oauth with no database
- [database](https://github.com/4nktt/next-template/tree/database)
  - basic drizzle schema with users / accounts / sessions
- [test](https://github.com/4nktt/next-template/tree/test) / [main](https://github.com/4nktt/next-template)
  - @testing-library/react
  - jest

## Setup

1. Install dependencies:

```sh
pnpm install
```

2. Copy the `.env` file:

```sh
cp .env.sample .env
```

3. Update the following values in the `.env` file:

```sh
NEXTAUTH_SECRET=<your-value-here>
GOOGLE_CLIENT_ID=<your-value-here>
GOOGLE_CLIENT_SECRET=<your-value-here>
```

4. Start the database:

```sh
docker compose up
```

5. Migrate the database:

```sh
pnpm run db:migrate
```

6. Start the app:

```sh
pnpm run dev
```

## Resources

- [Next.js Discord FAQs](https://nextjs-faq.com/)
  - ["Module not found" error on deployment but build works fine locally](https://nextjs-faq.com/module-not-found-due-to-case-sensitivity)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)

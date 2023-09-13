# Red Flag - Application Feature Flags Management Tool

Red Flag is a tool for managing application feature flags. Redflag allows for the management of features of internet connected applications. Allowing for features to be toggled for specific user segments without needing a new deployment or release.

## Use cases for Red Flag

- Collect features with beta user groups before releasing them to the entire user base.

- Quickly rollback of features which cause problems, or which recieve negative user feedback.

- Release features for premium users or provide trials for premium features.

## Getting Started

### Pre-requisites

#### Node.js

RedFlag requires Node.js. You will need to install it before you can run RedFlag. RedFlag has currently been tested with Node.js version 18.x.x.

#### Database

RedFlag requires a Postgres database. You will need access to a Postgres database to run RedFlag. You can install Postgres locally or use a cloud provider such as AWS RDS.

Once you have access to your database you will need to set the environment variable `DATABASE_URL` to a postgres connection string. For example the connections string may be `postgresql://<database-user-name>:<database-password>@<database-host>:<database-port>/<database-name>?schema=public`. The values in <> should be replaced with your specific database values.

### Running RedFlag

#### Install dependencies

The project is built using Next.js, you will need to use npm to install the dependencies:

```bash
npm install
```

#### Syncing your development database

RedFlag uses Prisma to manage the database. You will need to run the Prisma migrations to create the database tables. You can do this by running the following command:

```bash
npm run db:sync:dev
```

#### Starting the dev server

Once your database has successfully synced you can start the development server by running the following command:

```bash
npm run dev
```

By default this starts the application server on port 3000.

### Testing

Red Flags test suite is built using Jest and Cypress. You can run the tests using the following commands:

### Unit Tests

Unit tests are used to test individual functions in isolation. These tests are run using Jest. To run these tests use the following command:

```bash
npm run test:unit
```

### Component Tests

Component tests are used to test React components rendering in isolation. These tests are run using Cypress. To run these tests through the Cypress UI run the following command:

```bash
npm run test:component
```

Or the tests can be run in headless mode using the following command:

```bash
npm run test:component:headless
```

### End to End Tests

End to end tests are used to test the application as a whole. These tests start the application server and run tests against the application using a browser. These tests are run using Cypress. To run these tests through the Cypress UI run the following command:

```bash
npm run test:e2e
```

Or the tests can be run in headless mode using the following command:

```bash
npm run test:e2e:headless
```

## Documentation

To become familiar with the tools used in this project, refer to their documentation:

- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- Jest: https://jestjs.io/docs/getting-started
- Cypress: https://docs.cypress.io/guides/overview/why-cypress

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to the developers of Next.js, Prisma, Jest, and Cypress for providing such great tools for building and testing applications.

Happy coding! 🚀

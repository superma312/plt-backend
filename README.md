# NestJS GraphQL Project: Users and Products Backend API

NestJS GraphQL Project, a backend API for managing Users and Products

## Tech stack
- Code Nestjs/GraphQl development
- TypeORM with Sqlite

## Build
### Install dependencies

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Doc
You can explore the GraphQL API using the following endpoint:
http://localhost:3000/graphql

### User Create Mutation
To create a user, provide the user's name and email as input. You can use the following GraphQL mutation:

```bash
mutation {
  createUser(createUserInput: {
    email: "user@gmail.com",
    name: "Mark Dru"
  }) {
    name
    email
  }
}
```

### Product Create Mutation
To create a product, you need to provide the user's name and email, as well as the product's name and price as input. You can use the following GraphQL mutation:

```bash
mutation {
  createProduct(createProductInput: {
    name: "Product",
    price: 15.11
  }, createUserInput: {
    email: "user@gmail.com",
    name: "Mark Dru"
  }) {
    name
    price
  }
}
```

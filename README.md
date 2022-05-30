# TrueNorth Test

Mainly built using the following stack:

- [Nest.js](https://docs.nestjs.com/) - to build the entire backend architecture
    - [TypeORM.js](https://typeorm.io/) 
- [React.js](https://es.reactjs.org/) - to build the entire backend architecture
    - [Redux.js](https://es.redux.js.org/) 
    - [Redux-Saga](https://redux-saga.js.org/) 
- [MySQL](https://www.mysql.org/) - the DB to store app data
- [Mocha](https://mochajs.org/) - to test the app
- [ESLint](https://eslint.org/) - linter

## Versions

- Node.js: v16.13.1
- Npm: 8.1.2
- Docker Compose: 1.29.2, build 5becea4c

## Configuration

### Install libraries
`npm i`

### Test environment
- Start Test Docker
`npm run docker:test`
- In ANOTHER command line, WITHOUT stopping docker, generate test data model
`npm run db:migrate:test`
- To run test suite:
`npm run test`

### Local environment

- Start Local Docker
`npm run docker:local`
- In ANOTHER command line, WITHOUT stopping docker, generate local data model
`npm run db:migrate:local`
- Stop Local Docker
- Start Local Docker again
`npm run docker:local`
- Open Web App on browser
`http://localhost:3000/`
- Generate some tasks on Generate options
- List them later

### Final comments

- I implemented mark tasks as completed, as you can see in the test suite, but I have no time to implement them in the IU 




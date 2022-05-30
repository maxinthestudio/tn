import * as dotenv from 'dotenv-flow'
dotenv.config()
import * as getEnv from 'getenv'
import { join } from 'path'

const MYSQL_LOGGING = getEnv.bool('MYSQL_LOGGING')
const MYSQL_HOST = getEnv('MYSQL_HOST')
const MYSQL_PORT = getEnv.int('MYSQL_PORT')
const MYSQL_USERNAME = getEnv('MYSQL_USER')
const MYSQL_PASSWORD = getEnv('MYSQL_PASSWORD')
const MYSQL_DATABASE = getEnv('MYSQL_DATABASE')

const connectionOptions = {
    type: 'mysql',
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    logging: MYSQL_LOGGING,
    migrations: [join(__dirname, '../../migrations/**/*{.ts,.js}')],
    cli: {
        migrationsDir: '../../migrations'
    },
    synchronize: false,
    extra: {
        application_name: 'thestudio-migrations',
        connectionLimit: 40,
    },
    multipleStatements: true,
    logger: null,
    seeds: [join(__dirname, '../../seeds/**/*{.ts,.js}')]
}

export default connectionOptions
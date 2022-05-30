import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as getEnv from 'getenv'
import * as modelentities from '../model'

const MYSQL_LOGGING = getEnv.bool('MYSQL_LOGGING')
const MYSQL_HOST = getEnv('MYSQL_HOST')
const MYSQL_PORT = getEnv.int('MYSQL_PORT')
const MYSQL_USER = getEnv('MYSQL_USER')
const MYSQL_PASSWORD = getEnv('MYSQL_PASSWORD')
const MYSQL_DATABASE = getEnv('MYSQL_DATABASE')

export const entities = Object.values(modelentities)

export const rdbmsParamsConfig = (): TypeOrmModuleOptions => {
  const options: TypeOrmModuleOptions = {
    type: 'mysql',
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    logging: MYSQL_LOGGING,
    extra: {
      application_name: 'truenorth',
      connectionLimit: 100,
      keepConnectionAlive: true
    },
    logger: 'simple-console',
    synchronize: false,
    entities,
  }
  return options
}

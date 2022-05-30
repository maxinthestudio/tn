import * as dotenv from 'dotenv-flow'
dotenv.config()
import * as getEnv from 'getenv'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ormTransactionsConfig } from './config';

const APP_PORT = getEnv.int('APP_PORT')

async function bootstrap() {
  ormTransactionsConfig()
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(APP_PORT);
}
bootstrap();

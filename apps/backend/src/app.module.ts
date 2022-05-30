import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rdbmsParamsConfig } from './config';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(rdbmsParamsConfig()), TasksModule],
})
export class AppModule { }

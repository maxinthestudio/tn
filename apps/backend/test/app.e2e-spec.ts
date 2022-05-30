import * as dotenv from 'dotenv-flow'
dotenv.config()
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as expect from 'expect';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ormTransactionsConfig } from '../src/config';

describe('TrueNorth Backend Tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    ormTransactionsConfig()
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
    await app.init();
  });

  it('/tasks (GET)', async () => {

    // Save at least one task
    await request(app.getHttpServer())
      .post('/tasks')
      .send({ quantity: 1 })
      .expect(HttpStatus.CREATED)

    // Get all tasks
    const { body: { tasks } } = await request(app.getHttpServer())
      .get('/tasks')
      .expect(HttpStatus.OK)

    expect(tasks).toBeDefined()
    expect(tasks.length).toBeDefined()
    expect(tasks.length).toBeGreaterThanOrEqual(1)

  });

  it('/tasks (POST)', async () => {
    // tasks required to save
    const tasksToSave = 5
    const { body: { tasks } } = await request(app.getHttpServer())
      .post('/tasks')
      .send({ quantity: tasksToSave })
      .expect(HttpStatus.CREATED)

    // compare tasks required to save against tasks actually saved
    expect(tasks).toBeDefined()
    expect(tasks.length).toBeDefined()
    expect(tasks.length).toBe(tasksToSave)
  });

  it('/tasks (PUT)', async () => {
    // tasks required to save
    const tasksToSave = 1
    const { body: { tasks } } = await request(app.getHttpServer())
      .post('/tasks')
      .send({ quantity: tasksToSave })
      .expect(HttpStatus.CREATED)

    await request(app.getHttpServer())
      .put('/tasks')
      .send({ id: tasks[0].id })
      .expect(HttpStatus.OK)

  });
});

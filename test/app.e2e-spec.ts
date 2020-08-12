import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({ firstName: 'firstName 1', lastName: 'lastName 1' })
      .expect(201)
      .expect('created');
  });

  it('/ (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/')
      .send({ lastName: 'lastName 2' })
      .expect(res => console.log(res.error))
      .expect(200)
      .expect('updated');
  });
});

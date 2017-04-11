import request from 'supertest';
import express from 'express';
const app = express();


describe('Server is working', () => {
  it('GET / should respond with json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
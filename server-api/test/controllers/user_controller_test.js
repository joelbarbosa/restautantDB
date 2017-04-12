import request from 'supertest';
import app from '../../app/app';

describe('UserController service all user', () => {

  it('GET /api/users', (done) => {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

});
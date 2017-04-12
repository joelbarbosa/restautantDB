import request from 'supertest';
import app from '../../app/app';

describe('RestaurantController service all restaurants', () => {
  
  it('GET /api/restaurants', (done) => {
    request(app)
      .get('/api/restaurants')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  
});
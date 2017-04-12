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
  
  it('GET /api/restaurants should be a json of restaurants', (done) => {
    request(app)
      .get('/api/restaurants')
      .set('Accept', 'application/json')
      .expect(hasRestaurantsJson)
      .end(done);
  });

  function hasRestaurantsJson(res) {    
     if(!('restaurants' in res.body)) { 
       throw new Error('missing restaurants key');
     }
   }

});
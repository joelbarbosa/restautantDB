import request from 'supertest';
import app from '../../app/app';
import { Logger as log } from 'console4color';

describe('UserController', () => {
 describe('router /api/users', () => {
   it('GET /api/users should online', (done) => {
     request(app)
       .get('/api/users')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200, done);
   });

   it('GET /api/users should be json of users', (done) => {
     request(app)
       .get('/api/users')
       .set('Accept', 'applica')
       .expect(hasUserJson)
       .end(done);     
   });
   
   function hasUserJson(res) {    
     if(!('users' in res.body)) { 
       throw new Error('missing users key');
     }
   }

 });

});
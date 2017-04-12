import assert from 'assert';
import should from 'should';
import restaurant from '../../app/models/restaurant_model';

describe('RestaurantModel', () => {
  describe('#getRestaurants()', () => {
    it('should return all restaurants', () => {      
      (restaurant.getRestaurants().length).should.not.be.below(0);    
    });
  });
});
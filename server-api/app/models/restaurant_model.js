import allRestaurants from '../schemas/restaurant_schema';

class RestaurantModel {
  
  getRestaurants() {
    return allRestaurants;
  }
}
const restaurant = new RestaurantModel();
export default restaurant;
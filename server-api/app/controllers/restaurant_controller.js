import restaurant from '../models/restaurant_model';

class RestaurentController {

  getRestaurants(req, res, next) {
    res.json({restaurants: restaurant.getRestaurants()});
  }
}
const restaurentController = new RestaurentController();
export default restaurentController;
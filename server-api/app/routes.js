import RestaurantController from './controllers/restaurant_controller';

exports.init = (app) => {  
  app.get('/restaurants', RestaurantController.getRestaurants);
};
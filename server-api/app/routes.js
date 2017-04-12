import userController from './controllers/user_controller';
import restaurantController from './controllers/restaurant_controller';

const init = (app) => {
  
  app.get('/', (req, res) => {
    res.json({ isOk: 'server is running' });
  });

  app.get('/api/restaurants', restaurantController.getRestaurants);
  app.get('/api/users', userController.getUsers);
};

export default { init };
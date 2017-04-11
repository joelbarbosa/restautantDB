// import { Router } from 'express';
import { Logger as log } from 'console4color';

class RestaurantController {
  constructor(app) {
    this.app = app;
  }

  getRestaurants() {
    log.log('get restaurant...');
  }
}
export default RestaurantController;
// module.exports.controllers = (app) => {  
//   log.log("Init route");

//   app.get('/', (req, res) => {
//     log.log("Call / ");
//     res.json({restaurants: '1.0.0'});
//   });
  
// };
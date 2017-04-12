class RestaurentController {

  getRestaurants(req, res, next) {
    res.json({id:'1'});
  }
}
const restaurentController = new RestaurentController();
export default restaurentController;
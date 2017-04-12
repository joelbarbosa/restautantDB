class UserController {
  
  getUsers(req, res, next) {
    res.json({ user: 'user' });
  }

}
const userController = new UserController();
export default userController;
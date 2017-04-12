import user from '../models/user_model';
import { Logger as log } from 'console4color';

class UserController {
  
  getUsers(req, res, next) {    
    res.json({users: user.getUsers()});
  }

}

const userController = new UserController();
export default userController;
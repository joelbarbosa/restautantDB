import allUsers from '../schemas/user_schema';
import { Logger as log } from 'console4color';

class UserModel {
  constructor() {
  }

  allUsers() {
    return allUsers;
  }

}
export default UserModel;
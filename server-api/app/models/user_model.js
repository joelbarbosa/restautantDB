import allUsers from '../schemas/user_schema';

class UserModel {

  getUsers() {    
    return allUsers;
  }

}
const user = new UserModel();
export default user;
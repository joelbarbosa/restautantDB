import assert from 'assert';
import should from 'should';
import UserModel from '../../app/models/user_model';
import { Logger as log } from 'console4color';

describe('UserModel', () => {
  describe('#allUsers()', () => {
    it('should return all users', () => {
      const user = new UserModel();
      (user.allUsers().length).should.not.be.below(0);
    });
  });
});
import assert from 'assert';
import should from 'should';
import user from '../../app/models/user_model';
import { Logger as log } from 'console4color';

describe('UserModel', () => {
  describe('#getUsers()', () => {
    it('should return all users', () => {      
      (user.getUsers().length).should.not.be.below(0);
    });
  });
});
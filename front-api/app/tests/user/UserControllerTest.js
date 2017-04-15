describe('UserController', function() {
  
  let UserController;
  let scope;
  
  beforeEach(function () {
    module('app');
  });

  beforeEach(inject(function($rootScope, $controller) {       
    scope = $rootScope.$new();
    UserController = $controller('UserController', { $scope: scope });
  }));

  describe('#getUser()', () => {
    it('should exist', () => {
      expect(UserController).toBeDefined();  
    });
  
  });

});
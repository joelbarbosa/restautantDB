describe('UserService', function() {
  
  let UserService;
  let http;

  const mockAllUsers = [
    {id: 1, name: 'joel'},
    {id: 2, name: 'dayana'}
  ];
  const mockUser = {id: 1, name: 'joel'};

  beforeEach(function () {
    module('app');
  });
  
  beforeEach(inject(function(_UserService_, $httpBackend) {               
    UserService = _UserService_;
    http = $httpBackend;
  }));
  
  it('UserService should exist', function() {
    expect(UserService).toBeDefined();
  });
  
  it('#getUsers() should be defined', () => {
    expect(UserService.getUsers).toBeDefined();
  });

  it('#getUserByName() should be defined', function() {
    expect(UserService.getUserByName).toBeDefined();
  });

  it('#getUserByName() should return user by name', () => {
    let user = UserService.getUserByName('joel', mockAllUsers);
    expect(user).toEqual(mockUser);
  });

  it('#getUsers() should fetch all users', (done) => {
    
    let users = (result) => {
      expect(result.data.length).toEqual(mockAllUsers.length);
    }

    let failTest = function(error) {
      expect(error).toBeUndefined();
    };

    http.expectGET('http://localhost:3000/api/users')
      .respond(200, mockAllUsers);
    
    UserService.getUsers()
      .then(users)
      .catch(failTest)
      .finally(done);

    http.flush();
 });
  
});
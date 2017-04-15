describe('RestaurantController', function() {

  let RestaurantController;
  let scope;
  
  const userName = 'testUser';
  const mockRestaurants = [
      {id: 1, name: "Restaurant 1", desc: "simple desc 1", rate: 1, users:[]},
      {id: 2, name: "Restaurant 2", desc: "simple desc 2", rate: 4, users:[]},
      {id: 3, name: "Restaurant 3", desc: "simple desc 3", rate: 1, users:[]}
  ];

  const mockRestaurantVoted = {
    id: 1, 
    name: "Restaurant 1", 
    desc: "simple desc 1", 
    rate: 2,
    users: [userName]
  };

  const mockRestaurantsVoted = [
      {id: 1, name: "Restaurant 1", desc: "simple desc 1", rate: 2, users:[]},
      {id: 2, name: "Restaurant 2", desc: "simple desc 2", rate: 4, users:[]},
      {id: 3, name: "Restaurant 3", desc: "simple desc 3", rate: 1, users:[]}
  ];
  
  beforeEach(function () {
    module('app');
  });

  beforeEach(inject(($rootScope, $controller) => {       
    scope = $rootScope.$new();
    RestaurantController = $controller('RestaurantController', { $scope: scope });
  }));

  describe('#getRestaurants()', () => {
    it('should be exist', () => {
      expect(RestaurantController.getRestaurants)
      .toBeDefined();
    });
  });
  
  describe('#vote() should increase vote in restaurant', () => {
    beforeEach(() => {
      scope.restaurants = mockRestaurants;
      scope.userSession = userName;
    });

    it('add user and rate on restaurant', () => {
      let increseRestaurants = RestaurantController.vote(mockRestaurants[0]); 
      expect(increseRestaurants).toEqual(scope.restaurants);
    });

    it('should not allow the same vote in the same day', () => {
      scope.isUserVotedToday = true;
      let isSameUSer =  RestaurantController.isValidVote();
      expect(isSameUSer).toBe(false);
    });

  });
  
});
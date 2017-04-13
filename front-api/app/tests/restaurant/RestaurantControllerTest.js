describe('RestaurantController', function() {

  let RestaurantController;
  let scope;
  
  beforeEach(function () {
    module('app');
  });

  beforeEach(inject(function($rootScope, $controller) {       
    scope = $rootScope.$new();
    RestaurantController = $controller('RestaurantController', { $scope: scope });
  }));

  describe('#getRestaurants()', () => {
    it('should be exist', () => {
      expect(RestaurantController.getRestaurants)
      .toBeDefined();
    });
  });
  
  describe('this.restaurants', () => {        
    const messyList = [
      {id: 1, name: "Restaurant 1", desc: "simple desc 1", rate: 0},
      {id: 2, name: "Restaurant 2", desc: "simple desc 2", rate: 4},
      {id: 3, name: "Restaurant 3", desc: "simple desc 3", rate: 1}
    ];
    
    const sortList = [
      {id: 2, name: "Restaurant 2", desc: "simple desc 2", rate: 4},
      {id: 3, name: "Restaurant 3", desc: "simple desc 3", rate: 1},
      {id: 1, name: "Restaurant 1", desc: "simple desc 1", rate: 0}        
    ];

    // it('#sortTopRate() should sort by top rate restaurants', () => {      
    //   //expect(RestaurantController.sortTopRate).toEqual(sortList);
    // });
  });

});
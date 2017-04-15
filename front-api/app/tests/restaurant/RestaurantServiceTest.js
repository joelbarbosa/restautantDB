describe('RestaurantService', function() {
  
  let RestaurantService;
  let http;
  const mockRestaurants = [
      { id: 1, votes: 0, name: 'Sabor do Sertão', desc: 'The iconic restaurant where hospitality and cuisine are elevated to art forms'},
      { id: 2, votes: 0, name: 'Osteria Francescana', desc: 'A reinvention of Italian cuisine by a famously passionate chef' }
    ];

  beforeEach(function () {
    module('app');
  });
  
  beforeEach(inject(function(_RestaurantService_, $httpBackend) {               
    RestaurantService = _RestaurantService_;
    http = $httpBackend;
  }));

  it('should exist', function() {
    expect(RestaurantService).toBeDefined();
  });

  it('#getRestaurants() should exist', function() {
    expect(RestaurantService.getRestaurants).toBeDefined();
  });
  
  it('#getRestaurants() should fetch', function(done) {
    
    let restaurants = (result) => {
      expect(result.data.length).toEqual(mockRestaurants.length);
    }

    let failTest = function(error) {
      expect(error).toBeUndefined();
    };

    http.expectGET('http://localhost:3000/api/restaurants')
      .respond(200, mockRestaurants);
    
     RestaurantService.getRestaurants()
       .then(restaurants)
       .catch(failTest)
       .finally(done);

     http.flush();
   
  });

});
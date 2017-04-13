describe('RestaurantService', function() {
  
  let RestaurantService;
  let scope;

  beforeEach(function () {
    module('app');
  });
  
  beforeEach(inject(function(_RestaurantService_) {               
    RestaurantService = _RestaurantService_;
  }));

  it('should exist', function() {
    expect(RestaurantService).toBeDefined();
  });

});
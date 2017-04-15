app.service('RestaurantService', function ($q, $http) {
   
   const RestaurantService = {
     
     getRestaurants: function() {
      let deferred = $q.defer();
      $http.get('http://localhost:3000/api/restaurants').then(
        function(success) {
          deferred.resolve(success);
      },
        function(error) {
          deferred.reject();
        });

      return deferred.promise;
     }
   };

   return RestaurantService;
});    
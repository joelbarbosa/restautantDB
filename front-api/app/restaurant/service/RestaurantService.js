app.service('RestaurantService', function ($q, $http) {
   
   const RestaurantService = {
     getRestaurants:() => {
       let deferred = $q.defer();
       $http.get('http://localhost:3000/api/restaurants').then(
         function(success) {
           RestaurantService.saveRestaurants(success.data.restaurants);
           deferred.resolve(success);
        },
         function(error) {
           deferred.reject();
         });

       return deferred.promise;
     },
     
     saveRestaurants: (restaurants) => {
       window.localStorage['restaurants'] = JSON.stringify(restaurants);
     },

     getRestaurantsStore: () => {
       return JSON.parse(window.localStorage['restaurants']);
     },

     getDayOfWeek: (dateFormat) => {
       var gsDayNames = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ];
        
        let date = new Date(dateFormat);
        return gsDayNames[date.getDay() + 1];

     }

   };

   return RestaurantService;
});    
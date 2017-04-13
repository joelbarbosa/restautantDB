const app = angular.module('app',[ 'pascalprecht.translate', 'ngRoute', 'oc.lazyLoad' ]);

app.config(['$routeProvider', ($routeProvider, $ocLazyLoadProvider) => {
  $routeProvider
  .when('/', {		
        templateUrl: '/app/home/views/home.html',
        controller: 'HomeController as home',
        resolve: {
        	HomeController: 
       		 ['$ocLazyLoad', function($ocLazyLoad) {
       			return $ocLazyLoad.load('app/home/controllers/HomeController.js'); }]
       		 
        }
    })
    .when('/restaurant', {		
        templateUrl: '/app/restaurant/views/restaurant.html',
        controller: 'RestaurantController as restaurant',
        resolve: {
        	RestaurantController: 
       		 ['$ocLazyLoad', function($ocLazyLoad) {
       			return $ocLazyLoad.load('app/restaurant/controllers/RestaurantController.js'); }]       		 
        }
    }).otherwise({ redirectTo: '/' });

}]);
app.service('RestaurantService', function () {
   
});    
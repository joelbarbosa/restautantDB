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
        controller: 'RestaurantController as rest',
        resolve: {
        	RestaurantController: 
       		 ['$ocLazyLoad', function($ocLazyLoad) {
       			return $ocLazyLoad.load(['app/restaurant/controllers/RestaurantController.js', 
                   'app/restaurant/service/RestaurantService.js',
                   'app/user/service/UserService.js', 
                   'app/directives/clock.js']); }]       		 
        }
    })
    .when('/user', {		
        templateUrl: '/app/user/views/user.html',
        controller: 'UserController as user',
        resolve: {
        	UserController: 
       		 ['$ocLazyLoad', function($ocLazyLoad) {
       			return $ocLazyLoad.load(['app/user/controllers/UserController.js', 
                   'app/user/service/UserService.js']); }]       		 
        }
    })
    
    .otherwise({ redirectTo: '/' });

}]);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    PROJECT: 'RestaurantDB App',
    TITLE_HOME: 'Home',
    TITLE_USER: 'Login on Restaurant',
    TITLE_RESTAURANT: 'Restaurants',
    COPY: '© copy 2017 RestaurantDB.'
  });
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.preferredLanguage('en');
});

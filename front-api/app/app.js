const app = angular.module('app',[ 'pascalprecht.translate','ngRoute', 'oc.lazyLoad' ]);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'FOO': 'This is a paragraph'
  }).preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}]);

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
    });
    
}]);
angular.module('app').controller('UserController', 
  function($scope, $ocLazyLoad, $location, UserService) {
  
  this.userName = '';
  UserService.setUserHead("");
  
  this.loggin = () => {
    UserService.saveUser(this.userName);
  }

});
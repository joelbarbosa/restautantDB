angular.module('app').controller('RestaurantController', 
  function($scope, $ocLazyLoad, $location, $timeout, RestaurantService, UserService) {
  
  $scope.restaurants = [];
  $scope.isUserVotedToday = false;
  $scope.userSession = UserService.getUserStore();
  $scope.winner = {};
  $scope.weekWinners = [];
  $scope.startWeek = 1;
  UserService.setUserHead($scope.userSession);
  
  this.getRestaurants = () => {
    RestaurantService.getRestaurants().then(
      function(data) {
        $scope.restaurants = data.data.restaurants;
      },
      function(error) {
        console.log(error);
      }
    );
  };
  
  this.vote = (restaurant) => {
    if(!this.isValidRestaurant(restaurant)) {
      this.myAlert("It Restaurant alredy winner in this week!");
      return false;
    }

    if(!this.isValidVote()) {
      this.myAlert("You alredy voted today!");
      return false;
    }
    $scope.selectedRestaurant = restaurant;
    $scope.restaurants = $scope.restaurants.map((item) => {
      if(item['id'] == restaurant['id']) {
        item['users'].push($scope.userSession);
        item['rate'] = restaurant['rate'] + 1;
        $scope.isUserVotedToday = true;
      }      
      item['isWinner'] = this.isWinner(item);
      return item;
    });
    RestaurantService.saveRestaurants($scope.restaurants);
    return $scope.restaurants;
  };

  this.isValidVote = () => {
    if($scope.isUserVotedToday) {
      return false; 
    } 
    return true;    
  };

  this.isValidRestaurant = (restaurant) => { 
    if ($scope.weekWinners.filter(e => 
      e.restaurant == restaurant.name).length > 0) {
      return false;
    }
    return true;
  };

  this.myAlert = (desc) => {
    alert(desc);
  };

  this.isWinner = (restaurant) => {
    if(restaurant.rate == 0) {
      return false;
    }

    if($scope.winner.rate == undefined) {
       $scope.winner = restaurant;
    }

    if(restaurant.rate >= $scope.winner.rate) {
      $scope.winner = restaurant;
      return true;
    }
    return false;
  };
  
  this.init = () => {
    
    try {
      if(window.localStorage['restaurants'] !== undefined) {
        $scope.restaurants = RestaurantService.getRestaurantsStore();
      } else {
        this.getRestaurants();
      }
      
      if(window.localStorage['startWeek'] !== undefined) {
        $scope.startWeek = window.localStorage['startWeek'];
      }

      if(window.localStorage['weekWinners'] !== undefined) {
        $scope.weekWinners = window.localStorage['weekWinners'];
      }

    } catch(err) {
      this.getRestaurants();
    }
  }
  
  this.init();

});
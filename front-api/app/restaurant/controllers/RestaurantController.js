angular.module('app').controller('RestaurantController', 
  function($scope, $ocLazyLoad, $location, $timeout, RestaurantService, UserService) {
  
  $scope.restaurants = [];
  $scope.isUserVotedToday = false;
  $scope.userSession = UserService.getUserStore();
  $scope.winner = {};
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
    
    if(!this.isValidVote()) {
      this.myAlert("You alred voted today!");
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

    return $scope.restaurants;
  };

  this.isValidVote = () => {
    if($scope.isUserVotedToday) {
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

  this.getRestaurants();
});
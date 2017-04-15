app.service('UserService', function($q, $http, $location) {
  
  const UserService = {
    
    getUserByName: (name, list) => {
      let user = list.filter(function(user) {
        return user.name === name;
      });
      return user[0];
    },
    
    saveUser: (name) => {
      window.localStorage['userName'] = name;
      UserService.setUserHead(name);
      $location.path("/restaurant");
    },

    getUserStore: () => {
      return window.localStorage['userName'];
    },
    
    setUserHead: (name) => {
      if(document.getElementById('userName') != null) {
        document.getElementById('userName').innerHTML = name; 
      }
    },

    getUsers: () => {
      let deferred = $q.defer();
      $http.get('http://localhost:3000/api/users').then(
        function(success) {
          deferred.resolve(success);
      },
        function(error) {
          deferred.reject();
        });

      return deferred.promise; 
    }

  };

  return UserService;
});
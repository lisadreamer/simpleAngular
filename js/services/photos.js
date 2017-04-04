app.factory('photos', ['$http', function($http) {
  return $http.get('./photos.json')
         .then(function(response) {
             var data = response.data;
           return data;
         });
        
}]);
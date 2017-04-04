app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Helsinki&units=metric&APPID=f60d2aeb132d34b6a4213d00aea7016f') 
            .then(function(response) { 

                var data = response.data;
              return data; 
            }); 
             
}]);

app.controller('FileController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.then(function(data) {
    $scope.fiveDay = data;    
  });  
}]);
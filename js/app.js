var app = angular.module("myApp",['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: './views/home.html' 
    }) 
  	.when('/photos/:id', { 
      controller: 'PhotoController', 
      templateUrl: './views/photo.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
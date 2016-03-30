// app.js

// create the module and name it hostApp
 // also include ngRoute for all our routing needs
var hostApp = angular.module('hostApp', ['ngRoute']);

// configure our routes
hostApp.config(function($routeProvider) {
 $routeProvider

 // route for the home page
 .when('/', {
 templateUrl : 'app/home/home.html',
 controller : 'mainController'
 })

 // route for the about page
 .when('/about', {
 templateUrl : 'app/about/about.html',
 controller : 'aboutController'
 });
});

// create the controller and inject Angular's $scope
hostApp.controller('aboutController', function($scope) {
 $scope.message = 'This is just a test website to learn the MEAN Stack and see if we can implement a MEAN stack on a Raspberry Pi.';
});

// create the controller and inject Angular's $scope
hostApp.controller('mainController', function($scope)
{
	// create a message to display in our view
	$scope.message = "Hello from the Node Server on Dhawal's Raspberry Pi!";
});

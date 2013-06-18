"use strict";

var injectionModule = angular.module("injecters", []);
injectionModule.factory("injecterDependancy", function() { return { value: "value" }; });

var controllerModule = angular.module("controllers", ["injecters"]);
controllerModule.controller("HomeController", function($scope, $location, injecterDependancy) { HomeController($scope, $location, injecterDependancy); });

function HomeController($scope, $location, injecterDependancy) {
	$scope.initializedValue = "fddjklms";
	$scope.injectedValue = injecterDependancy.value;
	$scope.users = [ { name: "Name 1" }, { name: "Name 2" } ];
	
	$scope.navigate = function() {
		$location.path("/other");
	};
}

var mainApp = angular.module("mainApp", ["controllers"]);

mainApp.config(function($routeProvider, $locationProvider) {
	
	var routeProvider = $routeProvider.when(
		"/",
		{
			controller: "HomeController",
			templateUrl: "pages/home.html"
		}
	);
	
	routeProvider.when(
			"/other",
			{
				templateUrl: "pages/other.html"
			}
		);

	routeProvider.otherwise({redirectTo: "/"});
	
	// Crawling : http://docs.angularjs.org/guide/dev_guide.services.$location
	$locationProvider.hashPrefix("!");
});

mainApp.controller("mainController", function() {
});
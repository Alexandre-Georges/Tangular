"use strict";

var injectionModule = angular.module("injecters", ["constants", "ngResource"]);
injectionModule.factory("injecterDependancy", function() { return { value: "value" }; });
injectionModule.factory("restCaller", function($resource, restCallerUrl) {
	var Regular = $resource(restCallerUrl + ':action',
			{},
	        {
				message: {
	                method: "GET",
                    params: { action: "message" }
	            }
	        });

	    return {
	    	message: function(callbackFunction, errorFunction) {
	        	Regular.message(
	        			{ },
	                    callbackFunction,
	                    errorFunction
	        	);
	        }
	    };

});

var controllerModule = angular.module("controllers", ["injecters"]);
controllerModule.controller("HomeController", function($scope, $location, injecterDependancy) { HomeController($scope, $location, injecterDependancy); });
controllerModule.controller("RestController", function($scope, $location, restCaller) { RestController($scope, restCaller); });

function HomeController($scope, $location, injecterDependancy) {
	$scope.initializedValue = "initialized";
	$scope.injectedValue = injecterDependancy.value;
	$scope.users = [ { name: "Name 1" }, { name: "Name 2" } ];
	
	$scope.navigate = function() {
		$location.path("/other");
	};
}
function RestController($scope, restCaller) {
	restCaller.message(function(result) {
		$scope.message = result.message;
	},
	function(error) {
		$scope.message = "Error";
	});
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
	
	routeProvider.when(
		"/rest",
		{
			controller: "RestController",
			templateUrl: "pages/rest.html"
		}
	);
	
	routeProvider.otherwise({redirectTo: "/"});
	
	// Crawling : http://docs.angularjs.org/guide/dev_guide.services.$location
	$locationProvider.hashPrefix("!");
});

mainApp.controller("mainController", function() {
});
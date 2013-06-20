'use strict';

describe("homeController", function() {
	
	beforeEach(module("controllers"));
	
	it("should have a proper initializedValue", inject(function($controller) {
		
		var $scope = {};
		$controller("HomeController", { $scope: $scope });
		
		expect($scope.initializedValue).toEqual("initialized");
		
	}));
	
	it("should have a proper injectedValue", inject(function($controller) {
		
		var $scope = {};
		$controller("HomeController", { $scope: $scope, injecterDependancy: { value: "injected value" } });
		
		expect($scope.injectedValue).toEqual("injected value");
		
	}));
	
});

describe("restController", function() {

	beforeEach(module("controllers"));
	
	it("should have a proper restCaller", inject(function($controller) {
		
		var $scope = {};
		var restCaller = { message: function(callback) { callback({ message: "Unit mocked"}); } };
		$controller("RestController", { $scope: $scope, restCaller: restCaller });
		
		expect($scope.message).toEqual("Unit mocked");
		
	}));
	
});
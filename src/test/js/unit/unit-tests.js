'use strict';

describe("homeController", function() {
	beforeEach(module("controllers"));
	
	it("should have a proper initializedValue", inject(function($controller) {
		var $scope = {};
		$controller("HomeController", { $scope: $scope });
		expect($scope.initializedValue).toEqual("fddjklms");
	}));
	
	it("should have a proper injectedValue", inject(function($controller) {
		var $scope = {};
		$controller("HomeController", { $scope: $scope, injecterDependancy: { value: "injected value" } });
		expect($scope.injectedValue).toEqual("injected value");
	}));
});
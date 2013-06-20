"use strict";
/*
var constantModule = angular.module("constants", []);
constantModule.constant("restCallerUrl", "http://localhost\\:8080/tangular/rest/test/");*/

var mainAppDev = angular.module("mainAppDev", ["mainApp", "ngMockE2E"]);
mainAppDev.run(function($httpBackend, $http) {
	var message = { message: "Angular mock" };
 
	$httpBackend.whenGET(/^pages/).passThrough();
	$httpBackend.whenGET("http://localhost:8080/tangular/rest/regular/message").respond(message);
	$httpBackend.when("OPTIONS", "http://localhost:8080/tangular/rest/regular/message").respond(message);
});

/*
myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
myAppDev.run(function($httpBackend) {
  phones = [{name: 'phone1'}, {name: 'phone2'}];
 
  // returns the current list of phones
  $httpBackend.whenGET('/phones').respond(phones);
 
  // adds a new phone to the phones array
  $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    phones.push(angular.fromJson(data));
  });
  $httpBackend.whenGET(/^\/templates\//).passThrough();
  //...
});
*/
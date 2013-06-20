'use strict';

describe("homeController", function() {

	beforeEach(function() {
		browser().navigateTo("/indexTestAngularMock.html");
	});

	it("Home", function() {
		expect(browser().location().url()).toBe("/");
	});

	it("Users", function() {
		expect(element("div[ng-repeat='user in users']").count()).toBe(2);
	});

	it("Click", function() {
		element("input[type='button']").click();
		expect(browser().location().url()).toBe("/other");
	});

});

describe("restCaller", function() {
	
	beforeEach(function() {
		browser().navigateTo("/indexTestAngularMock.html#!/rest");
	});
	
	it("Rest", function() {
		expect(browser().location().url()).toBe("/rest");
		expect(element("div.ng-view > div").html()).toBe("Angular mock");
	});

});
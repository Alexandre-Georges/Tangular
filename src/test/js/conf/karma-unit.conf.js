// PHANTOMJS_BIN = C:\Users\georges.a\DEV\Tools\PhantomJS\phantomjs-1.9.1-windows\phantomjs.exe
// karma start karma.conf.js

basePath = "../../../";

files = [
	JASMINE,
	JASMINE_ADAPTER,
	"main/webapp/frameworks/angular/angular.js",
	"main/webapp/frameworks/angular/angular-resource.js",
	"main/webapp/frameworks/angular/angular-mocks.js",
	"main/webapp/js/**/*.js",
	"test/js/unit/**/*.js"
];

singleRun = true;

autoWatch = true;

browsers = ["Firefox", "Chrome", "PhantomJS"];

//logLevel = LOG_DEBUG;
// PHANTOMJS_BIN = C:\Users\georges.a\DEV\Tools\PhantomJS\phantomjs-1.9.1-windows\phantomjs.exe

// karma start karma-e2e.conf.js

basePath = "../../../";
urlRoot = "/_karma_/";

files = [
	ANGULAR_SCENARIO,
	ANGULAR_SCENARIO_ADAPTER,
	"test/js/e2e/**/*.js"
];

autoWatch = true;

singleRun = true;

browsers = ["Firefox", "Chrome", "PhantomJS"];

proxies = {
	"/": "http://localhost:8080/tangular/"
};

//logLevel = LOG_DEBUG;
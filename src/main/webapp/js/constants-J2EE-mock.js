// We used another controller for J2EE mocked rest calls, so the URL is different
var constantModule = angular.module("constants", []);
constantModule.constant("restCallerUrl", "http://localhost\\:8080/tangular/rest/test/");
'use strict';

/* App Module */

var app = angular.module('com.kakao.drive.web', [
	'com.kakao.drive.web.controllers',
	'com.kakao.drive.web.services',
	'com.kakao.drive.web.directives',
	'com.kakao.drive.web.filters',
    ]);

app.run(function($rootScope, $http) {
    
//	$http.get("/archive/documents" , {
//		params : {}
//	}).success(function(response) {
//		$rootScope.metadataList = response;
//	});
});

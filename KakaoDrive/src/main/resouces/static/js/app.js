'use strict';

/* App Module */

var app = angular.module('com.kakao.drive.web', [
	'com.kakao.drive.web.controllers',
	'com.kakao.drive.web.services',
	'com.kakao.drive.web.directives',
	'com.kakao.drive.web.filters',
	'ui.tree',
	'ui.tree-filter',
	'ng-context-menu',
	'ngCanvasGauge',
    ]);

app.run(function($rootScope, $http) {
    
//	$http.get("/archive/documents" , {
//		params : {}
//	}).success(function(response) {
//		$rootScope.metadataList = response;
//	});
});

app.filter('trust', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});
'use strict';

/* App Module */

var app = angular.module('archiveApp', [
    'archiveControllers',
    'archiveServices',
    'archiveDirectives',
    'commonFilters',
    ]);

app.run(function($rootScope, $http) {
	$http.get("/archive/documents" , {
		params : {}
	}).success(function(response) {
		$rootScope.metadataList = response;
	});
});

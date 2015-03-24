'use strict';

/* Controllers */

var baseControllers = angular.module('com.kakao.drive.web.controllers', []);

baseControllers.controller('NavigationController', [ '$scope', 'OperationService', 'TreeService', function($scope, operationService, treeService) {
	$scope.upload = function() {
		console.log('upload!');
//		var file = $scope.myFile;
//		console.log('file is ' + JSON.stringify(file));
//		var uploadUrl = "/archive/upload";
//		uploadService.uploadFileToUrl(uploadUrl, file);
	};
}]);


baseControllers.controller('SectionController', [ '$scope', 'OperationService', 'ExplorerService', function($scope, operationService, explorerService) {
	$scope.newFolder = function() {
		console.log('newfolder!');
	};
//	$scope.search = function(fileName) {
//		archiveService.search(fileName);
//	};
//	
//	$scope.downloadZip = function(fileName) {
//		console.log(fileName);
//		downloadService.downloadZip(fileName);
//	};
}]);
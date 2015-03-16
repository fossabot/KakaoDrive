'use strict';

/* Controllers */

var archiveControllers = angular.module('archiveControllers', []);

archiveControllers.controller('UploadCtrl', [ '$scope', 'UploadService', function($scope, uploadService) {
	$scope.uploadFile = function() {
		var file = $scope.myFile;
		console.log('file is ' + JSON.stringify(file));
		var uploadUrl = "/archive/upload";
		uploadService.uploadFileToUrl(uploadUrl, file);
	};
}]);


archiveControllers.controller('ArchiveCtrl', [ '$scope', 'ArchiveService', 'DownloadService', function($scope, archiveService, downloadService) {
	$scope.search = function(fileName) {
		archiveService.search(fileName);
	};
	
	$scope.downloadZip = function(fileName) {
		console.log(fileName);
		downloadService.downloadZip(fileName);
	};
}]);
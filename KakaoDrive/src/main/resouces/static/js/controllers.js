'use strict';

/* Controllers */

var baseControllers = angular.module('com.kakao.drive.web.controllers', []);

baseControllers.controller('NavigationController', [ '$scope', 'AccountService', 'OperationService', 'TreeService', function($scope, accountService, operationService, treeService) {
	$scope.templates = 
		[ { name: 'Navi 상단', url: 'templates/navi_top.html' },
		  { name: 'template1.html', url: 'template.html' }];
	
	$scope.template = $scope.templates[0];
	
	accountService.getQuota(function() {
		$scope.quotaInfo = accountService.quota();
	});
	
	accountService.getShare(function() {
		$scope.shareInfo = accountService.share();
	});
	
	
	$scope.upload = function() {
		console.log('Upload!');
		alert('업로드 기능 구현중');
	};
	
	$scope.share = function() {
		console.log('Share!');
		alert('공유 기능 구현중');
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



//var file = $scope.myFile;
//console.log('file is ' + JSON.stringify(file));
//var uploadUrl = "/archive/upload";
//uploadService.uploadFileToUrl(uploadUrl, file);
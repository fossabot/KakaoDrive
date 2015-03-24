'use strict';

/* Controllers */

var baseControllers = angular.module('com.kakao.drive.web.controllers', []);

baseControllers.controller('NavigationController', [ '$scope', 'AccountService', 'OperationService', 'TreeService', function($scope, accountService, operationService, treeService) {
	
	$scope.view = {
		navi: {
			top: 'templates/navi_top.html',
			tree: 'templates/navi_tree.html'
		}
	}
	
	accountService.getQuota(function() {
		$scope.quotaInfo = accountService.quota();
	});
	
	accountService.getShare(function() {
		$scope.shareInfo = accountService.share();
	});
	
	treeService.getFolderTree(function() {
		$scope.folderTree = treeService.folderTree();
		console.log($scope.folderTree.children);
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
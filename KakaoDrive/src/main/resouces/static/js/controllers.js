'use strict';

/* Controllers */

var baseControllers = angular.module('com.kakao.drive.web.controllers', []);

baseControllers.controller('NavigationController', [ '$scope', '$filter', 'AccountService', 'OperationService', 'TreeService', function($scope, $filter, accountService, operationService, treeService) {
	
	$scope.view = {
		navi: {
			top: 'templates/navi_top.html',
			tree: 'templates/navi_tree.html'
		}
	}
	
	$scope.treeFilter = $filter('uiTreeFilter');
	$scope.filterFields = ['name'];
	
	accountService.getQuota(function() {
		$scope.quotaInfo = accountService.quota();
		$scope.quotaPercent = (($scope.quotaInfo.usedSize * 100) / $scope.quotaInfo.totalSize).toFixed(2);
	});
	
	accountService.getShare(function() {
		$scope.shareInfo = accountService.share();
	});
	
	treeService.getFolderTree(function() {
		$scope.folderTree = treeService.folderTree();
	});
	
	$scope.upload = function() {
		console.log('Upload!');
	};
	
	$scope.download = function() {
		console.log('Download!');
	};
	
	$scope.share = function() {
		console.log('Share!');
	};
	
	// contextmenu를 호출할때 선택한 folderid를 가져온다.
	$scope.$on('selectedIdByContextMenu', function(event, folder) {
		$scope.selectedFolder = folder;
	})
	
	$scope.copy = function() {
		console.log('Copy!');
	};
	
	$scope.cut = function() {
		console.log('Cut!');
	};
	
	$scope.move = function() {
		console.log('Move!');
	};
	
	$scope.paste = function() {
		console.log('Paste!');
	};
	
	$scope.del = function() {
		console.log('Del!');
	};
	
	$scope.rename = function() {
		console.log('Rename!');
	};
	
	$scope.favorite = function() {
		console.log('Favorite!');
	};
	
	$scope.attribute = function() {
		console.log('Attribute!');
	};
	
	
	$scope.toggle = function(scope) {
		scope.toggle();
	};
	
	$scope.selectedItem = {};
	
	$scope.options = {};
	
	$scope.remove = function(scope) {
		scope.remove();
	}
	

	
	
	$scope.newfolder = function(scope) {
		console.log('ADD');
		var nodeData = $scope.selectedFolder
		nodeData.children.push({
			id: nodeData.id * 10 + nodeData.children.length,
			name: nodeData.name + '.' + (nodeData.children.length + 1),
			children: []
		});
	};
	
	$scope.onRightClick = function(scope) {
		//console.log(scope.$modelValue);
	};

	$scope.onClose = function (msg) {
		console.log(msg);
	};

	$scope.recreatePanels = function() {
		$scope.panels = angular.copy($scope.panels);
		console.log($scope.panels);
	}
	
	$scope.quotaPercent = 0;
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
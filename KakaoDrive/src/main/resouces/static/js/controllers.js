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
	});
	
	$scope.upload = function() {
		console.log('Upload!');
		alert('업로드 기능 구현중');
	};
	
	$scope.download = function() {
		console.log('Download!');
		alert('다운로드 기능 구현중');
	};
	
	$scope.share = function() {
		console.log('Share!');
		alert('공유 기능 구현중');
	};
	
	// contextmenu를 호출할때 선택한 folderid를 가져온다.
	$scope.$on('selectedIdByContextMenu', function(event, id) {
		$scope.selectedId = id;
	})
	
	$scope.copy = function() {
		console.log('Copy!');
		alert('복사 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.cut = function() {
		console.log('Cut!');
		alert('잘라내기 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.move = function() {
		console.log('Move!');
		alert('이동 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.paste = function() {
		console.log('Paste!');
		alert('붙여넣기 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.del = function() {
		console.log('Del!');
		alert('삭제 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.rename = function() {
		console.log('Rename!');
		alert('이름변경 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.favorite = function() {
		console.log('Favorite!');
		alert('즐겨찾기 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	$scope.attribute = function() {
		console.log('Attribute!');
		alert('속성 기능 구현중 - folderid : ' + $scope.selectedId );
	};
	
	
	$scope.toggle = function(scope) {
		scope.toggle();
	};
	
	$scope.selectedItem = {};
	
	$scope.options = {};
	
	$scope.remove = function(scope) {
		scope.remove();
	}
	
	$scope.newFolder = function(scope) {
		var nodeData = scope.$modelValue;
		nodeData.item.push({
			id: nodeData.id * 10 + nodeData.items.length,
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
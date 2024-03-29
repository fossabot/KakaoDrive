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
	
	$scope.treeContextMenu = [
		{
			text: '새폴더',
			click: function() {
				console.log('new folder!');
				var nodeData = $scope.selectedFolder
				nodeData.children.push({
					id: nodeData.id * 10 + nodeData.children.length,
					name: nodeData.name + '.' + (nodeData.children.length + 1),
					children: []
				});
			}
		},
		{
			text: '다운로드',
			click: function() {
				console.log('download!');
			}
		},
		{
			text: '업로드',
			underline: true,
			click: function() {
				console.log('upload!');
			}
		},
		{
			text: '공유하기',
			underline: true,
			click: function() {
				console.log('share!');
			}
		},
		{
			text: '잘라내기',
			click: function() {
				console.log('cut');
			}
		},
		{
			text: '이동',
			click: function() {
				console.log('move');
			}
		},
		{
			text: '복사',
			click: function() {
				console.log('copy');
			}
		},
		{
			text: '붙여넣기',
			click: function() {
				console.log('paste');
			}
		},
		{
			text: '삭제',
			click: function() {
				console.log('del');
			}
		},
		{
			text: '이름변경',
			underline: true,
			click: function() {
				console.log('rename');
			}
		},
		{
			text: '중요 표시하기',
			underline: true,
			click: function() {
				console.log('favorite');
			}
		},
		{
			text: '속성',
			underline: true,
			click: function() {
				console.log('properties!');
			}
		}
	]
	
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
	
	$scope.treeLocked = true;
	
	$scope.toggleTreeLock = function(scope) {
		scope.treeLocked = !scope.treeLocked;
		scope.dragEnabled = !scope.treeLocked;
		console.log('dragEnabled : ' + scope.dragEnabled);
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
	
	$scope.view = {
			content: {
				basic: 'templates/contant_basic.html',
			}
		}
	
	
	$scope.items = [
		{
			id: 1,
			type: 'folder',
			name: '새 폴더',
			favorite: false,
			src: '/img/image_01.jpg'
		},
		{
			id: 2,
			type: 'folder',
			name: '새 폴더 (1)',
			favorite: false,
			src: '/img/image_02.jpg'
		},
		{
			id: 3,
			type: 'folder',
			name: '새 폴더 (2)',
			favorite: false,
			src: '/img/image_03.jpg'
		},
		{
			id: 4,
			type: 'folder',
			name: '새 폴더 (3)',
			favorite: false,
			src: '/img/image_04.jpg'
		},
		{
			id: 5,
			type: 'file',
			name: '내 사진.jpg',
			favorite: false,
			src: '/img/image_05.jpg'
		},
		{
			id: 6,
			type: 'file',
			name: '내 문서.doc',
			favorite: false,
			src: '/img/image_06.jpg'
		},
	]
	
	
	$scope.contextMenu = [
		{
			text: '뷰어로 보기',
			click: function() {
				console.log('new folder!');
			}
		},
		{
			text: '내려받기',
			underline: true,
			click: function() {
				console.log('download!!');
			}
		},
		{
			text: '공유하기',
			underline: true,
			click: function() {
				console.log('share!');
			}
		},
		{
			text: '잘라내기',
			click: function() {
				console.log('cut');
			}
		},
		{
			text: '이동',
			click: function() {
				console.log('move');
			}
		},
		{
			text: '복사',
			click: function() {
				console.log('copy');
			}
		},
		{
			text: '붙여넣기',
			click: function() {
				console.log('paste');
			}
		},
		{
			text: '삭제',
			click: function() {
				console.log('del');
			}
		},
		{
			text: '이름변경',
			underline: true,
			click: function() {
				console.log('rename');
			}
		},
		{
			text: '내보내기',
			underline: true,
			click: function() {
				console.log('export');
			}
		},
		{
			text: '중요 표시하기',
			underline: true,
			click: function() {
				console.log('favorite');
			}
		},
		{
			text: '파일 버젼관리',
			underline: true,
			click: function() {
				console.log('version!');
			}
		},
		{
			text: '속성',
			underline: true,
			click: function() {
				console.log('properties!');
			}
		}
	]
	
	$scope.onRightClick = function(scope) {
		//console.log(scope.$modelValue);
	};
	
	$scope.newFolder = function() {
		console.log('newfolder!');
	};

}]);



//var file = $scope.myFile;
//console.log('file is ' + JSON.stringify(file));
//var uploadUrl = "/archive/upload";
//uploadService.uploadFileToUrl(uploadUrl, file);
'use strict';

/* Services */

var commonServices = angular.module('com.kakao.drive.web.services', []);

commonServices.service('AccountService', [ '$http', '$rootScope', function($http, $rootScope) {
	this.quota = function(quotaInfo) {
		$http.get("/account/quota", {
			params : {
			}
		}).success(function(response) {
			console.log(quotaInfo);
			console.log(response);
			quotaInfo = response;
			
		}).error(function(e) {
			console.log(e);
		});
	}
	
}]);

commonServices.service('OperationService', [ '$http', '$rootScope', function($http, $rootScope) {
//	this.search = function(fileName) {
//		$http.get("/archive/documents", {
//			params : {
//				filename : fileName
//			}
//		}).success(function(response) {
//			$rootScope.metadataList = response;
//		}).error(function() {
//		});
//	}
}]);


commonServices.service('TreeService', [ '$http', function($http) {
	
//	this.uploadFileToUrl = function(uploadUrl, file) {
//		var fd = new FormData();
//		fd.append('file', file);
//		
//		$http.post(uploadUrl, fd, {
//			transformRequest : angular.identity,
//			headers : {
//				'Content-Type' : undefined
//			}
//		}).success(function() {
//			archiveService.search(null);
//		}).error(function() {
//		});
//	}
} ]);

commonServices.service('ExplorerService', [ '$http', function($http) {
//	this.downloadZip = function(fileName) {
//		if(fileName == undefined) 
//			fileName="";
//		
//		window.location ="/archive/documents/zip?filename=" + fileName;
//	}
} ]);


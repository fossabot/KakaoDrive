'use strict';

/* Services */

var commonServices = angular.module('com.kakao.drive.web.services', []);

commonServices.service('AccountService', [ '$http', '$rootScope', '$q', function($http, $rootScope, $q) {
	var quota;
	var share;
	
	this.quota = function() {
		return quota;
	}
	
	this.getQuota = function(callback) {
		var option = {
			url : '/account/quota',
			param : {userid: '1'},
			success : function(response) {
				quota = response;
			},
			fail : function(e) {
				console.log(e);
				quota = {totalSize: 0, usedSize: 0}
			}
		}
		this.HttpCall(option).then(callback);
	}
	
	this.share = function() {
		return share;
	}
	
	this.getShare = function(callback) {
		var option = {
			url : '/account/share',
			param : {},
			success : function(response) {
				share = response;
			},
			fail : function(e) {
				console.log(e);
				share = []
			}
		}
		this.HttpCall(option).then(callback);
	}
	
	
	this.HttpCall = function(option) {
		var deffered = $q.defer();
		$http.get(option.url, {
			params : option.param
		}).success(function(response) {
			console.log('request : ' + option.url + ' , ' + JSON.stringify(option.param));
			option.success(response);
			console.log('response : ' + JSON.stringify(response));
			deffered.resolve();
		}).error(function(e) {
			option.fail(response);
			deffered.resolve();
		});
		return deffered.promise;
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


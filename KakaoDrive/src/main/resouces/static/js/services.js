'use strict';

/* Services */

var archiveServices = angular.module('archiveServices', []);

archiveServices.service('ArchiveService', [ '$http', '$rootScope', function($http, $rootScope) {
	this.search = function(fileName) {
		$http.get("/archive/documents", {
			params : {
				filename : fileName
			}
		}).success(function(response) {
			$rootScope.metadataList = response;
		}).error(function() {
		});
	}
}]);


archiveServices.service('UploadService', [ '$http', 'ArchiveService', function($http, archiveService) {
	this.uploadFileToUrl = function(uploadUrl, file) {
		var fd = new FormData();
		fd.append('file', file);
		
		$http.post(uploadUrl, fd, {
			transformRequest : angular.identity,
			headers : {
				'Content-Type' : undefined
			}
		}).success(function() {
			archiveService.search(null);
		}).error(function() {
		});
	}
} ]);

archiveServices.service('DownloadService', [ '$http', function($http) {
	this.downloadZip = function(fileName) {
		if(fileName == undefined) 
			fileName="";
		
		window.location ="/archive/documents/zip?filename=" + fileName;
	}
} ]);


(function() {




	var app = angular.module('gallery', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			controller: 'galleryController'
		})
		.when('china', {
			controller: 'showChinaController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}])


	app.controller('galleryController', ['dataFactory', function(dataFactory){
		var gallery = this;

		this.getPhotos = function() {
			dataFactory.get()
			.success(function (data) {
				gallery.photos = data.photoset.photo;
				gallery.initGallery();
			})
			.error(function (error) {
				gallery.status = 'Unable to load Flickr data: ' + error.message;
			});
		}

		this.initGallery = function() {
			'use strict';
			savvior.init('#gallery', {
				'screen and (max-width: 600px)': { columns: 1 },
				'screen and (min-width: 600px) and (max-width: 800px)': { columns: 2 },
				'screen and (min-width: 800px) and (max-width: 1000px)': { columns: 3 },
				'screen and (min-width: 1000px)': { columns: 3 },
			});
		}

		this.getPhotos();


	}]);


	app.factory('dataFactory', ['$http', function($http){
		var req = {
			method: 'GET',
			url: 'data/flickr.php?galleryId=72157652609395672',
			format: 'json'
		}

		var dataFactory = {};

		dataFactory.get = function() {
			return $http(req);
		}

		return dataFactory;
	}])


}());


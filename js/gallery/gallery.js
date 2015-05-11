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
				'screen and (min-width: 1000px)': { columns: 4 },
			});
		}

		this.getPhotos();


	}]);


	app.factory('dataFactory', ['$http', function($http){
		var url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=cc31489e474eea4a278adf54310b1fb7&photoset_id=72157652609395672&user_id=132277818%40N04&extras=url_m&per_page=&format=json&nojsoncallback=1";		var dataFactory = {};

		dataFactory.get = function() {
			return $http.get(url);
		}

		return dataFactory;
	}])


}());


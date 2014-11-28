'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'MIP',
    			'description': 'MIP adalah Platform Konsep, yang membangun dari proyek-proyek kami, menjadi platform solusi',
    			'faClass': 'fa-file-excel-o',
                'link': '#products'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Midas',
    			'description': 'Pengembangan aplikasi bebasis dekstop.',
    			'faClass': 'fa fa-desktop',
                'link': '#products'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Yama',
    			'description': 'Intregasi satu atau lebih framework menjadi sebuah platform.',
    			'faClass': 'fa-folder-o',
                'link': '#products'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });

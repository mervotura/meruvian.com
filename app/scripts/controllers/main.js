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
    			'title': 'MIP[ed]',
    			'description': 'MIP[ed] adalah platform yang terintegrasi untuk membuat aplikasi.',
    			'faClass': 'icon-iconmonstr-brick',
                'link': '#mip-ed'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'MIP[ion]',
    			'description': 'MIP[ion] adalah platform integrasi terpadu yang dapat mengintegrasikan sistem apapun dari / ke sistem apapun.',
    			'faClass': 'icon-iconmonstr-sitemap',
                'link': '#mip-ion'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'MIP[iot]',
    			'description': 'Android Platform, Stand Alone, Cloud Based.',
    			'faClass': 'icon-iconmonstr-tablet',
                'link': '#mip-iot'
    		},
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'MIP[db]',
                'description': 'Big Data Platform, Hadoop Based Platform, Graph Based Platform(Neo4j).',
                'faClass': 'icon-iconmonstr-cloud',
                'link': '#mip-db'
            },
            {
                'image': 'images/bg5.jpg',
                'text': 'title',
                'title': 'MIP[id]',
                'description': 'Layanan terpadu yang terdiri dari DISC, Resume Builder dan OAuth2.',
                'faClass': 'icon-iconmonstr-idcard',
                'link': '#mip-id'
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

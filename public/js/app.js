(function () {
'use strict';

  angular.module('Traingle4it', [])
  .controller('MainCtrl', MainCtrl);

  
  MainCtrl.$inject = ['$scope'];
  function MainCtrl($scope) {
    $scope.data = data;

    $scope.model_img_1 = data[0].model_small_img;
    $scope.model_img_2 = data[1].model_small_img;
    $scope.model_img_3 = data[2].model_small_img;

    $scope.change_src_img_1 = function ($index) {
    	$scope.model_img_1 = data[$index].model_small_img
    	console.log($index);
    };

    $scope.change_src_img_2 = function ($index) {
    	$scope.model_img_2 = data[$index].model_small_img
    	console.log($index);
    };

    $scope.change_src_img_3 = function ($index) {
    	$scope.model_img_3 = data[$index].model_small_img
    	console.log($index);
    };

  }


  var data = [{
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/339933"
}, {
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/ffcc00"
}, {
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/ff0066"
}, {
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/669900"
}, {
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/339933"
}, {
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/0000ff"
}, {
	"modelId": 1,
	"model_small_img": "http://placehold.it/80x60/00ffff"
}];


})();
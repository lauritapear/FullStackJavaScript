'use strict';
angular.module('mainModule')
.controller('submitController', ['$scope', 'multipartForm', function($scope, multipartForm){
	$scope.customer = {};
	$scope.submitData = function(){
	var uploadUrl = '/upload';
		multipartForm.post(uploadUrl, $scope.customer);
    console.dir($scope.customer.video);
		console.log("madeit Whoooho");
	}
}]);

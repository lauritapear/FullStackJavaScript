angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log ("Hello there! This is the helloworld controller function int he main controller");

  }
})

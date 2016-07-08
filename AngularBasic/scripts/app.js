angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log ("Hello there! This is the helloworld controller function int he main controller");

  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function(){
    console.log ("Hello there! This is the coolCtrl function!");
  };

  $scope.helloWorld = function(){
    console.log ("This is not mainCtrl!");
  };
})
.controller('imASibiling', function($scope){
  $scope.foobar = 1234;
  //do other stuff 
});

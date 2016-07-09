angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.learningNgChange = function(){
    console.log ("An input changed!");

  };
// });
$scope.todos = [
  {"name": "Clean the house"},
  {"name": "Water the dog"},
  {"name": "Feed the lawn"},
  {"name": "Pay the bills"},
  {"name": "Run"},
  {"name": "Swim"}
]
})
// .controller('coolCtrl', function($scope){
//   $scope.whoAmI = function(){
//     console.log ("Hello there! This is the coolCtrl function!");
//   };
//
//   $scope.helloWorld = function(){
//     console.log ("This is not mainCtrl!");
//   }

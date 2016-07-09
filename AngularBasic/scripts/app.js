angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
  $scope.learningNgChange = function(){
    console.log ("An input changed!");
  };

  $scope.addTodo = function(todo){
    var todo = {name: "This is a new todo"};
    $scode.todo.push(todo);
  };

$scope.helloConsole = dataService.helloConsole;

dataService.getTodos(function(response){
  console.log(response.data);
  $scope.todos=response.data;
});

$scope.deleteTodo = function(todo, $index){
  dataService.deleteTodo(todo);
  $scope.todos.splice($index, 1);
};

$scope.saveTodo = function(todo){
  dataService.saveTodo(todo);
};


})
.service('dataService', function($http){
  this.helloConsole= function(){
    console.log("holla service");
  };
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo){
    console.log("the"+ todo.name + "deleted");

    //other logic
  };

  this.saveTodo = function(todo){
    console.log("the"+ todo.name + "saved");
    //other logic
  };

});

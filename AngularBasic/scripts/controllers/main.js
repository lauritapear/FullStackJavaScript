'use strict';
angular.module('todoListApp')
.controller("mainCtrl", function($scope, dataService) {
        $scope.addTodo = function () {
          var todo = {name:"This is a new todo"};
          $scope.todos.unshift(todo);
  };

        $scope.helloConsole = dataService.helloConsole;

        $scope.learningNgChange = function() {
            console.log("Value Changed!!");
        };

        dataService.getTodos(function(response) {
            console.log(response.data);
            $scope.todos = response.data;
        });

        $scope.deleteTodo = function(todo, index) {
            dataService.deleteTodo;
            $scope.todos.splice(index, 1);
        };

        $scope.saveTodos = dataService.saveTodos;
    })

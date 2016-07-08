angular.module('todoListApp')
.directive('helloWorld', function(){
  return {
    template:"this is the hello world directive",
    restrict:"E"
  };
});

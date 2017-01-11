function MainController($scope){
$scope.name = "Craig";
}

angular
  .module('app')
  .controller('MainController', MainController);

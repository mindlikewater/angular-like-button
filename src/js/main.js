import angular from 'angular';

angular
  .module('app', [])
  .controller('MainController', function ($scope) {
    $scope.countUp = true;
    $scope.count = "0 Likes";
    $scope.likes = 0;

    $scope.addLike = function () {
      if ($scope.countUp === true) {
        ++$scope.likes;

        if ($scope.likes < 0) {
          $scope.likes = 0;
        }
        if ($scope.likes === 1) {
          $scope.count = $scope.likes + " Like";
        }
        else {
          $scope.count = $scope.likes + " Likes";
        }
      }
      else {
        --$scope.likes;

        if ($scope.likes < 0) {
          $scope.likes = 0;
        }
        else if ($scope.likes === 1) {
          $scope.count = $scope.likes + " Like";
        }
        else {
          $scope.count = $scope.likes + " Likes";
        }
      }
    }

    $scope.toggleAdd = function () {
      if ($scope.countUp === true) {
        $scope.countUp = false;
      }
      else {
        $scope.countUp = true;
      }
    }
  });

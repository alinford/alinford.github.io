'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
		$scope.addersubtractor = {};

		$scope.add = function() {
			var res = $scope.addersubtractor.X + $scope.addersubtractor.Y;
			if(!isNaN(res)) {
				$scope.addersubtractor.result = $scope.addersubtractor.X + " plus " + $scope.addersubtractor.Y + " is " + res;
			}
		};

		$scope.subtract = function() {
			var res = $scope.addersubtractor.X - $scope.addersubtractor.Y;
			if(!isNaN(res)) {
				$scope.addersubtractor.result = $scope.addersubtractor.X + " minus " + $scope.addersubtractor.Y + " is " + res;
			}
		};
  }]);

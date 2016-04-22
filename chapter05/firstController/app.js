/**
 * Created by lixiaodong on 16/4/22.
 */
var app = angular.module('app', []);
app.controller('FirstController', function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function(amount) {
        $scope.counter -= amount;
        if($scope.counter < 0){
            alert('invalid number');
        }
    };
});
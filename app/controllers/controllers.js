/**
 * Created by Ani on 21-12-2016.
 */
var MyFirstController = function($scope ,userData) {
    $scope.dat = userData.user;
};
app.controller("MyFirstController", MyFirstController);
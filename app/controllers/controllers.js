/**
 * Created by Ani on 21-12-2016.
 */
var MyFirstController = function($scope, $http, userData, footballTeam) {
    $scope.dat = userData.user;

    var names= footballTeam.lookupUser();
    names.then(function (data) {
            $scope.names = data;
        });
    var league= footballTeam.jello();
      league.then(function (data) {
            $scope.league = data;
        });
};
app.controller("MyFirstController", MyFirstController);
/**
 * Created by Ani on 21-12-2016.
 */
var app = angular.module('myfirstangularapp', []);
var MyFirstController = function($scope, $http, userData, footballTeam) {
    $scope.data = userData.user;

    $scope.getItems = function(teamname) {
        console.log("teamname: " + teamname);
        footballTeam.lookupUser(teamname).then(onLookupComplete, onError);
    };
    var onLookupComplete = function(response) {
        $scope.user = response.data;
        $scope.status = response.status;

    };

    var onError = function(reason) {
        $scope.error = "Ooops, something went wrong..";
    };
};

app.controller("MyFirstController", MyFirstController);
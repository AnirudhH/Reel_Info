/**
 * Created by Ani on 28-12-2016.
 */
var detailController = function($scope ,$stateParams,movieData) {
    var detail = movieData.movie_details($stateParams.id);
    detail.then(function (data) {
        console.log($stateParams.id);
        $scope.details = data;
        // console.log($scope.details);
    });
    var cast = movieData.cast_details($stateParams.id);
    cast.then(function (data) {
        console.log($stateParams.id);
        $scope.cast = data;
    });
    };
app.controller("detailController", detailController);
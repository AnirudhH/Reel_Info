/**
 * Created by Ani on 21-12-2016.
 */
var MyFirstController = function($scope, $http, userData, movieData) {
    $scope.dat = userData.user;

    var popular= movieData.popular_movies();
    popular.then(function (data) {
            $scope.popular = data.results;
        });
    var top= movieData.upcoming_movies();
      top.then(function (data) {
            $scope.upcoming = data.results;
        });
    var latest = movieData.latest_movies();
    latest.then(function (data) {
        $scope.latests = data.results;
    })
    var single = movieData.movie_details();
    single.then(function (data) {
        $scope.single = data;
    })
};
app.controller("MyFirstController", MyFirstController);
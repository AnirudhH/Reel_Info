/**
 * Created by Ani on 28-12-2016.
 */
var latestController = function ($scope,movieData) {
    var latest = movieData.latest_movies();
    latest.then(function (data) {
        $scope.latests = data.results;
    });
};
app.controller ('latestController',latestController);
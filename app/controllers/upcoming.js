/**
 * Created by Ani on 28-12-2016.
 */
var upcomingController = function ($scope,movieData) {
    var upcoming= movieData.upcoming_movies();
    upcoming.then(function (data) {
        $scope.upcoming = data.results;
    });

};
app.controller ('upcomingController',upcomingController);
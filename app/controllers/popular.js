/**
 * Created by Ani on 28-12-2016.
 */
var popularController = function ($scope,movieData) {
    var popular= movieData.popular_movies();
    popular.then(function (data) {
        $scope.popular = data.results;
    });
};
app.controller ('popularController',popularController);
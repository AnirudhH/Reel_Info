/**
 * Created by Ani on 28-12-2016.
 */
var detailController = function(id,$scope ,movieData) {
    var detail = movieData.movie_details(id);
    detail.then(function (data) {
        console.log(id);
        $scope.details = data.results;
    });
};
app.controller("detailController", detailController);
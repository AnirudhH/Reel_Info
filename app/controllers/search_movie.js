/**
 * Created by Ani on 04-01-2017.
 */
var searchController = function ($scope,movieData,$stateParams) {

    if($stateParams.name == null){
       return $scope.errorss = "Please Enter Movie name ";
    }
    else{
        var search = movieData.search_movies($stateParams.name);
        search.then(function (data) {
        console.log($stateParams.name);
        $scope.movies = data.results;
    });
    }
};
app.controller ('searchController',searchController);
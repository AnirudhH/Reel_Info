/**
 * Created by Ani on 21-12-2016.
 */
var key = '5ff73eef6bd74a64f1ad9b5f606b2854';
app.factory('userData', function() {

    return {

        user: {
            firstName: 'Anirudh',
            lastName: 'hindupur',
            email: 'anirudh798@gmail.com',
            dob: new Date(1094, 02, 04), // month value is 0 based, others are 1 based.
            username: 'anirudh'
        }
    }

});

app.factory('movieData', function($http) {
    return {
        popular_movies: function () {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/popular?api_key=' + key +'&language=en-US&page=1'}).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        },
        upcoming_movies: function () {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + key +'&language=en-US&page=1'}).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        },
        latest_movies: function () {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + key +'&language=en-US&page=1'}).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        }
    }
});


/**
 * Created by Ani on 21-12-2016.
 */
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

app.factory('footballTeam', function($http) {
    return {
        lookupUser: function () {
          return   $http({
                method: 'GET',
                url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/premier-league/seasons/16-17/teams',
                headers: {'X-Mashape-Key': 'zuB7h9FNEFmshebL2GJx7x5G627Lp1RumnbjsnPuI3JAcbbTv8'}
            }).then(function (response) {
                        console.log(response.data);
                        // $scope.league = response.data;
                        return response.data;
                    });
        },
        jello: function () {
           return  $http({
                method: 'GET',
                url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/premier-league/seasons/16-17/standings',
                headers: {'X-Mashape-Key': 'zuB7h9FNEFmshebL2GJx7x5G627Lp1RumnbjsnPuI3JAcbbTv8'}
            }).then(function (response) {
                    console.log(response.data);
                    return response.data;
                });
        },
        jello: function () {
            return  $http({
                method: 'GET',
                url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/premier-league/seasons/16-17/standings',
                headers: {'X-Mashape-Key': 'zuB7h9FNEFmshebL2GJx7x5G627Lp1RumnbjsnPuI3JAcbbTv8'}
            }).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        }
    }
});
//
// app.factory('footballTable', function($http,$scope) {
//     this.jello = function () {
//         $http.get({url : 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/premier-league/seasons/16-17/standings', headers: { 'X-Mashape-Key': 'zuB7h9FNEFmshebL2GJx7x5G627Lp1RumnbjsnPuI3JAcbbTv8'}})
//                 .then(function(response) {
//                     console.log(response);
//                     $scope.table = response;
//                     });
//         }
//     });



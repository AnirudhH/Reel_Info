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
        lookupUser: function(user) {
            console.log('Looking up user: ' + user);
            return $http({method : 'GET',url : 'http://api.football-data.org/v1/teams/?name='+ user, headers: { 'X-Auth-Token':'44b92586918744789de86cc81ba0ac89'}})
                .then(function(response) {
                    console.log(response);
                    return response;

                    },
                    // error handler
                    function(response) {
                        return response;
                    });
        }
    }
});


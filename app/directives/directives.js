/**
 * Created by Ani on 21-12-2016.
 */
app.directive('myInput', function() {
    return {
        template: "<label>User:<input type='text' ng-model='username'></label><button ng-click='getGitHubUser(username)'>GO</button>"
    };
});
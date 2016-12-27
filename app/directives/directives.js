/**
 * Created by Ani on 21-12-2016.
 */
app.directive('myInput', function() {
    return {
        template: "<label><input type='text' ng-model='teamname' placeholder='enter the team name'></label><button ng-click='getItems(teamname)'>GO</button>"
    };
});
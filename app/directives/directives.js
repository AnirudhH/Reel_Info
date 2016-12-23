/**
 * Created by Ani on 21-12-2016.
 */
app.directive('myInput', function() {
    return {
        template: "<label>Team:<input type='text' ng-model='teamname'></label><button ng-click='getItems(teamname)'>GO</button>"
    };
});
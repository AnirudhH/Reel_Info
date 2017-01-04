/**
 * Created by Ani on 21-12-2016.
 */
app.directive('myInput', function() {
    return {
        template: "<input type='text' class='search-muvi-text' ng-model='moviename' placeholder='enter the movie name' minlength='1' maxlength='10'><button class='go' ui-sref='search_movie({name : moviename})'>GO</button>"
    };
});
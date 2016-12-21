/**
 * Created by Ani on 21-12-2016.
 */

app.filter('removeAllSpaces', function () {
    return function(str) {
        return str.replace(/\s/g, '');
    };
});
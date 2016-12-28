/**
 * Created by Ani on 28-12-2016.
 */
angular.module('angularApp').config(routerConfig);
function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller : 'MyFirstController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('popular', {
            // we'll get to this in a bit
            url:'/popular',
            templateUrl : 'partials/popular.html',
            controller : 'popularController'
        })
        .state('latest', {
            // we'll get to this in a bit
            url:'/latest',
            templateUrl : 'partials/latest.html',
            controller : 'latestController'
        })
        .state('upcoming', {
            // we'll get to this in a bit
            url:'/upcoming',
            templateUrl : 'partials/upcoming.html',
            controller : 'upcomingController'
        })


};
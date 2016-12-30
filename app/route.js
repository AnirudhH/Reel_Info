/**
 * Created by Ani on 28-12-2016.
 */
angular.module('angularApp').config(routerConfig);
function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller : 'MyFirstController'
        })

        .state('popular', {
            url:'/popular',
            templateUrl : 'partials/popular.html',
            controller : 'popularController'
        })
        .state('latest', {
            url:'/latest',
            templateUrl : 'partials/latest.html',
            controller : 'latestController'
        })
        .state('upcoming', {
            url:'/upcoming',
            templateUrl : 'partials/upcoming.html',
            controller : 'upcomingController'
        })
        .state('detail', {
            url:'/movie/:id',
            templateUrl : 'partials/single-muvi.html',
            controller : 'detailController'
        })

}
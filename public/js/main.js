angular.module('alurapic', ['myDirectives', 'ngAnimate', 'ngRoute'])
       .config(function ($routeProvider, $locationProvider) {

           $locationProvider.html5Mode(true);

           $routeProvider.when('/photos', {
               templateUrl: 'partials/main.html',
               controller: 'PhotosController'
           });

           $routeProvider.when('/photos/new', {
               templateUrl: 'partials/photo.html'
           });

           $routeProvider.otherwise({redirectTo: '/photos'});
       });
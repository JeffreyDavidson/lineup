angular.module("MyApp",  ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl : "read.html",
        controller : "ReadController"
    }).otherwise({
        redirectTo : "/"
    });
})

.controller("ReadController", function ($scope, dataService) {
    




});
angular.module("MyApp",  ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl : "read.html",
        controller : "TeamsController"
    }).when('/:id', {
        templateUrl : "view.html",
        controller : "ViewController"
    }).otherwise({
        redirectTo : "/"
    });
})

.controller("TeamsController", function ($scope, dataService) {
    promise = dataService.getTeams();

    promise.then(list => {
        $scope.teams = list;
    });
})

.controller("ViewController", function ($scope, dataService, $routeParams) {
    promise = dataService.getTeamRoster($routeParams.id);

    promise.then(list => {
        $scope.roster = list;
    });
});
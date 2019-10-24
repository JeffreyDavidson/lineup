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
    
    $scope.startingLineupArray = dataService.getStartingLineup();
    
    $scope.benchArray = dataService.getBench();
    
    $scope.removeStartingLineupPlayer = function(removedPlayer) {
        dataService.removeStartingLineupPlayer(removedPlayer);
    }
    
    $scope.removeBenchPlayer = function(removedPlayer) {
        dataService.removeBenchPlayer(removedPlayer);
    }
})



    $scope.removeStartingLineupPlayer = function (removedPlayer) {
        dataService.removeStartingLineupPlayer(removedPlayer);
    }

    $scope.removeBenchPlayer = function (removedPlayer) {
        dataService.removeBenchPlayer(removedPlayer);
    }
});
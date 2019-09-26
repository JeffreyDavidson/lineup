angular.module("MyApp",  ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl : "read.html",
        controller : "ReadController"
    }).when('/create', {
        templateUrl : "create.html",
        controller : "CreateController"
    }).when('/edit/:id', {
        templateUrl : "edit.html",
        controller : "EditController"
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

.controller("CreateController", function ($scope, $location, dataService) {
    $scope.playerName;
    $scope.playerPosition;
    $scope.playerBattingAverage;
    $scope.playerBats;
    
    $scope.benchArray = dataService.getBench();
    
    $scope.addPlayer = function() {
        var player = {
            "playerName": $scope.playerName, 
            "playerPosition": $scope.playerPosition, 
            "playerBattingAverage": $scope.playerBattingAverage, 
            "playerBats": $scope.playerBats
        };

        dataService.addPlayer(player);
        
        $scope.playerName = '';
        $scope.playerPosition = '';
        $scope.playerBattingAverage = '';
        $scope.playerBats = '';
    }
    
    $scope.$apply(function() { 
	    $location.path("/"); 
	});
})

.controller("EditController", function ($scope, dataService, $routeParams) {
    $scope.playerName;
    $scope.playerPosition;
    $scope.playerBattingAverage;
    $scope.playerBats;
    
    $scope.playerID = $routeParams.id;
    $scope.startingLineupArray = dataService.getStartingLineup();
    
    var thePlayer = $scope.startingLineupArray[$scope.playerID];
    
    $scope.playerName = thePlayer.playerName;
    $scope.playerPosition = thePlayer.playerPosition;
    $scope.playerBattingAverage = thePlayer.playerBattingAverage;
    $scope.playerBats = thePlayer.playerBats;
    
    $scope.benchArray = dataService.getBench();
    
    $scope.editPlayer = function() {
        var player = {
            "playerName": $scope.playerName, 
            "playerPosition": $scope.playerPosition, 
            "playerBattingAverage": $scope.playerBattingAverage, 
            "playerBats": $scope.playerBats
        };

        dataService.editPlayer(player,$scope.playerID);
    }
});
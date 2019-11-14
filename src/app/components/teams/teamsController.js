export default function TeamsController($scope, teamService) {
    console.log('teams controller');
    promise = dataService.getTeams();

    promise.then(list => {
        $scope.teams = list;
    });
}

TeamsController.$inject = ['$scope', 'teamService'];
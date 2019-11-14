export default function EmployeesController($scope, rosterService, $routeParams) {
    console.log($routeParams.id);
    console.log('roster controller');
    promise = dataService.getTeamRoster($routeParams.id);

    promise.then(list => {
        $scope.roster = list;
    });
}

RosterController.$inject = ['$scope', 'rosterService', '$routeParams'];
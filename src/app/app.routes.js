export default function Routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl : "read.html",
        controller : "TeamsController"
    }).when('/teams/:id', {
        templateUrl : "view.html",
        controller : "ViewController"
    }).otherwise({
        redirectTo : "/"
    });
}

Routes.$inject = ['$routeProvider', '$locationProvider'];

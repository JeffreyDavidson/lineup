import angular from "angular";
import angular_route from "angular-route";
import teamsController from '../../app/components/teams/teamsController.js';
import teamService from '../../app/components/teams/teamService.js';

angular.module("MLBApp", ['ngRoute'])
.controller('teamsController', teamsController)
.service('teamService', teamService);


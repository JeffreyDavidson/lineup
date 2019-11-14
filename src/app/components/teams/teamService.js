export default function TeamService($http) {
    this.getPlayer = function (playerId) {
        var url = "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam";
        var params = {
            league_list_id: 'mlb', 
            game_type: 'R',
            season: '2019',
            player_id: playerId
        };
        var config = { params: params };

        return $http.get(url, config)
            .then(function (response) {
                var player = response.data.results;
                console.log(player);
                return player;
            });
    }

    this.getTeamRoster = function (teamId) {
        var url = "http://lookup-service-prod.mlb.com/json/named.roster_40.bam";
        var params = {
            team_id:teamId,
        };
        var config = { params: params };

        return $http.get(url, config)
            .then(function (response) {
                console.log(response.data.roster_40.queryResults.row);
                var roster = response.data.roster_40.queryResults.row;
                return roster;
            });
    }

    this.getTeams = function () {
        var url = "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam";
        var params = {
            sport_code:'mlb', 
            season:'2019'
        };
        var config = { params: params };

        return $http.get(url, config)
            .then(function (response) {
                console.log(response);
                var teamsList = response.data.results;
                console.log(teamsList);
                return teamsList;
            });
    }
}

TeamService.$inject = ['$http'];
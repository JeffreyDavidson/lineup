angular.module("MyApp").service("dataService", function () {
    
    var startingLineupArray = [
        { 
            playerName: 'Brett Gardner', 
            playerPosition: 'LF', 
            playerBattingAverage: '.256', 
            playerBats: 'Left', 
        },
        { 
            playerName: 'Derek Jeter', 
            playerPosition: 'SS', 
            playerBattingAverage: '.256', 
            playerBats: 'Right', 
        },
        { 
            playerName: 'Jacoby Ellsbury', 
            playerPosition: 'CF', 
            playerBattingAverage: '.271', 
            playerBats: 'Left', 
        },
        { 
            playerName: 'Carlos Beltran', 
            playerPosition: 'DH', 
            playerBattingAverage: '.233', 
            playerBats: 'Switch', 
        },
        { 
            playerName: 'Mark Teixeira', 
            playerPosition: '1B', 
            playerBattingAverage: '.216', 
            playerBats: 'Switch', 
        },
        { 
            playerName: 'Brian McCann', 
            playerPosition: 'C', 
            playerBattingAverage: '.232', 
            playerBats: 'Left', 
        },
        { 
            playerName: 'Ichiro Suzuki', 
            playerPosition: 'RF', 
            playerBattingAverage: '.284', 
            playerBats: 'Left', 
        },
        { 
            playerName: 'Chase Headley', 
            playerPosition: '3B', 
            playerBattingAverage: '.262', 
            playerBats: 'Switch', 
        },
        { 
            playerName: 'Brendan Ryan', 
            playerPosition: '2B', 
            playerBattingAverage: '.167', 
            playerBats: 'Right', 
        }
    ];
    
    var benchArray = [
        { 
            playerName: 'Martin Prado', 
            playerPosition: 'OF', 
            playerBattingAverage: '.316', 
            playerBats: 'Right', 
        },
        { 
            playerName: 'Chris Young', 
            playerPosition: 'OF', 
            playerBattingAverage: '.222', 
            playerBats: 'Right', 
        },
        { 
            playerName: 'Austin Romine', 
            playerPosition: 'C', 
            playerBattingAverage: '.231', 
            playerBats: 'Right', 
        },
        { 
            playerName: 'Stephen Drew', 
            playerPosition: '2B', 
            playerBattingAverage: '.162', 
            playerBats: 'Left', 
        }
    ];
    
    this.getStartingLineup = function () {
        return startingLineupArray;
    };
    
    this.getBench = function () {
        return benchArray;
    };
    
    this.addPlayer = function (player) {
        //var benchArray = this.getBench();
        benchArray.push(player);
    };
    
    this.editPlayer = function(player,idx){
    	startingLineupArray.splice(idx,1,player);
    }
    
    this.removeStartingLineupPlayer = function (player) {
        //var startingLineupArray = this.getStartingLineup();
        startingLineupArray.splice(startingLineupArray.indexOf(player), 1);
    };
    
    this.removeBenchPlayer = function (player) {
        //var benchArray = this.getBench();
        benchArray.splice(benchArray.indexOf(player), 1);
    };
});
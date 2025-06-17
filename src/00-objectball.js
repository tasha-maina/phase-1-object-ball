function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// Helper function to get all players
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// 1. Points scored
function numPointsScored(playerName) {
  return allPlayers()[playerName]?.points || null;
}

// 2. Shoe size
function shoeSize(playerName) {
  return allPlayers()[playerName]?.shoe || null;
}

// 3. Team colors
function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null;
}

// 4. Team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 5. Player numbers
function playerNumbers(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(p => p.number);
    }
  }
  return [];
}

// 6. Player stats
function playerStats(playerName) {
  return allPlayers()[playerName] || null;
}

// 7. Big shoe rebounds
function bigShoeRebounds() {
  let maxShoe = 0;
  let rebounds = 0;
  const players = allPlayers();
  for (let player in players) {
    if (players[player].shoe > maxShoe) {
      maxShoe = players[player].shoe;
      rebounds = players[player].rebounds;
    }
  }
  return rebounds;
}

// BONUS: Most points
function mostPointsScored() {
  let maxPoints = 0;
  let topPlayer = '';
  const players = allPlayers();
  for (let player in players) {
    if (players[player].points > maxPoints) {
      maxPoints = players[player].points;
      topPlayer = player;
    }
  }
  return topPlayer;
}

// BONUS: Winning team
function winningTeam() {
  const game = gameObject();
  const sumPoints = team =>
    Object.values(game[team].players).reduce((sum, p) => sum + p.points, 0);
  const homePoints = sumPoints('home');
  const awayPoints = sumPoints('away');
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// BONUS: Player with longest name
function playerWithLongestName() {
  const players = Object.keys(allPlayers());
  return players.reduce((longest, name) =>
    name.length > longest.length ? name : longest
  );
}

// SUPER BONUS: Does long name steal a ton?
function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const players = allPlayers();
  let maxSteals = 0;
  for (let player in players) {
    if (players[player].steals > maxSteals) {
      maxSteals = players[player].steals;
    }
  }
  return players[longestName].steals === maxSteals;
}

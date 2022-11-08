/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
	let result = '';
	if (p1 === p2) {
		result = 'Draw!';
	} else if (p1 == 'scissors') {
		if (p2 == 'paper') {
			result = 'Player 1 won!';
		} else {
			result = 'Player 2 won!';
		}
	} else if (p1 == 'rock') {
		if (p2 == 'paper') {
			result = 'Player 2 won!';
		} else {
			result = 'Player 1 won!';
		}
	} else if (p1 == 'paper') {
		if (p2 == 'scissors') {
			result = 'Player 2 won!';
		} else {
			result = 'Player 1 won!';
		}
	}
	return result;
};
console.log(rps('scissors', 'paper')); // p1
console.log(rps('scissors', 'rock')); // p2
console.log(rps('paper', 'paper')); // draw

// Other Solution
// Solution #1
/*
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
*/

// Solution #2
/*
// Makes the game extensible (in case we need lizards and spock later)
const hands = {
  "rock" : "paper",
  "scissors" : "rock",
  "paper" : "scissors"
}

//use a rest param for the players,so I can use indexOf to "find" a winner, rather than logic-out a winner

const rps = (...players) => {
  let result = "Draw!"
  
  //don't do anything if there's a draw
  if (players[0] !== players[1]) {
    let winner;
    
    for (let hand in hands) {
        // winner logic: the "hand" was played in the players, and we **don't** have the thing that could beat it
        if (players.indexOf(hand) !== -1 && players.indexOf(hands[hand]) == -1) winner = players.indexOf(hand) 
    }
    
    result = `Player ${winner+1} won!`
  }
  return result;
};
*/

/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
	'🍕 pizza': 3,
	'🌮 tacos': 10,
	'🥗 salads': 7,
	'🍝 pasta': 5,
};

function findTheWinner(obj) {
	let winner = '';
	let vote = 0;
	for (let [key, value] of Object.entries(obj)) {
		if (vote < value) {
			vote = value;
			winner = key;
		}
	}

	return `The winner is ${winner} with ${vote} votes!`;
}

/*
function findTheWinner(obj){
  // initialize some new variable to: 
      // keep track of the current highest vote number
      let highestVotes = 0;
      // keep track of the current winning item
      let winningItem = "";
  // for each food option in the food object
  for(let food in obj){
        // is the current value higher than the value of highestVotes?
        if(obj[food] > highestVotes){
            // yes: the new value of highestVotes in the current value and
            highestVotes = obj[food];
            // winningItem = the current property
            winningItem = food;
        }   
  }
    
  // return string announcing the winner using winningItme and highestVote variables
  return `The winner is ${winningItem} with ${highestVotes} votes.`
}
*/

console.log(findTheWinner(gameNightFood));

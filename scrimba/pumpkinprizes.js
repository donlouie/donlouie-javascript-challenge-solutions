/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [1, [4, 5], [4, 7, 6, 4], 3, 5];

const kittyPrizes = [
	['💰', '🐟', '🐟'],
	'🏆',
	'💐',
	'💵',
	['💵', '🏆'],
	['🐟', '💐', '💐'],
	'💵',
	'💵',
	['🐟'],
	'🐟',
];

// Solution 2
function flatten(arr) {
	let flatArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i]) === true) {
			for (let j = 0; j < arr[i].length; j++) {
				flatArray.push(arr[i][j]);
			}
		} else {
			flatArray.push(arr[i]);
		}
	}

	return flatArray;
}

// Solution 1
/*
function flatten(arr) {
	return arr.flat();
}
*/

// console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

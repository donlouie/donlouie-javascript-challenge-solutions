/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

const dup = (s) => {
	const result = [];

	for (let i = 0; i < s.length; i++) {
		let currentString = s[i].split('');
		let filteredString = '';
		for (let j = 0; j < currentString.length; j++) {
			let lastLetter = currentString[j - 1];
			let currentLetter = currentString[j];

			if (currentLetter !== lastLetter) {
				filteredString += currentString[j];
			} else {
				continue;
			}
		}
		result.push(filteredString);
		filteredString = '';
	}

	return result;
};

console.log(dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']));
// => ['codewars','picaniny','hubububo']

// Other Solution
function dup(s) {
	return s.map((x) => x.replace(/(.)\1+/g, '$1'));
}

function dup(s) {
	return s.map((w) => {
		return w
			.split('')
			.filter((c, i, arr) => {
				return c !== arr[i - 1];
			})
			.join('');
	});
}

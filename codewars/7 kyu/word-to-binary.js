/*
Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]
*/

const wordToBin = (str) => {
	const characters = [...str];
	const binary = [];

	for (character of characters) {
		binary.push(character.charCodeAt(0).toString(2).padStart(8, '0'));
	}

	return binary;
};

console.log(wordToBin('man'));

// Other Solution
// Solution 1
/*
function wordToBin(str) {
  return Array.from(str, c => "0" + c.charCodeAt(0).toString(2))
}
*/

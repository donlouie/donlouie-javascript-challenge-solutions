const spinWords = (string) => {
	const oldString = string.split(' ');
	let newString = [];

	oldString.forEach((word) => {
		if (word.length >= 5) {
			let reversed = word.split('').reverse().join('');
			newString.push(reversed);
		} else {
			newString.push(word);
		}
	});

	return newString.join(' ');
};

console.log(spinWords('Welcome')); // => returns 'emocleW'
// console.log(spinWords('Hey fellow warriors')); // => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// Other Solution
// Solution 1
/*
function spinWords(str) {
    return str
        .split(' ')
        .map( w => w.length < 5 ? w : w.split('').reverse().join(''))
        .join(' ')
}
*/

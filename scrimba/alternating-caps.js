/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'));

function altCaps(str) {
	str = str.split('');

	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			str[i] = str[i].toUpperCase();
		}
	}

	return str.join('');
}

// ? Move all exclamation marks to the end of the sentence
// * Example
// ! remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"

function remove(s) {
	//coding and coding....

	//? char special or not
	const regx = new RegExp('[a-zA-Z0-9\\s+]');

	let letters = '';
	let symbols = '';

	for (let i = 0; i < s.length; i++) {
		let c = s[i].toString();

		if (regx.test(c)) letters = letters + c;
		else symbols = symbols + c;
	}
	return letters + symbols;
}

console.log(remove('Hi! !Hi Hi!')); // "Hi Hi Hi!!!"

// Other Solution
// Solution #1
/*
function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}

Explanation
1st replace creates a string without ! from the input
2nd replace creates a string of only ! from the input
they are concatenated

*/

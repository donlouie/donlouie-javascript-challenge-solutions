function swap(string) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const swappedChars = [];

	for (let c of string) {
		if (vowels.includes(c)) {
			swappedChars.push(c.toUpperCase());
		} else {
			swappedChars.push(c);
		}
	}

	return swappedChars.join('');
}

console.log(swap('Hello World!'));

// Other Solution
/*
function swap(string) {
    const vowelRegex = /[aeiou]/g;
    return string.replace(vowelRegex, (match) => match.toUpperCase());
}
*/

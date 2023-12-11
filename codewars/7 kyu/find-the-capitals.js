// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = (word) => {
	const isCapital = [];
	for (let i = 0; i < word.length; i++) {
		const c = word[i];
		if (c === c.toUpperCase()) {
			isCapital.push(i);
		}
	}
	return isCapital;
};

console.log(capitals('CodEWaRs'));

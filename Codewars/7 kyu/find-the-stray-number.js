// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = (numbers) => {
	const occurrences = {};

	for (const value of numbers) {
		if (occurrences[value]) {
			occurrences[value]++;
		} else {
			occurrences[value] = 1;
		}
	}

	for (const value in occurrences) {
		if (occurrences[value] === 1) {
			return Number(value);
		}
	}

	return null;
};

console.log(stray([2, 1, 1])); // => 2

// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

const twoArePositive = (a, b, c) => {
	const isPositive = (n) => {
		return n > 0;
	};

	let positiveCount = isPositive(a) + isPositive(b) + isPositive(c);

	return positiveCount === 2;
};

console.log(twoArePositive(2, 4, -3));

//Other Solutions
//Solution 1
/*
function twoArePositive(a, b, c) {
  return [...arguments].filter(i => i > 0).length === 2;
};
*/

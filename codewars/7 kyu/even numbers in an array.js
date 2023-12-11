//? Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//* Example
//! ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

function evenNumbers(array, number) {
	// good luck
	const result = [];
	for (let i = 0; i <= array.length; i++) {
		if (array[i] % 2 === 0) result.push(array[i]);
	}
	return result.splice(result.length - number, number);
}

console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // => [-8, 26]

// Other Solution
// Solutoon #1
/*
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
*/

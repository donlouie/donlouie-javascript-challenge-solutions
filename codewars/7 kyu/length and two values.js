/*
Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                
5, true, false
expected result would be: [true, false, true, false, true]
*/

function alternate(n, firstValue, secondValue) {
	// your code
	let result = [];
	for (let i = 0; i < n; i++) {
		if (!(i % 2 == 0)) {
			result.push(secondValue);
		} else {
			result.push(firstValue);
		}
	}

	return result;
}

console.log(alternate(5, 'true', 'false'));

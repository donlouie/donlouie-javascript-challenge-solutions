/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

function solve(arr) {
	const lastOccurrence = {};
	const result = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		const element = arr[i];
		if (!lastOccurrence.hasOwnProperty(element)) {
			lastOccurrence[element] = i;
			result.unshift(element);
		} else if (lastOccurrence[element] === i) {
			result.unshift(element);
		}
	}

	return result;
}

console.log(solve([3, 4, 4, 3, 6, 3]));

// Other solution
// Solution 1
/*
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
*/
// Solution 2
/*
const solve = arr => [...new Set(arr.reverse())].reverse()
*/

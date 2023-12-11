/*
Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN
*/

const max = (...arg) => {
	const flattenedArr = arg.toString().split(',').map(Number);

	if (typeof array !== 'undefined' && array.length === 0) return 0;

	return flattenedArr.reduce(
		(prev, curr) => (prev > curr ? prev : curr),
		undefined
	);
};

const min = (...arg) => {
	const flattenedArr = arg.toString().split(',').map(Number);

	if (typeof array !== 'undefined' && array.length === 0) return 0;

	return flattenedArr.reduce(
		(prev, curr) => (prev < curr ? prev : curr),
		undefined
	);
};

console.log(min(1, 2, [3, [4]])); // returns 4
console.log(max(1, 2, [3, ['4r']])); //returns NaN
console.log(max()); // returns 0

// Other Solution
// Solution 1
/*
function max() {
  const arr = [...arguments].toString().split(",").map(Number);
  const nan = arr.some((el) => Number.isNaN(el));
  if (!nan) {
    arr.sort((a, b) => b - a);
    return arr[0];
  }
  return NaN;
}

function min() {
  const arr = [...arguments].toString().split(",").map(Number);
  const nan = arr.some((el) => Number.isNaN(el));
  if (!nan) {
    arr.sort((a, b) => a - b);
    return arr[0];
  }
  return NaN;
}
*/

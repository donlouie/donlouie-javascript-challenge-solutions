// The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

const stantonMeasure = (arr) => {
	return arr.filter((x) => x === arr.filter((y) => y === 1).length).length;
};

// const stantonMeasure = (arr) => {
// 	let count = 0;
// 	let n;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == 1) count++;
// 		n = count;
// 	}

// 	count = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == n) count++;
// 	}

// 	return count;
// };

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 3

// Other Solution
// Solution #1
/*
function stantonMeasure(arr) {
  const count = n => arr.filter(x => x === n).length;
  return count(count(1));
}
*/

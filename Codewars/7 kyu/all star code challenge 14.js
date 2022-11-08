/*
Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function called median() that takes an array of integers as an argument and returns the median of those integers.

Note:
The sorting step is vital
*/
// * Example
// ! median([33,99,100,30,29,50]) // =>  41.5
// ! median([3,2,1]) // => 2

function median(array) {
	//code here
	const mid = Math.floor(array.length / 2),
		nums = [...array].sort((a, b) => a - b);
	return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

console.log(median([33, 99, 100, 30, 29, 50])); // 41.5
console.log(median([3, 2, 1])); // 2

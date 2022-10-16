// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

const smallEnough = (a, limit) => {
	return a.map((x) => x <= limit).every((x) => x === true);
};

console.log(smallEnough([66, 101], 200));
// true

// Other Solution
// Solution 1
// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }

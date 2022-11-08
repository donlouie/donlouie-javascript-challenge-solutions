// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

const inAscOrder = (arr) => {
	const sorted = [...arr].sort((a, b) => a - b);
	isSorted = true;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] !== sorted[i]) {
			isSorted = false;
			break;
		}
	}

	return isSorted;
};

// console.log(inAscOrder([1, 2, 4, 7, 19])); // returns true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // false

// Other Solution
// Solution 1
/*
function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}
*/

// Solution 2
/*
const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
*/

// Solution 3
/*
function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}
*/

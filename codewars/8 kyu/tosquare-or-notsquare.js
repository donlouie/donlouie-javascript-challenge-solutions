/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/

// * Example
/*
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/

function squareOrSquareRoot(array) {
	return array.map((item) =>
		Math.sqrt(item) == Math.sqrt(item).toFixed(0)
			? Math.sqrt(item)
			: item * item
	);
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
//[ 2, 9, 3, 49, 4, 1 ]

//* Other solution
//* Solution #1
/*
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}
*/
//* Solution #2
/*
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));
*/

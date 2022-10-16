var isSquare = function (n) {
	return n >= 0 && Math.sqrt(n) % 1 === 0 ? true : false; // fix me
};

console.log(isSquare(-1)); // false
console.log(isSquare(4)); // true

// Other Solution
// Solution #1
/*
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
*/

// Solution #2
/*
const isSquare = n => Number.isInteger(Math.sqrt(n));
*/

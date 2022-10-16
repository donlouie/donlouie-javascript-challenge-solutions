// Your task is to return a number from a string.
//* Example
//! a1b2c3 -> 123

//* Solution
const FilterString = (str) => {
	return +str.match(/\d+/g).join('');
};
console.log(getNumber('a1b2c3')); // 123

// Other Solution
// Solution#1
/*
var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}
*/

// Solution#2
/*
const FilterString = value => +value.replace(/\D/g, '');
*/

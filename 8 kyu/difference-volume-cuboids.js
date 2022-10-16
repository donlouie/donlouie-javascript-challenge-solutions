/**
 *? Instruction
  If the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
  Therefore, the function should return 8.
 */
//* Example
//! findDifference([3, 2, 5], [1, 4, 4]) => 14

function findDifference(a, b) {
  return Math.abs(a.reduce((p, e) => p * e) - b.reduce((p, e) => p * e));
}

console.log(findDifference([19, 3, 8], [13, 11, 9]));
// => 14

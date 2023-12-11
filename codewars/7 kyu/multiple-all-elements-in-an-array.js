//? Multiply all elements in arary
//* Example
//! multiplyAll([1, 2, 3])(2) = [2, 4, 6];

multiplyAll = (a) => (x) => a.map((e) => e * x);

// console.log(multiplyAll([(1, 2, 3)], 2));
// => [2, 4, 6]

/**
 ** Other solutions
 ** Solution #1
const multiplyAll = (array) => (int) => array.map((number) => number * int);
 */

//? Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//* Example
//! summation(2) => 1 + 2 => 3

var summation = function (num) {
  // Code here
  return (output = (num * (num + 1)) / 2);
};

console.log(summation(8));
// => 36

/**
 ** Other solutions
 ** Solution #1
 var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}
 */

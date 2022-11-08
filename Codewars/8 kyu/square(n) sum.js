//? Complete the square sum function so that it squares each number passed into it and then sums the results together.
//* Example
//! [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    return (newArr = numbers.map((x) => x ** 2).reduce((a, b) => a + b, 0));
}

console.log(squareSum([1, 2]));

//Other Solutions
//Solution #1
/*
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
*/

//Solution #2
/*
function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}
*/

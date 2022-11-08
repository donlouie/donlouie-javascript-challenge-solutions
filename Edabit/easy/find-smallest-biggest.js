//? Create a function that takes an array of numbers and return both the minimum and
//? maximum numbers, in that order.
//* Example
//! minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//! minMax([2334454, 5]) ➞ [5, 2334454]

function minMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  let output = [];
  output.push(min);
  output.push(max);

  return output;
}

/**
 **Other Solutions
 **Solution #1
 function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
 */

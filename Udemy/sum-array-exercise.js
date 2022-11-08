//? Write a function sumArray which accepts a single arr of numbers. It should
//? return the sum of all the numbers in array
//* Example
//! [1,2,3] => 6

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumArray([1, 2, 3]);

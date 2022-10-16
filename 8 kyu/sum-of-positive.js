//? Return sum of all positive numbers in an array
//* Example
//! [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(positiveSum([-1, 2, 3, 4, -5]));
//=> 9

/**
 ** Other solutions
 ** Solution #1
 function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
 
 ** Solution #2
 function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
 */

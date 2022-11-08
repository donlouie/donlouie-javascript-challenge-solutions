//? Given a non-empty array of integers, return the result of multiplying the values together in order
//* Example
//! [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let sum = 1;
  for (var i = 0; i < x.length; i++) {
    sum = sum * x[i];
  }
  return sum;
}

console.log(grow([1, 2, 3]));
// => 6

/**
 ** Other solution
 ** Solution #1
  const grow=x=> x.reduce((a,b) => a*b);

 ** Solution #2
 const grow = (nums) => nums.reduce((product, num) => product * num, 1);
 */

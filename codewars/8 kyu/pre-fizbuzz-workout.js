//? Your expected output is an array of positive integers from 1 to n (inclusive).
//* Example
//!  Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);

function preFizz(n) {
  const arr = [];
  x = 0;
  while (x != n) {
    x++;
    arr.push(x);
  }
  return arr;
}

console.log(preFizz(5));
// => [1,2,3,4,5]

/**
 ** Other solution
 ** Solution #1
 let preFizz = n => [...Array(n)].map((x, i) => i+1);
 */

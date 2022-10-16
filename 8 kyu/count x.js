//? Create a function with two arguments that will return an array of the first (n) multiples of (x).
//* Example
//! countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]

function countBy(x, n) {
    const r = [];
    for (let i = x; n > 0; i += x) {
        console.log(i);
        r.push(i);
        n--;
    }

    return r;
}

console.log(countBy([2, 5]));

//Other Solution
//Solution #1
/*
function countBy(x, n) {
  var z = []
  for (var i = 1; i <= n; i++) {
    z.push(x* i);
  }
  return z
}
*/

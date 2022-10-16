//? Given an array of integers, return a new array with each value doubled.
//* Example
//! [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  const newArray = x.map((n) => {
    return n + n;
  });
  return newArray;
}

console.log(maps([1, 2, 3]));
// => [2,4,6]

//? Return input as negative
//* Example
//! makeNegative(1) => -1

function makeNegative(num) {
  // Code?
  return num > 0 ? -Math.abs(num) : num;
}

console.log(makeNegative(42));
// => -42

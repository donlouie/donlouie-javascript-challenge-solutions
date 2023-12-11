//? Return number of squares in a n*n grid
//* Example
//! numberSquares(2) => 5
//! numberSquares(4) => 30
//! numberSquares(5) => 55
//? 2x2 => 2^2 + 1^2 = 5.
//? 4x4 => 4^2 + 3^2 + 2^2 + 1^2 = 30.
//? 5x5 => 5^2 + 4^2 + 3^2 + 2^2 + 1^1 = 55.

function numberSquares(n) {
  let totalSquares = 0;
  for (i = 0; i <= n; i++) {
    totalSquares += Math.pow(i, 2);
  }
  console.log(totalSquares);
}

numberSquares(2);

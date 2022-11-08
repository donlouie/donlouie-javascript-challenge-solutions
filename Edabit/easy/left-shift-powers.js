//? The left shift operation is similar to multiplication by powers of two.
//? Write a function that mimics (without the use of <<) the left shift operator and returns the
//? result from the two given integers.
//* Examples
//! shiftToLeft(5, 2) ➞ 20
//! shiftToLeft(-32, 2) ➞ -128

function shiftToLeft(x, y) {
  return x * Math.pow(2, y);
}

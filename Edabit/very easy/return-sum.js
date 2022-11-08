//? Create a function that takes two numbers as arguments and return their sum.
//* Examples
//! addition(3, 2) ➞ 5
//! addition(-3, -6) ➞ -9

function addition(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Sorry but you didn't pass two numbers.";
  }
  return a + b;
}

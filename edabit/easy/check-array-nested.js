//? Create a function that returns true if the first array can be nested inside the second.
//? arr1 can be nested inside arr2 if:
//? arr1's min is greater than arr2's min.
//? arr1's max is less than arr2's max.
//* Examples
//! canNest([1, 2, 3, 4], [0, 6]) ➞ true
//! canNest([9, 9, 8], [8, 9]) ➞ false

function canNest(arr1, arr2) {
  if (
    Math.max(...arr1) < Math.max(...arr2) &&
    Math.min(...arr1) > Math.min(...arr2)
  ) {
    return true;
  } else {
    return false;
  }
}

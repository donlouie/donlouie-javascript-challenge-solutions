//? Write a function lastElement which accepts a single arr argument. Function
//? should return last element of array, if array is empty return null
//* Example
//! [3,5,7] => 7
//! [1] => 1
//! [] => null

function lastElement(arr) {
  if (!arr.length == 0) {
    return arr.slice(-1).pop();
  }
  return null;
}

lastElement([3, 5, 7]);

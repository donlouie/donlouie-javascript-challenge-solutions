//? Create a function that accepts a Date object and returns true if it's Christmas Eve and
//? false otherwise
//* Example
//! timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
//! timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

function timeForMilkAndCookies(date) {
  if (date.getDate() == 24 && date.getMonth() == 11) {
    return true;
  } else {
    return false;
  }
}

/**
 ** Other solutions
 **Solution #1
 function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}
 */

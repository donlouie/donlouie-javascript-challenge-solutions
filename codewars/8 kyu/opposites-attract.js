//? Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
//* Example
//! even + odd = inlove
//! even + even / odd + odd = not inlove

function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 == 0 && flower2 % 2 == 0) {
    return false;
  } else if (flower1 % 2 == 1 && flower2 % 2 == 1) {
    return false;
  } else {
    return true;
  }
}

console.log(lovefunc(1, 4));
// => lovefunc(1, 4) => true

/**
 ** Other Solutions
 ** Solution #1
 function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
 */

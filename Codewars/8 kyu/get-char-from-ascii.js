//? Write a function which takes a number and returns the corresponding ASCII char for that value.
//* Example
//! get_char(65) # => 'A'

function getChar(c) {
  // ...
  return String.fromCharCode(c);
}

console.log(getChar(55));
// => 7

/**
**Other solutions
**Solution #1
const getChar = String.fromCharCode;

**Solution #2
var getChar = c => String.fromCharCode(c);
*/
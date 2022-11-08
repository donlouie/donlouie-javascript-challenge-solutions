//? Remove First and Last character of string
//* Example
//! eloquent => loquen

const removeChar = (str) => {
  return str.slice(1, -1);
};

console.log(removeChar('country'));
// country => ountr

//? Create a function that takes a string and returns strin with its letters in alphabetical order
//* Example
//! AlphabetSoup("hello") ➞ "ehllo"

function AlphabetSoup(str) {
  console.log(str.split('').sort().join(''));
}

AlphabetSoup('hello');

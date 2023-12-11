//? Write a function which takes a list of strings and returns each line prepended by the correct number.
//? The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//* Example
//! number([]) // => []
//! number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
  //your awesome code here
  let lnum = 1;
  newArr = [];

  for (let i of array) {
    const output = `${lnum}: ${i}`;
    newArr.push(output);
    lnum++;
  }

  return newArr;
};

console.log(number(['a', 'b', 'c']));
// => ["1: a", "2: b", "3: c"]

/**
 ** Other solution
 ** Solution #1
 var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

** Solution #2
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
 */

//? Reverse string while maintaining spaces in orignal place.
//* Example
//! solve("our code") = "edoc ruo"

function solve(str) {
  const arr = str.split(' ');
  const newArr = arr.map((words) => words.split('').reverse().join(''));

  return newArr.reverse().join(' ');
}

console.log(solve('codewars'));
//! => 'srawedoc'

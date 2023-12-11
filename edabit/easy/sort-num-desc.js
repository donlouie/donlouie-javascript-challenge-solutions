//? Function that takes any non-negative number as an argument and return it with digits in desc
//* Example
//! sortDescending(123) ➞ 321
//! sortDescending(1254859723) ➞ 9875543221

function sortDescending(num) {
  newNumber = num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  console.log(parseInt(newNumber));
}

sortDescending(6546);

/**
 ** Other solutions
 ** Solution #1
 function sortDescending(num) {
  const numbers = [...num + ''].sort().reverse().join('');
  return parseInt(numbers, 10);
}
** Solution #2
sortDescending = n =>
  +[...n+''].sort().reverse().join``
 */

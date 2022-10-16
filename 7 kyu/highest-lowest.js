//? You are given a string of space separated numbers, and have to return the highest
//? and lowest numbers
//* Example
//! '1 2 3 4 5' => '5 1'
//! '1 9 3 4 -5' => '9 -5'

function highAndLow(numbers) {
  // ...
  numbers = numbers.split(' ');
  console.log(`${Math.max(...numbers)} ${Math.min(...numbers)}`);
}

highAndLow('1 2 -3 4 5');

/**
 ** Other Solutions
 ** Solution #1
  function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
 ** Solution #2
  function highAndLow(numbers){
  var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
}

 */

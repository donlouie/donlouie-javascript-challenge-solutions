//? Square every digit
//* Example
//! 9119 => 811181

function squareDigits(num) {
  const squaredArr = [];
  const digits = num.toString().split('');

  for (let digit of digits) {
    const int = parseInt(digit);
    squared = Math.pow(int, 2);
    squaredArr.push(squared);
    concatenate = squaredArr.join('');

    output = parseInt(concatenate);
  }
  console.log(output);
}

squareDigits(9119);

//* Other solutions

/**
 * Solution #1
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

*Solution #2
function squareDigits(num){
var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
});

return parseInt(array.join(""));
}
*/

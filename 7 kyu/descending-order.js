//? Rearrange digits to descending order
//* Example
//! 42145 => 54421

function descendingOrder(n) {
  return parseInt(n.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(123456789));

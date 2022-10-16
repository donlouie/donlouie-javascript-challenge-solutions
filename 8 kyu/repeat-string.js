//? Write a function called repeatStr which repeats the given string string exactly n times.
//* Example
//! repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(3, '*'));
// => ***

//? Create a function that takes current position and roll(1-6), return
//* Example
//! move(3,6) => 15

function move(position, roll) {
  // return the new position
  return roll * 2 + position;
}

console.log(move(0, 4));
// => 8

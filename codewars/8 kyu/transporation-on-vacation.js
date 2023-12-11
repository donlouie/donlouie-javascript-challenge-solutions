//? Write a code that gives out the total amount for different days(d).
//?Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//* Example
//! console.log(rentalCarCost(2)) => 8

function rentalCarCost(d) {
  const cost = 40;
  // Your solution here
  if (d >= 3 && d <= 6) {
    return d * cost - 20;
  } else if (d >= 7) {
    return d * cost - 50;
  }
  return d * cost;
}

console.log(rentalCarCost(1));
// => 40
// console.log(rentalCarCost(2))
// => 80

/**
 ** Other solutions
 ** Solution #1
 const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
 */

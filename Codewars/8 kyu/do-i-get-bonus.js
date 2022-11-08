/**
 *? Instruction
 Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
 */
//* Example
//! bonusTime(10000, true) => '£100000'
//! bonusTime(78, false) => '£78'

function bonusTime(salary, bonus) {
  // your code here
  return bonus === true ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime(25000, true));

/**
 *? Instruciton
 Given a month as an integer from 1 to 12, return to which quarter of the year 
 it belongs as an integer number.
 */
//* Example
//! Test.assertEquals(quarterOf(3), 1)
//!   Test.assertEquals(quarterOf(8), 3)

const quarterOf = (month) => {
  // Your code here
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
      break;
    case 4:
    case 5:
    case 6:
      return 2;
      break;
    case 7:
    case 8:
    case 9:
      return 3;
      break;
    case 10:
    case 11:
    case 12:
      return 4;
      break;
    default:
      return 'invalid month';
  }
};

console.log(quarterOf(11));
// => 4

/**
 ** Other solutions
 ** Solution #1
  const quarterOf = m => Math.ceil(m/3);
  
 */

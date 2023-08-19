//? Define a function called allEvens that accept a single arr of num. If the arr contains all
//? even numbers, return true. Otherwise, return false. Use 'some' or 'every'
//* Example
//! allEvens([1,4,6,8]) => false

const allEvens = (arr) => {
  return arr.every((n) => n % 2 === 0);
};

allEvens([2, 4, 6, 8]);

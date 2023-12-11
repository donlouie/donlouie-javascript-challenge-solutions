//? Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
//* Example
//! twiceAsOld(55,30) => 5

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - sonYearsOld - sonYearsOld);
}

console.log(twiceAsOld(36, 7));
// => twiceAsOld(36,7) , 22

/**
 ** Other solutions
 ** Solution #1
 function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
} 
 */

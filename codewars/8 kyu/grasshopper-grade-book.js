/** 
*? Instruction
Complete the function so that it finds the mean of the three scores 
passed to it and returns the letter value associated with that grade.
*/
//* Example
//! getGrade(95,90,93), 'A'
//! getGrade(44,55,52), 'F'

function getGrade(s1, s2, s3) {
  // Code here
  const mean = Math.round((s1 + s2 + s3) / 3);

  const grade =
    mean >= 90
      ? 'A'
      : mean >= 80 && mean <= 89
      ? 'B'
      : mean >= 70 && mean <= 79
      ? 'C'
      : mean >= 60 && mean <= 69
      ? 'D'
      : 'F';

  return grade;
}

// => C
console.log(getGrade(89, 89, 90));

/**
 ** Other solutions
 ** Solution #1
  function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}
 */

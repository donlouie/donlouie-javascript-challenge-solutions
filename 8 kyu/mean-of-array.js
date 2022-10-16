//? Calculate average of array rounded down to its nearest integer
//* Example
//! Test.assertEquals(getAverage([1,2,3,4,5,]),3);

function getAverage(marks) {
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  const avg = total / marks.length;
  console.log(Math.floor(avg));
}

getAverage([1, 2, 3, 4, 5]);

/**
 ** Other solutions
 ** Solution #1
 function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
 */

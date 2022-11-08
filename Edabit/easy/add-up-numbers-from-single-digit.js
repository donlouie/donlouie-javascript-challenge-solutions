//? Add numbers from single digit
//* Example
//! addUp(4) => 4 + 3 + 2 + 1 => 10

//* Solution #1
function addUp(num) {
  let sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }

  console.log(sum);
}

addUp(4);

//* Solution #2
// let addUp = (number) => {
//   var sum = 0;
//   for (var i = 1; i <= number; i++) {
//     sum += i;
//   }
//   console.log(sum);
// };

// addUp(13);

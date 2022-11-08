//? Count number of sheep
//! true = +1 ; false = 0

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let n = 0;
    arrayOfSheep.forEach((e) => {
        if (e === true) n = n + 1;
    });
    return n;
}

console.log(
    countSheeps([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
    ])
);

// Other Solution
// Solution #1
/*
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
*/

// Solution #2
/*
let countSheeps = x => x.filter( s => s ).length;
*/

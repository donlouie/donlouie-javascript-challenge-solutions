//? mplement a function named generateRange(min, max, step), which takes three arguments and generates a
//? range of integers from min to max, with the step. The first integer is the minimum value, the second
//? is the maximum of the range and the third is the step. (min < max)
function generateRange(min, max, step) {
    const a = [];
    while (min <= max) {
        a.push(min);
        min = min + step;
    }
    return a;
}

console.log(generateRange(2, 10, 2));
// [2, 4, 6, 8, 10]

//Other Solution
//Solution #1
/*
function generateRange(min, max, step){
  let arr = [];
  for (let i=min; i<=max; i += step) {
    arr.push(i);
  }
  return arr;
}
*/

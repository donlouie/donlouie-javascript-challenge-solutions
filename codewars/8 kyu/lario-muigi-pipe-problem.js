//? Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
//* Example
//! Input: 1,3,5,6,7,8 => Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers) {
  let x = numbers[0] - 1;
  let y = numbers[numbers.length - 1];
  const z = [];
  while (x < y) {
    x++;
    z.push(x);
  }
  return z;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));

//? You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//* Example
//! arr1 = [1, 2, 3, 4, 5]; arr2 = [6, 7, 8, 9, 10]; => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mergeArrays(arr1, arr2) {
  let x = arr1.concat(arr2);
  return [...new Set(x.sort((a, b) => a - b))];
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
// => [1,2,3,4,5,7,9,10,11,12]

/**
 ** Other Solutions
 ** Solution #1
  function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}
 */
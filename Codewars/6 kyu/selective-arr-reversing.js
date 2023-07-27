// Given an array, return the reversed version of the array (a different kind of reverse though),
// you reverse portions of the array, you'll be given a length argument which represents the length of each
// portion you are to reverse.
//
// E.g
//
// selReverse([1,2,3,4,5,6], 2)
// //=> [2,1, 4,3, 6,5]
// if after reversing some portions of the array and the length of the remaining portion in the array is
// not up to the length argument, just reverse them.
//
// selReverse([2,4,6,8,10,12,14,16], 3)
// //=> [6,4,2, 12,10,8, 16,14]
// selReverse(array, length)
//
// array - array to reverse
// length - length of each portion to reverse
// Note : if the length argument exceeds the array length, reverse all of them, if the length argument
// is zero do not reverse at all.

function selReverse(array, length) {
    // Initialize an empty array to hold the output, and store the length of the input array.
    let output = [],
        l = array.length;

    // If the length argument is zero, return a copy of the input array.
    if (length === 0) return array.slice();

    // Loop through the input array in segments of the specified length.
    for (let i = 0; i < l; i += length) {
        // Calculate the index of the last element to include in this segment.
        let start = Math.min(i + length, l) - 1;

        // Loop through the elements in this segment in reverse order, and add them to the output array.
        for (let j = start; j >= i; j--) {
            output.push(array[j]);
        }
    }

    // Return the output array.
    return output;
}


console.log(selReverse([1,2,3,4,5,6], 2)); //=> [2,1, 4,3, 6,5]
console.log(selReverse([2,4,6,8,10,12,14,16], 3)); //=> [6,4,2, 12,10,8, 16,14]

// Other Solution
// Solution 1
/*
function selReverse(array, length) {
    if (length == 0) return array;
    let result = [];
    for(let i = 0; i < array.length; i += length) {
        result.push(...array.slice(i, i+length).reverse());
    }
    return result;
}
*/
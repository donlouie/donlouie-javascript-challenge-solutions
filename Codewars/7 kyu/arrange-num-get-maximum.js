//? Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number.
//? Return null if invalid
//* Example
//! maxRedigit(123); // returns 321
const maxRedigit = function(num) {
    return num.toString().length === 3 ? parseInt(num.toString().split('').sort().reverse().join('')) : null;
};

console.log(maxRedigit(123));
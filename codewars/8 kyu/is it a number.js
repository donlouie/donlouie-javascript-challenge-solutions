function isDigit(s) {
    //your code
    if (typeof s != 'string') return false;
    return !isNaN(s) && !isNaN(parseFloat(s));
}

console.log(isDigit('s2324')); // false
console.log(isDigit('-234.4')); // true

// Other Solution
// Solution #1
/*
function isDigit(s) {
 return s==parseFloat(s);
}
*/

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum
// 4 positive integers. No floats or non-positive integers will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    //Code here
    const [a,b] = numbers.sort((a, b) => a - b);

    return a + b;

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // return 13

// Other Solution
// Solution 1
function sumTwoSmallestNumbers(numbers) {
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;

    var n;
    for (i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if(n < min) {
            secondMin = min;
            min = n;
        } else if( n < secondMin ) {
            secondMin = n;
        }
    }

    return min + secondMin;
}
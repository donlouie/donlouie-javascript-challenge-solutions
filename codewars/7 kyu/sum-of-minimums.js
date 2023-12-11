function sumOfMinimums(arr){
    const minimumValues = [];

    arr.forEach((el) => {
       const minimum = el.reduce((a, b) => Math.min(a, b));
        minimumValues.push(minimum);
    })

    return minimumValues.reduce((acc,cur) => acc += cur);
}


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

// ----https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

// Other Solution
// Solution 1
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}
//? Get sum of array (strings and int value)

function sumMix(x) {
    return x.map(Number).reduce((a, b) => a + b, 0);
}

console.log(sumMix([9, 3, '7', '3'])); // 22

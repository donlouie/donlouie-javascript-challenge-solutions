function multipleOfIndex(array) {
    x = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i == 0) x.push(array[i]);
    }
    return x;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); //  [-6, 32, 25]
//[0, 1, 2, 3, 4, 5]

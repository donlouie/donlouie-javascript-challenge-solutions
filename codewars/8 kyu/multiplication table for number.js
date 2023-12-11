//? Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
    // good luck
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    x.forEach((n) => {
        let a = number * n;
        console.log(`${n} * ${number} = ${a}`);
    });
}

multiTable(5);

